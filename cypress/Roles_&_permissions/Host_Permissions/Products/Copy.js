class ProductCopyPermissions {
    copyPermissions(resultTracker, dataSet) {
      cy.visit(`${dataSet.link}/products-and-assets`);
      cy.wait(2000);
      const copyButtonSelector = ":nth-child(1) > :nth-child(11) > .flex > .bg-\\[\\#1FC7A9\\]\\/\\[10\\%\\]";
      cy.get("body").then(($body) => {
        if ($body.find(copyButtonSelector).length > 0) {
          cy.get(copyButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                const errorMessage = "Error: Host able to see product copy button";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to copy product";
                resultTracker.stepToReproduces.push(stepToReproduce);
                cy.log(errorMessage);
              }
            });
        } else {
          cy.log('Success: "Host not able to see product copy button"');
          resultTracker.successCount++;
        }
      });
    }
  }
  export default ProductCopyPermissions;
  