import CommonActions from "../../Common/Actions";
class DeleteValidation {
  deleteValidation(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(2000);
    commonAction.clearElement(".py-2");
    commonAction.selectAndType(".py-2", "New Livestream 110");
    cy.wait(2000);
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .text-primaryRed>svg"
    );
    cy.wait(2000)
    commonAction.clickElement(".gap-3 > .text-white")
    cy.wait(4000)
    commonAction.checkToast(
        "This Run of Show is linked to a scheduled or existing livestream and cannot be deleted.",
        "This Run of Show is linked to a scheduled or existing livestream and cannot be deleted.",
        "Run of Show deleted successfully!",
        "RoS->RoS list page -> Selecy RoS that attachted with livestream -> try to delete",
        resultTracker
    )
  }
}
export default DeleteValidation;
