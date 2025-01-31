class ProductAddPermissions {
    addPermissions(resultTracker, dataSet) {
      cy.visit(`${dataSet.link}/products-and-assets`);
      cy.wait(2000);
      const addButtonSelector = ".vs-btn";
      cy.get("body").then(($body) => {
        if ($body.find(addButtonSelector).length > 0) {
          cy.get(addButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                const errorMessage = "Error: Host able to see product Add new button";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to add new product";
                resultTracker.stepToReproduces.push(stepToReproduce);
                cy.log(errorMessage);
              }
            });
        } else {
          cy.log('Success: "Host not able to see product Add new button"');
          resultTracker.successCount++;
        }
      });
    }
  }
  export default ProductAddPermissions;
  