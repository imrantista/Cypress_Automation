class ProductDeletePermissions {
    deletePermissions(resultTracker, dataSet) {
      cy.visit(`${dataSet.link}/products-and-assets`);
      cy.wait(2000);
      const deleteButtonSelector = ":nth-child(1) > :nth-child(11) > .flex > .text-primaryRed";
      cy.get("body").then(($body) => {
        if ($body.find(deleteButtonSelector).length > 0) {
          cy.get(deleteButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                const errorMessage = "Error: Host able to see product delete button";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to delete product";
                resultTracker.stepToReproduces.push(stepToReproduce);
                cy.log(errorMessage);
              }
            });
        } else {
          cy.log('Success: "Host not able to see product delete button"');
          resultTracker.successCount++;
        }
      });
    }
  }
  export default ProductDeletePermissions;
  