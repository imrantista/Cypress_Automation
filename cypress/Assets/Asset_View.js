import CommonActions from "../Common/Actions";
class AssetView{
    assetView(resultTracker){
      const commonAction = new CommonActions()
      cy.wait(4000);
    cy.get("body").then(($body) => {
      if ($body.find(".vs-modal-header-content > .text-base").length > 0) {
        cy.get(".vs-modal-header-content > .text-base")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Asset Details")) {
              cy.log('Success: "Asset Details found in asset view page"');
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Asset Details not found in asset view page";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on view icon->Asset view page";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.vs-modal-header-content > .text-base] not showing for Elelemnt: Asset Details ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on view icon->Asset view page";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Description
    cy.get("body").then(($body) => {
        if ($body.find(".vs-modal-body").length > 0) {
          cy.get(".vs-modal-body")
            .should("be.visible")
            .then(($element) => {
              if ($element.text().includes("Description")) {
                cy.log('Success: "Description found in asset view page"');
                resultTracker.successCount++;
              } else {
                const errorMessage =
                  "Error: Description not found in asset view page";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Assets->Asset list page->click on view icon->Asset view page";
                resultTracker.stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage =
            "Error: Selector: [.vs-modal-body] not showing for Elelemnt: Description ";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce =
            "Assets->Asset list page->click on view icon->Asset view page";
          resultTracker.stepToReproduces.push(stepToReproduce);
        }
      });
      //Script
    cy.get("body").then(($body) => {
        if ($body.find(".vs-modal-body").length > 0) {
          cy.get(".vs-modal-body")
            .should("be.visible")
            .then(($element) => {
              if ($element.text().includes("Script")) {
                cy.log('Success: "Script found in asset view page"');
                resultTracker.successCount++;
              } else {
                const errorMessage =
                  "Error: Script not found in asset view page";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Assets->Asset list page->click on view icon->Asset view page";
                resultTracker.stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage =
            "Error: Selector: [.vs-modal-body] not showing for Elelemnt: Script ";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce =
            "Assets->Asset list page->click on view icon->Asset view page";
          resultTracker.stepToReproduces.push(stepToReproduce);
        }
      });
       //Tag(s)
    cy.get("body").then(($body) => {
        if ($body.find(".vs-modal-body").length > 0) {
          cy.get(".vs-modal-body")
            .should("be.visible")
            .then(($element) => {
              if ($element.text().includes("Tag(s)")) {
                cy.log('Success: "Tag(s) found in asset view page"');
                resultTracker.successCount++;
              } else {
                const errorMessage =
                  "Error: Tag(s) not found in asset view page";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Assets->Asset list page->click on view icon->Asset view page";
                resultTracker.stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage =
            "Error: Selector: [.vs-modal-body] not showing for Elelemnt: Tag(s) ";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce =
            "Assets->Asset list page->click on view icon->Asset view page";
          resultTracker.stepToReproduces.push(stepToReproduce);
        }
      });
      //Image
    cy.get("body").then(($body) => {
        if ($body.find(".vs-modal-body").length > 0) {
          cy.get(".vs-modal-body")
            .should("be.visible")
            .then(($element) => {
              if ($element.text().includes("Image")) {
                cy.log('Success: "Image found in asset view page"');
                resultTracker.successCount++;
              } else {
                const errorMessage =
                  "Error: Image not found in asset view page";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Assets->Asset list page->click on view icon->Asset view page";
                resultTracker.stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage =
            "Error: Selector: [.vs-modal-body] not showing for Elelemnt: Image ";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce =
            "Assets->Asset list page->click on view icon->Asset view page";
          resultTracker.stepToReproduces.push(stepToReproduce);
        }
      });
    }
}
export default AssetView;