# NOAA Fisheries OST Onboarding and Offboarding <img src="assets/noaa-logo.png" align="right" height="150" style="float:right; height:150px;" />

Workflows for onboarding and offboarding collaborators to projects within NOAA 
Fisheries Office of Science and Technology. This README describes the process 
that a branch director and onboarded/offboarded employee should follow to 
successfully integrate or leave the agency.

## Welcome

We are happy for you to join onto our NOAA team! We here at OST take on a large 
breadth of responsibilities. We aim to execute modern and high-quality data 
collection, management, and open access programs. For more information, please 
go to our [internal webpage](https://sites.google.com/noaa.gov/inside-fisheries-ost/office-of-science-and-technology) 
to access resources, organization charts, and more.

<!---
![GitHub stats](https://github-readme-stats.vercel.app/api?username=nmfs-ost&show_icons=true&theme=transparent&role=OWNER,COLLABORATOR,ORGANIZATION_MEMBER)
--->

[![GitHub followers](https://img.shields.io/github/followers/your-username?style=social)](https://github.com/your-username)

| Project               | Status                                                       | Description                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [FIMS]                | [![fims-status]][fims-status-link]                           | Fisheries Integrated Modelling System                   |
| [asar]                | [![asar-status]][asar-status-link]                           | Partially Automated Stock Assessment Reporting          |
| [stockplotr]          | [![stockplotr-status]][stockplotr-status-link]               | Tables and figures for stock assessment documents       |
| [ss3-source-code]     | [![ss3-status]][ss3-status-link]                             | Stock Synthesis source code                             |

[FIMS]: https://github.com/noaa-fims/fims/
[fims-status]: https://noaa-fims.r-universe.dev/badges/FIMS
[fims-status-link]: https://noaa-fims.r-universe.dev/FIMS
[asar]: https://github.com/nmfs-ost/asar
[asar-status]: https://camo.githubusercontent.com/ec28d5c98ba24b18acce2adfea29626c528588d2600739498b9918899fb89851/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6966656379636c652d6578706572696d656e74616c2d6f72616e67652e737667
[asar-status-link]: https://lifecycle.r-lib.org/articles/stages.html#experimental
[stockplotr]: https://github.com/nmfs-ost/stockplotr
[stockplotr-status]:https://camo.githubusercontent.com/ec28d5c98ba24b18acce2adfea29626c528588d2600739498b9918899fb89851/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6966656379636c652d6578706572696d656e74616c2d6f72616e67652e737667
[stockplotr-status-link]: https://lifecycle.r-lib.org/articles/stages.html#experimental
[ss3-source-code]: https://github.com/nmfs-ost/ss3-source-code
[ss3-status]: https://camo.githubusercontent.com/cb06a0179e842ca184a96ef71ef6bca508b245577b474e301951a79641c71406/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f762f72656c656173652f6e6d66732d6f73742f7373332d736f757263652d636f6465
[ss3-status-link]: https://github.com/nmfs-ost/ss3-source-code/releases/tag/v3.30.23.2

## Getting Started

```mermaid 
---
config:
  theme: redux
  look: handDrawn
---

flowchart TD;
    A00["Onboarding Process"];
    A(["Navigate to Issues"]);
    A --- A0(("Branch Director")) & A1(("New Employee"));
    A0 --> B(["Select Onboarding or Offboarding Template"]);
    A1 ----> G["Read through README"];
    B --> C(["Fill out details of your template"]);
    C --> D["Add project specific command (i.e. \FIMS)"] & E["Assign issue to onboardee"];
    G --> new("Complete onboarding tasks of assigned issue");
    new --> F["Close issue"];
    
    D@{ shape: lin-rect};
    E@{ shape: lin-rect};
    F@{ shape: dbl-circ};
    A00@{ shape: delay};
    style A fill:transparent;
    style A0 fill:#BBDEFB;
    style A1 fill:#C8E6C9;
    style B fill:#FFCDD2;
    style G fill:#E1BEE7;
    style C fill:#FFCDD2;
    style D fill:#FFE0B2;
    style E fill:#FFE0B2;
    style new fill:#FFCDD2;
    style F fill:#D50000;
    style A00 fill:#FFF9C4;
    click A "https://github.com/nmfs-ost/on-off-boarding/issues";
```

## Project Contacts

### National Stock Assessment Program (NSAP)

| Director | Workflows | FIMS | DisMAP | SIS | FIT | SS3 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| <a href="https://github.com/Melissa-Karp"><img src="https://avatars.githubusercontent.com/u/61592412?v=4" width="100px;" alt=""/> | <a href="https://github.com/Schiano-NOAA"><img src="https://avatars.githubusercontent.com/u/125507018?u=b6dab08f04000188734eb3bbf78a40616e99b921&v=4" width="100px;" alt=""/> | <a href="https://github.com/kellijohnson-NOAA"><img src="https://avatars.githubusercontent.com/u/4108564?v=4" width="100px;" alt=""/> | <a href="https://github.com/Melissa-Karp"><img src="https://avatars.githubusercontent.com/u/61592412?v=4" width="100px;" alt=""/> | <a href="https://github.com/orgs/nmfs-ost/teams/nsap"><img src="https://avatars.githubusercontent.com/t/9092421?s=116&v=4" width="100px;" alt=""/> | <a href="https://github.com/k-doering-NOAA"><img src="https://avatars.githubusercontent.com/u/48930335?v=4" width="100px;" alt=""/> | <a href="https://github.com/e-perl-NOAA"><img src="https://avatars.githubusercontent.com/u/118312785?v=4" width="100px;" alt=""/> |
| Melissa Karp | Sam Schiano | Kelli Johnson | Melissa Karp | Jeff Vieser | Kathryn Doering | Elizabeth Perl |

### National Survey Program

### Other OST Divisions
          
## Software and Tools 

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg" alt="Rstudio" width="55" height="55"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="vscode" width="55" height="55" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="git" width="55" height="55" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="github" width="55" height="55" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-plain.svg" alt="google cloud" width="55" height="55"/>
<img src="assets/FIMS-logo.png" alt="FIMS logo" width="55" height="55"/>
<img src="assets/asar-hex.png" alt="asar logo" width="55" height="55"/>
<img src="assets/stockplotr-hex.png" alt="stock plot R logo" width="55" height="55"/>
</p>

## AI Resources at NOAA Fisheries

![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white) ![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
	
> [!IMPORTANT]
> AI tools are currently under pilot use and only some users have access to GitHub copilot