import CommonActions from "../../Common/Actions";
class AccountNotFound {
    accountNotFound(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clearElement(
      "#addUserProfile > :nth-child(2) > .relative > .w-full"
    );
    commonAction.selectAndType(
      "#addUserProfile > :nth-child(2) > .relative > .w-full",
      "098764"
    );
    cy.wait(6000)
    commonAction.checkElementVisibility(
        "#addUserProfile",
        "Account not found. Please check and try again.",
        "Account not found. Please check and try again.",
        "Account not found. Please check and try again. validation not showing or something else",
        "Livescsope->Livescope list->Click on add new button->now try to add user taht not exist in tiktok [Type= 098764]",
        resultTracker

    )
  }
}
export default AccountNotFound;