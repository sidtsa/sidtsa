import * as microsoftTeams from "@microsoft/teams-js";

microsoftTeams.initialize();

microsoftTeams.getContext((context) => {
    const teamNameElement = document.getElementById('team-name');
    if (teamNameElement) {
        teamNameElement.innerText = `Welcome to ${context.teamName}`;
    }
});
