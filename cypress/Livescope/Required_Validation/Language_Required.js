import CommonActions from "../../Common/Actions";
class RequiredLanguage {
  requiredLanguage(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clearElement(
      "#addUserProfile > :nth-child(2) > .relative > .w-full"
    );
    commonAction.selectAndType(
      "#addUserProfile > :nth-child(2) > .relative > .w-full",
      "nim"
    );
    commonAction.itemVisibility(".gap-3 > .flex > span");
    commonAction.clickElement(".gap-3 > .flex");
    cy.wait(4000);
    commonAction.checkElementVisibility(
        ":nth-child(3) > .w-full > .text-red-500 > span",
        "Account language is required.",
        "Account language is required.",
        "Account language is required. validation not showing or something else",
        "Livescsope->Livescope list->Click on add new button->now try to add user where acount language is empty [Type= nim]",
        resultTracker

    )
  }
}
export default RequiredLanguage;