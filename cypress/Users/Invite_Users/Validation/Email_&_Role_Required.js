import CommonActions from "../../../Common/Actions";
class EmailRoleRequired {
  emailroleRequired(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(".bg-primary > span");
    cy.wait(2000);
    const elements = [
      {
        selector: ":nth-child(1) > .text-xs > span",
        text: "User email is required.",
        description: "User email is required."
      },
      {
        selector: ":nth-child(2) > .text-xs > span",
        text: "User role is required.",
        description: "User role is required."
      }
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} validation not showing or something else`,
        "Users->Invite user->Click on Invite button->Try to invite with empty email and role",
        resultTracker
      );
    });
  }
}
export default EmailRoleRequired;
