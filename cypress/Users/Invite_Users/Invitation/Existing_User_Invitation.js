import CommonActions from "../../../Common/Actions";
class ExistUserInvitation {
  exitsUserInvitation(resultTracker) {
    const commonAction = new CommonActions();
    const randomIndex = Math.floor(Math.random() * 4) + 1;
    commonAction.clickElement(".css-tlfecz-indicatorContainer");
    cy.wait(2000);
    const roleSelector = `#react-select-2-option-${randomIndex}`;
    commonAction.clickElement(roleSelector);
    cy.wait(2000);
    commonAction.clickElement(".bg-primary > span");
    cy.wait(4000);
    commonAction.checkToast(
      "A user already exists with this email.",
      "A user already exists with this email.",
      "Check existing user invitation validation or something else",
      "Users->Invite user->Click on Invite button->Try to invite user that's already exist",
      resultTracker
    );
  }
}
export default ExistUserInvitation;
