class CampaignAddPermissions {
    addPermissions(resultTracker, dataSet) {
      cy.visit(`${dataSet.link}/live-campaigns?tab=Campaigns`);
      cy.wait(2000);
      const addButtonSelector = ".vs-btn";
      cy.get("body").then(($body) => {
        if ($body.find(addButtonSelector).length > 0) {
          cy.get(addButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                const errorMessage = "Error: Host able to see Campaign Add new button";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to add new Campaign";
                resultTracker.stepToReproduces.push(stepToReproduce);
                cy.log(errorMessage);
              }
            });
        } else {
          cy.log('Success: "Host not able to see Campaign Add new button"');
          resultTracker.successCount++;
        }
      });
    }
  }
  export default CampaignAddPermissions;
  