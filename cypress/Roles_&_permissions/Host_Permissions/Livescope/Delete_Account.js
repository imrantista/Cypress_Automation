class AccountDeletePermissions {
  deletePermissions(resultTracker, dataSet) {
    cy.visit(`${dataSet.link}/livescope`);
    cy.wait(2000);
    const deleteButtonSelector =
      ":nth-child(1) > :nth-child(12) > .flex > .text-primaryRed";
    cy.get("body").then(($body) => {
      if ($body.find(deleteButtonSelector).length > 0) {
        cy.get(deleteButtonSelector)
          .should("be.visible")
          .then(($btn) => {
            if ($btn.length > 0) {
              const errorMessage =
                "Error: Host able to see livescope account delete button";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Login with host user and try to delete livescope account";
              resultTracker.stepToReproduces.push(stepToReproduce);
              cy.log(errorMessage);
            }
          });
      } else {
        cy.log(
          'Success: "Host not able to see livescope account delete button"'
        );
        resultTracker.successCount++;
      }
    });
  }
}
export default AccountDeletePermissions;
