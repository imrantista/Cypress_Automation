import CommonActions from "../../Common/Actions";
class UserActiveDeactive {
  userActiveDeactive(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement("tbody > :nth-child(4) > :nth-child(6) > .flex");
    cy.wait(4000);
    cy.get("body").then(($body) => {
      if ($body.find(".gap-3 > .text-white").length > 0) {
        cy.get(".gap-3 > .text-white").should("be.visible").click();
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
                if ($element.text().includes("User disabled successfully!")) {
                  cy.log('Success: "User disabled successfully!"');
                  resultTracker.successCount++;
                } else {
                  const errorMessage =
                    "Error: Unable to disable actived user or something else";
                  resultTracker.errorMessages.push(errorMessage);
                  resultTracker.errorCount++;
                  const stepToReproduce =
                    "Users->user list page->Try to disable user";
                  resultTracker.stepToReproduces.push(stepToReproduce);
                }
              });
          } else {
            const errorMessage =
              "Error: User disabled but toaster not showing or something else";
            resultTracker.errorMessages.push(errorMessage);
            resultTracker.errorCount++;
            const stepToReproduce =
              "Users->user list page->Try to disable user";
            resultTracker.stepToReproduces.push(stepToReproduce);
          }
        });
      } else {
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
                if ($element.text().includes("User enabled successfully!")) {
                  cy.log('Success: "User enabled successfully!"');
                  resultTracker.successCount++;
                } else {
                  const errorMessage = "Error: Unable to enable deactived user";
                  resultTracker.errorMessages.push(errorMessage);
                  resultTracker.errorCount++;
                  const stepToReproduce =
                    "Users->user list page->Try to enable user";
                  resultTracker.stepToReproduces.push(stepToReproduce);
                }
              });
          } else {
            const errorMessage =
              "Error: User enabled but toaster not showing or something else";
            resultTracker.errorMessages.push(errorMessage);
            resultTracker.errorCount++;
            const stepToReproduce = "Users->user list page->Try to enable user";
            resultTracker.stepToReproduces.push(stepToReproduce);
          }
        });
      }
    });
  }
}
export default UserActiveDeactive;
