import CommonActions from "../Common/Actions";
class AccountDelete {
  deleteAccount(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(12) > .flex > .text-primaryRed"
    );
    cy.wait(4000);
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
          cy.get(".gap-3 > .text-white").click();
          cy.wait(4000);
          commonAction.checkToast(
            "Account deleted successfully!",
            "Account deleted successfully!",
            "Unable to delete account",
            "Livescope->Click on delete icon->Confirm deletion",
            resultTracker
          );
        } else {
          commonAction.checkToast(
            "",
            "",
            "Livescope account delete confirmation button not visible.",
            "Livescope->Click on delete icon",
            resultTracker
          );
        }
      });
  }
}
export default AccountDelete;
