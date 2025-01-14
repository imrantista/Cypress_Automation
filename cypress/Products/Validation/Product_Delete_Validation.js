import CommonActions from "../../Common/Actions";
class DeleteValidation {
  deletevalidation(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clearElement('.py-2');
    commonAction.selectAndType('.py-2', "Delete this product")
    cy.wait(4000)
    commonAction.clickElement(":nth-child(1) > :nth-child(11) > .flex > .text-primaryRed>svg")
    cy.wait(4000);
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
          cy.get(".gap-3 > .text-white").click();
          cy.wait(4000);
          commonAction.checkToast(
            "This product is used in an existing Run of Show and cannot be deleted.",
            "This product is used in an existing Run of Show and cannot be deleted.",
            "Product deleted successfully!",
            "Product->Chose a product that is used in exising RoS->Click on delete icon->Confirm deletion",
            resultTracker
          );
        } else {
          commonAction.checkToast(
            "",
            "",
            "Product delete confirmation button not visible.",
            "Product->Click on delete icon",
            resultTracker
          );
        }
        commonAction.clearElement(".py-2")
      });
  }
}
export default DeleteValidation;
