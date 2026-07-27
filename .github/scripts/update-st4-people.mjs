import fs from "node:fs/promises";
import path from "node:path";

const [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
const token = process.env.GITHUB_TOKEN;

if (!owner || !repo || !token) {
  throw new Error("Missing GITHUB_REPOSITORY or GITHUB_TOKEN.");
}

const PROJECTS = {
  connect: { leadHandles: ["kellijohnson-noaa"] },
  dismap: { leadHandles: ["melissa-karp"] },
  fims: { leadHandles: ["kellijohnson-noaa"] },
  fit: { leadHandles: ["k-doering-noaa"] },
  ggt: { leadHandles: ["nmfs-ost-ggt"] },
  projections: { leadHandles: ["melissa-karp"] },
  sis: { leadHandles: ["jvieser-noaa", "jeffvieser"] },
  workflows: { leadHandles: ["schiano-noaa"] }
};

async function gh(pathname) {
  const res = await fetch(`https://api.github.com${pathname}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${res.status} for ${pathname}: ${body}`);
  }

  return res.json();
}

async function paginate(pathPrefix) {
  const all = [];
  let page = 1;

  while (true) {
    const pageItems = await gh(`${pathPrefix}${pathPrefix.includes("?") ? "&" : "?"}per_page=100&page=${page}`);
    all.push(...pageItems);
    if (pageItems.length < 100) {
      break;
    }
    page += 1;
  }

  return all;
}

function parseField(body, label) {
  if (!body) return "";
  const re = new RegExp(`###\\s+${label}\\s*[\\r\\n]+([\\s\\S]*?)(?:\\n###\\s+|$)`);
  const match = body.match(re);
  if (!match) return "";
  const value = match[1].trim();
  if (!value || value === "_No response_") return "";
  return value.replace(/\r/g, "").split("\n")[0].trim();
}

function profileFromIssue(issue) {
  const fullName =
    parseField(issue.body, "Collaborator's Full Name") ||
    issue.title.replace(/^\[Profile\]:\s*/i, "").trim();

  const usernameRaw = parseField(issue.body, "GitHub Username");
  const username = usernameRaw.replace(/^@/, "").trim();

  return {
    fullName,
    username: username || ""
  };
}

function shouldIgnoreProfile(profile) {
  const text = `${profile.fullName || ""} ${profile.username || ""}`.toLowerCase();
  return /jane[-_ ]?doe/.test(text) || /test profile/.test(text);
}

function membershipFromComments(comments) {
  const state = new Map();
  const cmdRe = /^\/(onboard|offboard)-([a-z0-9-]+)\b/i;

  for (const comment of comments) {
    const body = (comment.body || "").trim();
    if (!body.startsWith("/")) {
      continue;
    }

    const firstLine = body.split(/\r?\n/, 1)[0].trim();
    const match = firstLine.match(cmdRe);
    if (!match) {
      continue;
    }

    const mode = match[1].toLowerCase();
    const project = match[2].toLowerCase();

    if (Object.hasOwn(PROJECTS, project)) {
      state.set(project, mode === "onboard");
    }
  }

  return state;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderMembersTable(members) {
  if (members.length === 0) {
    return "<!-- Project members will appear here when onboarded members exist. -->";
  }

  const cols = 4;
  const cells = members.map((member) => {
    const login = escapeHtml(member.username);
    const name = escapeHtml(member.fullName || member.username);
    return `<td align="center" valign="top" style="padding:12px"><a href="https://github.com/${login}"><img src="https://github.com/${login}.png?size=100" width="100" alt="${login}" style="border-radius:8px"/><br/><sub>${name}</sub></a></td>`;
  });

  const rows = [];
  for (let i = 0; i < cells.length; i += cols) {
    rows.push(`<tr>${cells.slice(i, i + cols).join("")}</tr>`);
  }

  return `<table>${rows.join("")}</table>`;
}

function updateBlock(content, key, replacement) {
  const start = `<!-- BEGIN AUTO MEMBERS: ${key} -->`;
  const end = `<!-- END AUTO MEMBERS: ${key} -->`;
  const re = new RegExp(`${start}[\\s\\S]*?${end}`);

  if (!re.test(content)) {
    throw new Error(`Missing marker block for ${key}.`);
  }

  return content.replace(re, `${start}\n${replacement}\n${end}`);
}

async function main() {
  const issues = await paginate(`/repos/${owner}/${repo}/issues?state=all`);
  const profileIssues = issues.filter((issue) => {
    if (issue.pull_request) {
      return false;
    }

    const labels = Array.isArray(issue.labels) ? issue.labels : [];
    return labels.some((label) => {
      const name = typeof label === "string" ? label : label?.name;
      return String(name || "").toLowerCase() === "profile";
    });
  });

  const projectMembers = new Map(Object.keys(PROJECTS).map((key) => [key, new Map()]));

  for (const issue of profileIssues) {
    const profile = profileFromIssue(issue);
    if (!profile.username) {
      continue;
    }

    if (shouldIgnoreProfile(profile)) {
      continue;
    }

    const comments = await paginate(`/repos/${owner}/${repo}/issues/${issue.number}/comments`);
    const memberships = membershipFromComments(comments);

    for (const [project, isOnboarded] of memberships.entries()) {
      if (!isOnboarded) {
        continue;
      }

      const leadHandles = (PROJECTS[project]?.leadHandles || []).map((h) => h.toLowerCase());
      if (leadHandles.includes(profile.username.toLowerCase())) {
        continue;
      }

      projectMembers.get(project).set(profile.username.toLowerCase(), profile);
    }
  }

  const filePath = path.join(process.cwd(), "st4-people.qmd");
  let content = await fs.readFile(filePath, "utf8");

  for (const key of Object.keys(PROJECTS)) {
    const members = Array.from(projectMembers.get(key).values()).sort((a, b) =>
      (a.fullName || a.username).localeCompare(b.fullName || b.username)
    );
    content = updateBlock(content, key, renderMembersTable(members));
  }

  await fs.writeFile(filePath, content, "utf8");
  console.log("Updated st4-people.qmd from profile issues and slash commands.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
