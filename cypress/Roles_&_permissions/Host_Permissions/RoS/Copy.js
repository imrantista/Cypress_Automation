class RoSCopyPermissions {
  copyPermissions(resultTracker, dataSet) {
    cy.visit(`${dataSet.link}/run-of-shows`);
    cy.wait(2000);
    const addButtonSelector =
      ":nth-child(1) > :nth-child(7) > .flex > .bg-\\[\\#1FC7A9\\]\\/\\[10\\%\\]";
    cy.get("body").then(($body) => {
      if ($body.find(addButtonSelector).length > 0) {
        cy.get(addButtonSelector)
          .should("be.visible")
          .then(($btn) => {
            if ($btn.length > 0) {
              const errorMessage = "Error: Host able to see RoS copy button";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Login with host user and try to copy RoS";
              resultTracker.stepToReproduces.push(stepToReproduce);
              cy.log(errorMessage);
            }
          });
      } else {
        cy.log('Success: "Host not able to see RoS copy button"');
        resultTracker.successCount++;
      }
    });
  }
}
export default RoSCopyPermissions;
