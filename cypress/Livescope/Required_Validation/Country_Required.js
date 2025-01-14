import CommonActions from "../../Common/Actions";
class RequiredCountry {
  requiredCountry(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clearElement(
      "#addUserProfile > :nth-child(2) > .relative > .w-full"
    );
    commonAction.selectAndType(
      "#addUserProfile > :nth-child(2) > .relative > .w-full",
      "nim"
    );
    cy.wait(6000);
    commonAction.clickElement(".gap-3 > .flex");
    cy.wait(4000);
    commonAction.checkElementVisibility(
      ":nth-child(2) > .w-full > .text-red-500 > span",
      "Account country is required.",
      "Account country is required.",
      "Account country is required. validation not showing or something else",
      "Livescsope->Livescope list->Click on add new button->now try to add user where acount country is empty [Type= nim]",
      resultTracker
    );
  }
}
export default RequiredCountry;
