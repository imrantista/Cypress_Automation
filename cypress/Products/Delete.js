import CommonActions from "../Common/Actions";
class ProductDelete {
  deleteProduct(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(":nth-child(1) > :nth-child(11) > .flex > .text-primaryRed>svg")
    cy.wait(4000);
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
          cy.get(".gap-3 > .text-white").click();
          cy.wait(4000);
          /* cy.get("body").then(($body) => {
            if (
              $body.find(".Toastify__toast.Toastify__toast--success").length > 0
            ) {*/
          commonAction.checkToast(
            "Product deleted successfully!",
            "Product deleted successfully!",
            "Unable to delete product or This product is used in an existing Run of Show and cannot be deleted.",
            "Product->Click on delete icon->Confirm deletion",
            resultTracker
          );
          /* } else if (
              $body.find(".Toastify__toast.Toastify__toast--error").length > 0
            ) {
              toasterChecker.Checktoast(
                "This product is used in an existing Run of Show and cannot be deleted.",
                "This product is used in an existing Run of Show and cannot be deleted.",
                "",
                "Product->Click on delete icon->Confirm deletion",
                resultTracker
              );
            } else {
              toasterChecker.Checktoast(
                "",
                "",
                "",
                "Product->Click on delete icon->Confirm deletion",
                resultTracker
              );
            }
          });*/
        } else {
          commonAction.checkToast(
            "",
            "",
            "Product delete confirmation button not visible.",
            "Product->Click on delete icon",
            resultTracker
          );
        }
      });
  }
}
export default ProductDelete;
