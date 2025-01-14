import CommonActions from "../../Common/Actions";
class AccountTracking {
  accountTracking(resultTracker) {
    const commonActions = new CommonActions();
    cy.wait(6000);
    commonActions.clickElement(
      "tbody > :nth-child(1) > :nth-child(11) > .flex"
    );
    function tracking() {
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
              if (
                toastText.includes("Account tracking enabled successfully!")
              ) {
                cy.log("Success: Account tracking enabled successfully!");
                resultTracker.successCount++;
              } else if (
                toastText.includes("Account tracking disabled successfully!")
              ) {
                cy.log('Success: "Account tracking disabled successfully!"');
                resultTracker.successCount++;
              } else {
                const errorMessage =
                  "Error: Ubable to account enable/disable account tracking";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Livescope->Livescope list page->Try to enable/disable account tracking";
                resultTracker.stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage =
            "Error: Account tracking enabled/disbaled but Toaster not showing or something esle!";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce =
            "Livescope->Livescope list page->Try to enable/disable account tracking";
          resultTracker.push(stepToReproduce);
        }
      });
    }
    tracking();
    cy.wait(4000);
    commonActions.clickElement("tbody > :nth-child(1) > :nth-child(11) > .flex")
    tracking();
    cy.wait(4000);
    commonActions.clickElement(":nth-child(12) > .flex > .text-primary")
    commonActions.itemVisibility(".mb-3 > :nth-child(1) > :nth-child(1) > .font-semibold")
    cy.wait(4000);
    commonActions.clickElement(".gap-1 > .flex");
    tracking();
    cy.wait(4000);
    commonActions.clickElement(".gap-1 > .flex");
    tracking();
    cy.wait(2000);
    commonActions.clickElement(".flex > .capitalize")
    commonActions.clearElement(".mb-6 > :nth-child(1) > .relative > .py-2")
  }
}
export default AccountTracking;
