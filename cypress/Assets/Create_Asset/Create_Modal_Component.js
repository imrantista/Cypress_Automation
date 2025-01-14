class CreateModalComponent {
  createModalComponent(resultTracker) {
    cy.wait(4000);
    cy.get("body").then(($body) => {
      if ($body.find(".vs-modal-header-content").length > 0) {
        cy.get(".vs-modal-header-content")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Add Asset")) {
              cy.log('Success: "Add Asset title found in asset create modal"');
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Add Asset title not found in asset create modal.";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.vs-modal-header-content] not showing for Elelemnt: Add Asset ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Image
    cy.get("body").then(($body) => {
      if ($body.find(":nth-child(1) > .gap-4").length > 0) {
        cy.get(":nth-child(1) > .gap-4")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Image")) {
              cy.log("Success: Image found in asset create modal");
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Image not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [:nth-child(1) > .gap-4] not showing for Elelemnt: Image ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Category
    cy.get("body").then(($body) => {
      if ($body.find(":nth-child(1) > .gap-4").length > 0) {
        cy.get(":nth-child(1) > .gap-4")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Category *")) {
              cy.log('Success: "Category * found in asset create modal"');
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Category * not found in asset create modal.";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [:nth-child(1) > .gap-4] not showing for Elelemnt: Category * ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Name
    cy.get("body").then(($body) => {
      if ($body.find(".grid > :nth-child(1) > :nth-child(2)").length > 0) {
        cy.get(".grid > :nth-child(1) > :nth-child(2)")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Name *")) {
              cy.log("Success: Name found in asset create modal");
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Name not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.grid > :nth-child(1) > :nth-child(2)] not showing for Elelemnt: Name * ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Description
    cy.get("body").then(($body) => {
      if ($body.find(".grid > :nth-child(1) > :nth-child(3)").length > 0) {
        cy.get(".grid > :nth-child(1) > :nth-child(3)")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Description")) {
              cy.log("Success: Description found in asset create modal");
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Description not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.grid > :nth-child(1) > :nth-child(3)] not showing for Elelemnt: Description ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Tag(s)
    cy.get("body").then(($body) => {
      if ($body.find(".grid > :nth-child(1) > :nth-child(4)").length > 0) {
        cy.get(".grid > :nth-child(1) > :nth-child(4)")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Tag(s)")) {
              cy.log("Success: Tag(s) found in asset create modal");
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Tag(s) not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.grid > :nth-child(1) > :nth-child(4)] not showing for Elelemnt: Tag(s) ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Script
    cy.get("body").then(($body) => {
      if ($body.find(".grid > :nth-child(2) > .w-full").length > 0) {
        cy.get(".grid > :nth-child(2) > .w-full")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Script *")) {
              cy.log("Success: Script * found in asset create modal");
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Script * not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.grid > :nth-child(2) > .w-full] not showing for Elelemnt: Script * ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    //Duration(HH:MM:SS) *
    cy.get("body").then(($body) => {
      if ($body.find(".col-span-3 > :nth-child(1)").length > 0) {
        cy.get(".col-span-3 > :nth-child(1)")
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Duration(HH:MM:SS) *")) {
              cy.log(
                "Success: Duration(HH:MM:SS) * found in asset create modal"
              );
              resultTracker.successCount++;
            } else {
              const errorMessage =
                "Error: Duration(HH:MM:SS) * not found in asset create modal";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Assets->Asset list page->click on Add new button->Asset create modal";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Selector: [.col-span-3 > :nth-child(1)] not showing for Elelemnt: Duration(HH:MM:SS) * ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Assets->Asset list page->click on Add new button->Asset create modal";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
  }
}
export default CreateModalComponent;
