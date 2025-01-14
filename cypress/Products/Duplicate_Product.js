import CommonActions from "../Common/Actions";
class DuplicateProduct {
  
  ProductDuplicate(resultTracker) {
    const commonAction = new CommonActions()
    commonAction.clickElement(":nth-child(1) > :nth-child(11) > .flex > .bg-\\[\\#1FC7A9\\]\\/\\[10\\%\\] > svg")
    cy.wait(4000);
    commonAction.checkToast(
      "Product duplicated successfully!",
      "Product duplicated successfully!",
      "Unable to duplicate product!",
      "Product->Product list page->click on duplicate icon-> Try to duplicate product",
      resultTracker
    );
  }
}
export default DuplicateProduct;
