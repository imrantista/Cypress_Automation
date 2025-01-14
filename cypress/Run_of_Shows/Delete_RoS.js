import CommonActions from "../Common/Actions";
class DeleteRoS {
  deleteRoS(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .text-primaryRed>svg"
    );
    cy.wait(4000);
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
          cy.get(".gap-3 > .text-white").click();
          cy.wait(4000);
          cy.get("body").then(($body) => {
            if (
              $body.find(
                ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error"
              ).length > 0
            ) {
              cy.get(
                ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error"
              )
                .should("be.visible")
                .then(($element) => {
                  const toastText = $element.text();
                  if (toastText.includes("Run of Show deleted successfully!")) {
                    cy.log("Success: Run of Show deleted successfully!");
                    resultTracker.successCount++;
                  } else if (
                    toastText.includes(
                      "This Run of Show is linked to a scheduled or existing livestream and cannot be deleted."
                    )
                  ) {
                    cy.log(
                      "Success: This Run of Show is linked to a scheduled or existing livestream and cannot be deleted."
                    );
                    resultTracker.successCount++;
                  } else {
                    const errorMessage = "Error: Unable to delete Run of Show.";
                    resultTracker.errorMessages.push(errorMessage);
                    resultTracker.errorCount++;
                    const stepToReproduce =
                      "RoS->RoS list page->click on delete icon-> Try to delete RoS";
                    resultTracker.stepToReproduces.push(stepToReproduce);
                  }
                });
            } else {
              const errorMessage =
                "Error: Run of Show deleted but Toaster not showing or something else! ";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "RoS->RoS list page->click on delete icon-> Try to delete RoS";
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
        } else {
          const errorMessage =
            "Error: Run of Show delete confirmation button not visible!.";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce = "RoS->RoS list page->click on delete icon";
          resultTracker.stepToReproduces.push(stepToReproduce);
        }
      });
  }
}
export default DeleteRoS;
