class RoSAddPermissions {
  addPermissions(resultTracker, dataSet) {
    cy.visit(`${dataSet.link}/livescope`);
    cy.wait(2000);
    const addButtonSelector =
      ".vs-btn";
    cy.get("body").then(($body) => {
      if ($body.find(addButtonSelector).length > 0) {
        cy.get(addButtonSelector)
          .should("be.visible")
          .then(($btn) => {
            if ($btn.length > 0) {
              const errorMessage =
                "Error: Host able to see livescope Add new button";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Login with host user and try to add new livescope account";
              resultTracker.stepToReproduces.push(stepToReproduce);
              cy.log(errorMessage);
            }
          });
      } else {
        cy.log(
          'Success: "Host not able to see livescope Add new button"'
        );
        resultTracker.successCount++;
      }
    });
  }
}
export default RoSAddPermissions;
