class AiPermissions {
    aiPermissions(resultTracker, dataSet) {
      cy.visit(`${dataSet.link}/products-and-assets`);
      cy.wait(2000);
      const AiButtonSelector = ".w-\\[4\\%\\]";
      cy.get("body").then(($body) => {
        if ($body.find(AiButtonSelector).length > 0) {
          cy.get(AiButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                const errorMessage = "Error: Host able to see Ai script genarate button";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to genarate Ai script";
                resultTracker.stepToReproduces.push(stepToReproduce);
                cy.log(errorMessage);
              }
            });
        } else {
          cy.log('Success: "Host not able to see Ai script genarate button"');
          resultTracker.successCount++;
        }
      });
    }
  }
  export default AiPermissions;
  