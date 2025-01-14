import CommonActions from "../../../Common/Actions";
class PendingUserInvitation {
  pendingUserInvitation(resultTracker) {
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
      "User already invited!",
      "User already invited!",
      "Check pending invitation validation  or something else",
      "Users->Invite user->Click on Invite button->Try to invite user that's already invited",
      resultTracker
    );
  }
}
export default PendingUserInvitation;
