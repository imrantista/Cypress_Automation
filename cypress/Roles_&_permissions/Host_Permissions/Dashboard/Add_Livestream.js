class LivestreamsAddPermissions {
  addPermissions(resultTracker, dataSet) {
    cy.visit(`${dataSet.link}/dashboard`);
    cy.wait(2000);
    const addButtonSelector = ".right-[180px] > .font-montserrat";
    cy.get("body").then(($body) => {
      if ($body.find(addButtonSelector).length > 0) {
        cy.get(addButtonSelector)
          .should("be.visible")
          .then(($btn) => {
            if ($btn.length > 0) {
              const errorMessage =
                "Error: Host able to see Livestream Add new button from Home dashboard";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Login with host user and try to add new Livestream from Home dashboard";
              resultTracker.stepToReproduces.push(stepToReproduce);
              cy.log(errorMessage);
            }
          });
      } else {
        cy.log(
          'Success: "Host not able to see Livestream Add new button from Home dashboard"'
        );
        resultTracker.successCount++;
      }
    });
  }
}
export default LivestreamsAddPermissions;
