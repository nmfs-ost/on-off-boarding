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

![GitHub stats](https://github-readme-stats.vercel.app/api?username=nmfs-ost&show_icons=true&theme=transparent&role=OWNER,COLLABORATOR,ORGANIZATION_MEMBER)

## Getting Started

```mermaid
flowchart TD;
    A00["Onboarding Process"];
    A(["Navigate to Issues"]) --- A0(("Branch Director")) & A1(("New Employee"));
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

## Commonly Used Software 

<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg" alt="Rstudio" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="vscode" width="45" height="45" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="git" width="45" height="45" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="github" width="45" height="45" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-plain.svg" alt="google cloud" width="45" height="45"/>
</p>
          
          
## AI Resources at NOAA Fisheries

![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white) ![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
	
> [!IMPORTANT]
> AI tools are currently under pilot use and only some users have access to GitHub copilot