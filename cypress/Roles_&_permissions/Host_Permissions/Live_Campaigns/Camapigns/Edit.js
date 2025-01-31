class CampaignEditPermissions {
    editPermissions(resultTracker, dataSet) {
      cy.visit(`${dataSet.link}/live-campaigns?tab=Campaigns`);
      cy.wait(2000);
      const editButtonSelector = ":nth-child(1) > :nth-child(11) > .flex > .text-primaryYellow";
      cy.get("body").then(($body) => {
        if ($body.find(editButtonSelector).length > 0) {
          cy.get(editButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                const errorMessage = "Error: Host able to see Campaign edit button";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to edit Campaign";
                resultTracker.stepToReproduces.push(stepToReproduce);
                cy.log(errorMessage);
              }
            });
        } else {
          cy.log('Success: "Host not able to see Campaign edit button"');
          resultTracker.successCount++;
        }
      });
    }
  }
  export default CampaignEditPermissions;
  