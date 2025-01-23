import CommonActions from "../../Common/Actions";
import "@4tw/cypress-drag-drop";
class CreateRoS {
  createRoS(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(2000)
    cy.get('[data-rbd-draggable-id="0"] > .border').drag(".h-\\[500px\\]");
    cy.wait(4000);
    cy.get('[data-rbd-draggable-id="1"] > .border').drag(
      ".pt-8 > .\\32 xl\\:mb-4"
    );
    resultTracker.successCount++;
    cy.wait(4000);
    cy.get('[data-rbd-draggable-id="0"] > .border').drag(
      ".pt-8 > .\\32 xl\\:mb-4"
    );
    cy.wait(4000);
    cy.get(".gap-x-3 > .bg-primary").then(($button) => {
      if ($button.is(":visible")) {
        cy.wrap($button).click();
        resultTracker.successCount++;
      } else {
        const errorMessage =
          "Error: Contine button not visible when user try to add same content more then 1 times.";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "RoS->Create New RoS-> Try to add same contents 2 times";
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
    cy.wait(4000);
    commonAction.clickElement(".flex-end", "Save")
    cy.wait(4000);
    commonAction.checkToast(
        "Run of Show created successfully!",
        "Run of Show created successfully!",
        "Unable to create Run of Show.",
        "RoS->Create New RoS-> Try to create new RoS",
        resultTracker
    )
  }
}
export default CreateRoS;
