class InviteUserPermissions {
  invitePermissions(resultTracker, dataSet) {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    cy.get("body").then(($body) => {
      if ($body.find('[title="Go to Live Campaigns page"]').length > 0) {
        cy.get('[title="Go to Live Campaigns page"]')
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Live Campaigns")) {
              cy.log('Success: "Host not able to see Invited User page"');
              resultTracker.successCount++;
            } else {
              const errorMessage = "Error: Host able to see invite user page";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Login with host user and try to visit in invite user page";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage = "Error: Host able to see invite user page";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Login with host user and try to visit in invite user page";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
  }
}
export default InviteUserPermissions;
