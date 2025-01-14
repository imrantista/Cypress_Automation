import CommonActions from "../../../Common/Actions";
class OwnInvitation {
  ownInvitation(resultTracker) {
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
      "You can't invite yourself!",
      "You can't invite yourself!",
      "Check own invitation validation or something else",
      "Users->Invite user->Click on Invite button->Try to invite own email that you'r currently logged",
      resultTracker
    );
  }
}
export default OwnInvitation;
