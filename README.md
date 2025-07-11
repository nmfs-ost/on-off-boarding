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
    