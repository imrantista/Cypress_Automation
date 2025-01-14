import CommonActions from "../../Common/Actions";
class AccountActivated {
  accountActivated(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clearElement(
      "#addUserProfile > :nth-child(2) > .relative > .w-full"
    );
    commonAction.selectAndType(
      "#addUserProfile > :nth-child(2) > .relative > .w-full",
      "uht.tee"
    );
    commonAction.itemVisibility(".gap-3 > .flex > span");
    commonAction.clickElement(".gap-3 > .flex");
    cy.wait(4000);
    commonAction.checkToast(
        "Account activated successfully!",
        "Account activated successfully!",
        "Check Account added validation",
        "Livescope->Try to add account that previously exist",
        resultTracker
    );
  }
}
export default AccountActivated;
