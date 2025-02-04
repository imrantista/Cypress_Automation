class LivescopesAddPermissions {
  addPermissions(resultTracker, dataSet) {
    cy.visit(`${dataSet.link}/dashboard`);
    cy.wait(2000);
    cy.window().then((win) => {
      const scrollHeight = win.document.body.scrollHeight;
      win.scrollTo(0, scrollHeight);
      const addButtonSelector = ".justify-between > .h-fit > .font-montserrat";
      cy.get("body").then(($body) => {
        if ($body.find(addButtonSelector).length > 0) {
          cy.get(addButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                const errorMessage =
                  "Error: Host able to see Livescope Add new button from Home dashboard";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to add new Livescope account from Home dashboard";
                resultTracker.stepToReproduces.push(stepToReproduce);
                cy.log(errorMessage);
              }
            });
        } else {
          cy.log(
            'Success: "Host not able to see Livescope Add new button from Home dashboard"'
          );
          resultTracker.successCount++;
        }
      });
    });
  }
}
export default LivescopesAddPermissions;
