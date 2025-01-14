import CommonActions from "../../../Common/Actions";
class ResendInvitation {
  resendInvitation(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      "tbody > :nth-child(1) > :nth-child(5) > .flex > .text-primary"
    );
    cy.wait(4000);
    commonAction.checkToast(
      "Invitation resent successfully!",
      "Invitation resent successfully!",
      "Unable to resend user invitation or something else",
      "Users->Invite user->Click on resend icon",
      resultTracker
    );
  }
}
export default ResendInvitation;
