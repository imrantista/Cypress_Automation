import CommonActions from "../../Common/Actions";
class RequiredField {
  requiredField(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(".gap-3 > .text-white");
    //Asset category is required.
    cy.get("body").then(($body) => {
      if ($body.find(".gap-4 > .w-full.text-black > .text-xs").length > 0) {
        cy.get(".gap-4 > .w-full.text-black > .text-xs")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Asset category is required.")) {
              cy.log(
                "Success: Asset category is required. found in asset create modal"
              );
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Asset category is required. not found not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal->Click on Add button";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.gap-4 > .w-full.text-black > .text-xs] not showing for Elelemnt: Asset category is required. ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal->Click on Add button";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Asset name is required.
    cy.get("body").then(($body) => {
      if (
        $body.find(".grid > :nth-child(1) > :nth-child(2) > .text-xs").length >
        0
      ) {
        cy.get(".grid > :nth-child(1) > :nth-child(2) > .text-xs")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Asset name is required.")) {
              cy.log(
                "Success: Asset name is required. found in asset create modal"
              );
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Asset name is required. not found not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal->Click on Add button";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.grid > :nth-child(1) > :nth-child(2) > .text-xs] not showing for Elelemnt: Asset name is required. ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal->Click on Add button";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Asset script is required.
    cy.get("body").then(($body) => {
      if ($body.find(":nth-child(2) > .w-full > .text-xs").length > 0) {
        cy.get(":nth-child(2) > .w-full > .text-xs")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Asset script is required.")) {
              cy.log(
                "Success: Asset script is required. found in asset create modal"
              );
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Asset script is required. not found not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal->Click on Add button";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [:nth-child(2) > .w-full > .text-xs] not showing for Elelemnt: Asset script is required. ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal->Click on Add button";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Asset duration is required.
    cy.get("body").then(($body) => {
      if ($body.find(".col-span-3 > :nth-child(1) > .text-xs").length > 0) {
        cy.get(".col-span-3 > :nth-child(1) > .text-xs")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Asset duration is required.")) {
              cy.log(
                "Success: Asset duration is required. found in asset create modal"
              );
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Asset duration is required. not found not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal->Click on Add button";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.col-span-3 > :nth-child(1) > .text-xs] not showing for Elelemnt: Asset duration is required. ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal->Click on Add button";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
  }
}
export default RequiredField;
