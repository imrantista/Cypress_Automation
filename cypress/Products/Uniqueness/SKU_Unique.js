import CommonActions from "../../Common/Actions";
class SKU_Unique {
  UniqueSKU(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(11) > .flex > .text-primaryYellow"
    );
    commonAction.clearElement("#skuCode");
    commonAction.selectAndType("#skuCode", "Stickler Product-123");
    commonAction.clickElement(".gap-3 > .bg-primary");
    cy.wait(4000);
    commonAction.checkToast(
      "SKU code already exists.",
      "SKU code already exists.",
      "Check product SKU validation, SKU must be unique.",
      "Product->Click on Add new->Create Product modal will open-> Try to create product with existing product SKU",
      resultTracker
    );
  }
}
export default SKU_Unique;
