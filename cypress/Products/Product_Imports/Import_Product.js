import CommonActions from "../../Common/Actions";
class ProductImport {
  productImport(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(2000);
    const platformSelector = ".py-7";
    cy.get("body").then(($body) => {
      if ($body.find(platformSelector).length > 0) {
        cy.get(platformSelector)
          .should("be.visible")
          .then(($btn) => {
            if ($btn.length > 0) {
              cy.log("Please Select shop for import product");
              commonAction.selectAndType(
                ".css-utw65z-control",
                `TikTok{enter}`
              );
              cy.wait(1000);
              const addButtonSelector = ".py-7";
              cy.get("body").then(($body) => {
                if ($body.find(addButtonSelector).length > 0) {
                  cy.get(addButtonSelector)
                    .should("be.visible")
                    .then(($btn) => {
                      if ($btn.length > 0) {
                        const errorMessage =
                          "Error: Please Connect shop for import product";
                        resultTracker.errorMessages.push(errorMessage);
                        resultTracker.errorCount++;
                        const stepToReproduce =
                          "Product->Click on Add new button->Try to import product";
                        resultTracker.stepToReproduces.push(stepToReproduce);
                        cy.log(errorMessage);
                      }
                    });
                } else {
                  importProduct();
                }
              });
            }
          });
      } else {
        importProduct();
      }
    });
    function importProduct() {
      commonAction.itemVisibility(".-mr-8 > .flex > .text-sm" );
      cy.log("Product import in progress");
      commonAction.itemVisibility(
        ".-mr-8 > .vs-pagination-container > .vs-pagination-numbers > .flex",100000
      );
      commonAction.selectAndType(
        ":nth-child(3) > .css-b62m3t-container > .css-utw65z-control",
        `Active{enter}`
      );
      cy.wait(1000);
      commonAction.clickElement(
        ":nth-child(11) > .relative > .false > .flex > .product-import-checkbox"
      );
      cy.wait(2000);
      commonAction.clickElement(".gap-3 > .text-white");
      commonAction.itemVisibility(".gap-3 > .text-white");
      commonAction.clickElement(".gap-3 > .text-white");
      const modalVisible = ".vs-modal-body > .w-full";
      cy.get("body").then(($body) => {
        if ($body.find(modalVisible).length > 0) {
          cy.get(modalVisible)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                commonAction.clickElement(
                  ".space-x-4 > .product-import-checkbox"
                );
                commonAction.clickElement(".gap-3 > .text-white");
                importmodal();
              }
            });
        } else {
          importmodal();
        }
      });
    }
    function importmodal() {
      commonAction.itemVisibility(".\\32 xl\\:mb-4 > .items-center");
      commonAction.clickElement(".\\32 xl\\:mb-4 > .items-center");
      commonAction.itemVisibility(".Toastify__toast-body", 100000);
      const exportButtonSelector = ".Toastify__toast-body";
      cy.get("body").then(($body) => {
        if ($body.find(exportButtonSelector).length > 0) {
          cy.get(exportButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                cy.log('Success: "Product imported successfully"');
                resultTracker.successCount++;
                cy.wait(1000)
                commonAction.clickElement(".gap-3 > .text-white")
                cy.wait(4000)
                commonAction.checkToast(
                  "Data exported successfully!",
                  "Data exported successfully!",
                  "Unable to export data",
                  "Prouct->Import Product->Try to export Import info",
                  resultTracker
                )
              }
            });
        } else {
          const errorMessage = "Error: Unable to Import product";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce =
            "Product->Click on Add new button->Try to import product";
          resultTracker.stepToReproduces.push(stepToReproduce);
          cy.log(errorMessage);
        }
      });
    }
  }
}
export default ProductImport;
