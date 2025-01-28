import CommonActions from "../../Common/Actions";
class NewBrand {
  newBrand(resultTracker) {
    const randomString = Math.random().toString(9);
    const newBrand = `New-${randomString}-Brand`;
    const commonAction = new CommonActions();
    commonAction.selectAndType(
      ":nth-child(1) > .css-b62m3t-container > .css-m6f6ft-control",
      `${newBrand}{enter}`
    );
    cy.wait(4000);
    commonAction.checkToast(
      "Brand saved successfully!",
      "Brand saved successfully!",
      "Unable to save product brand",
      "Product->Click on Add new->Create Product modal will open-> Try to add new brand",
      resultTracker
    );
  }
}
export default NewBrand;
