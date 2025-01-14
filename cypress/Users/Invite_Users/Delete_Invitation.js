import CommonActions from "../../Common/Actions";
class DeleteInvitation {
  deleteInvitation(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      ":nth-child(2) > :nth-child(5) > .flex > .text-primaryRed"
    );
    cy.wait(4000)
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
          cy.get(".gap-3 > .text-white").click();
          cy.wait(4000);
          commonAction.checkToast(
            "User invitation deleted successfully!",
            "User invitation deleted successfully!",
            "Unable to delete user invitation.",
            "Users->Invite user->Click on delete icon->Confirm deletetion",
            resultTracker
          );
        } else {
          commonAction.checkToast(
            "",
            "",
            "User invitation delete confirmation button not visible!.",
            "Users->Invite user->Click on delete icon",
            resultTracker
          );
        }
      });
  }
}
export default DeleteInvitation;
