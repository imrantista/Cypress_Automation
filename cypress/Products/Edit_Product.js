import CommonActions from "../Common/Actions";
import "cypress-file-upload";
class EditProduct {
  ProductEdit(resultTracker) {
    const commonAction = new CommonActions();
    const randomsku = Math.floor(Math.random() * 200) + 1;
    const newsku = `Ed-${randomsku}-qa-${randomsku + 1}`;
    commonAction.itemVisibility(".gap-3 > .text-white");
    commonAction.clearElement("#skuCode");
    commonAction.selectAndType("#skuCode", newsku);
    commonAction.clickElement(".vs-modal-header");
    commonAction.clearElement(
      ":nth-child(1) > .quill > .ql-container > .ql-editor"
    );
    commonAction.selectAndType(
      ":nth-child(1) > .quill > .ql-container > .ql-editor",
      "At Stickler, we believe that Live Commerce will be the ascendant e-commerce trend"
    );
    cy.wait(1000);
    commonAction.clearElement('[name="minutes"]');
    commonAction.selectAndType('[name="minutes"]', 15)
    commonAction.clickElement(".gap-3 > .text-white")
    cy.wait(4000);
    commonAction.checkToast(
      "Product updated successfully!",
      "Product updated successfully!",
      "Unable to update product!.",
      "Product->Product list page->click on edit icon-> Try to edit product",
      resultTracker
    );
  }
}
export default EditProduct;
