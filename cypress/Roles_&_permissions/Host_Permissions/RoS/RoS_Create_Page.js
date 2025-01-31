class RoSCreatePagePermissions {
    createPagePermissions(resultTracker, dataSet) {
      cy.visit(`${dataSet.link}/builder?tab=products&source=run-of-shows`);
      cy.get("body").then(($body) => {
        if ($body.find('[title="Go to Live Campaigns page"]').length > 0) {
          cy.get('[title="Go to Live Campaigns page"]')
            .should("be.visible")
            .then(($element) => {
              if ($element.text().includes("Live Campaigns")) {
                cy.log('Success: "Host not able to see RoS create page using page URL"');
                resultTracker.successCount++;
              } else {
                const errorMessage = "Error: Host able to see RoS create page using page URL";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to visit RoS create page using page URL";
                resultTracker.stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage = "Error: Host able to see RoS create page using page URL";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce =
            "Login with host user and try to visit RoS create page using page URL";
          resultTracker.stepToReproduces.push(stepToReproduce);
        }
      });
    }
  }
  export default RoSCreatePagePermissions;
  