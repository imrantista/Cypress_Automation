import CommonActions from "../../Common/Actions";
class Name_Unique {
  UniqueName(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(":nth-child(1) > :nth-child(11) > .flex > .text-primaryYellow")
    commonAction.clearElement("#name");
    commonAction.selectAndType("#name", "Stickler Product")
    commonAction.clickElement(".gap-3 > .bg-primary");
    cy.wait(4000);
    commonAction.checkToast(
      "Product name must be unique.",
      "Product name must be unique.",
      "Check product name validation, Name must be unique.",
      "Product->Click on Add new->Create Product modal will open-> Try to create product with existing product Name",
      resultTracker
    );
  }
}
export default Name_Unique;
