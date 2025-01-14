import CommonActions from "../../Common/Actions";
class NewAccount {
  newAccount(resultTracker) {
    const commonAction = new CommonActions();
    const items = [
      "theoriginote",
      "uht.tee",
      "garnierthailand",
      "dearmebeauty",
      "redoxonid",
    ];
    cy.get("body").then(($body) => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const selectedItem = items[randomIndex];
      commonAction.clearElement(
        "#addUserProfile > :nth-child(2) > .relative > .w-full"
      );
      commonAction.selectAndType(
        "#addUserProfile > :nth-child(2) > .relative > .w-full",
        selectedItem
      );
      commonAction.itemVisibility(".gap-3 > .flex > span");
    });
    commonAction.clickElement(".gap-3 > .flex");
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
            if (toastText.includes("Account added successfully!")) {
              cy.log("Success: Account added successfully!");
              resultTracker.successCount++;
            } else if (toastText.includes("Account activated successfully!")) {
              cy.log("Success: Account activated successfully!");
              resultTracker.successCount++;
            } else if (toastText.includes("Account already added!")) {
              cy.log("Success: Account already added!");
              resultTracker.successCount++;
              cy.reload();
            } else {
              const errorMessage = "Error: Unable to add new account.";
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              const stepToReproduce =
                "Livescope->click on Add new->Try to add new account";
              resultTracker.stepToReproduces.push(stepToReproduce);
              cy.reload();
            }
          });
      } else {
        const errorMessage =
          "Error: Account added but Toaster not showing or something else! ";
        resultTracker.errorMessages.push(errorMessage);
        resultTracker.errorCount++;
        const stepToReproduce =
          "Livescope->click on Add new->Try to add new account";
        resultTracker.stepToReproduces.push(stepToReproduce);
        cy.reload();
      }
    });
  }
}
export default NewAccount;
