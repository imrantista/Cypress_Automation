class AccountTrackingPermissions {
  TrakingPermissions(resultTracker, dataSet) {
    cy.visit(`${dataSet.link}/livescope`);
    cy.wait(2000);
    const trackingButtonSelector =
      "tbody > :nth-child(1) > :nth-child(11) > .flex";
    cy.get("body").then(($body) => {
      if ($body.find(trackingButtonSelector).length > 0) {
        cy.get(trackingButtonSelector)
          .should("be.visible")
          .then(($btn) => {
            cy.wrap($btn)
              .invoke("attr", "disabled")
              .then((disabled) => {
                if (disabled) {
                  cy.log(
                    'Success: "Host is not able to enable/disable tracking for any livescope account."'
                  );
                  resultTracker.successCount++;
                } else {
                  const errorMessage =
                    "Error: Host is able to enable/disable tracking for a livescope account.";
                  resultTracker.errorMessages.push(errorMessage);
                  resultTracker.errorCount++;
                  const stepToReproduce =
                    "Login with host user and try to tarking enable/disable livescope account";
                  resultTracker.stepToReproduces.push(stepToReproduce);
                  cy.log(errorMessage);
                }
              });
          });
      } else {
        cy.log(
          'Success: "Host is not able to enable/disable tracking for any livescope account."'
        );
        resultTracker.successCount++;
      }
    });
  }
}

export default AccountTrackingPermissions;
