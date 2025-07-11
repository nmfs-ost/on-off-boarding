# on-off-boarding

Workflows for onboarding and offboarding collaborators to projects within NOAA Fisheries Office of Science and Technology

# Getting Started

```mermaid
flowchart TD;
    ti{"Onboarding New Employee"};
    A0("Branch Director") --- A(["Navigate to Issues"]);
    A --> B(["Select Onboarding or Offboarding Template"]);
    B --> C("Fill out details of your template");
    D("Add project specific command (i.e. \fims"));
    E["Assign issue to onboardee"];
    C --> D + E;
    
    A1("New Employee") --- A;
    A --> new("Complete onboarding tasks");
    
    E + new --> F["Close issue"];
```
    