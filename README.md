# on-off-boarding

Workflows for onboarding and offboarding collaborators to projects within NOAA Fisheries Office of Science and Technology

# Getting Started

```mermaid
flowchart TD;
    ti{"Onboarding Process"};
    A0("Branch Director") --- A(["Navigate to Issues"]);
    A --> B(["Select Onboarding or Offboarding Template"]);
    B --> C("Fill out details of your template");
    D("Add project specific command (i.e. \fims)");
    E["Assign issue to onboardee"];
    C --> D;
    C --> E;
    
    A1("New Employee") --- A;
    A --> G["Read through README"];
    G --> new("Complete onboarding tasks of assigned issue");
    
    E --> F["Close issue"];
    new --> F;
```

# Common Software 


# AI Resources at NOAA Fisheries

![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white) ![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
	
> [!IMPORTANT]
> AI tools are currently under pilot use and only some users have access to GitHub copilot