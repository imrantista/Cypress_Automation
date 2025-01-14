import CommonActions from "../../Common/Actions";
class AccountReadd {
  accountReadd(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clearElement(
      "#addUserProfile > :nth-child(2) > .relative > .w-full"
    );
    commonAction.selectAndType(
      "#addUserProfile > :nth-child(2) > .relative > .w-full",
      "garnierthailand"
    );
    commonAction.itemVisibility(".gap-3 > .flex > span");
    commonAction.clickElement(".gap-3 > .flex");
    cy.wait(4000);
    commonAction.checkToast(
        "Account already added!",
        "Account already added!",
        "Check Account added validation",
        "Livescope->Try to add account that already exist",
        resultTracker
    )
  }
}
export default AccountReadd;
