import CommonActions from "../Common/Actions";
import ProductImport from "../Products/Product_Imports/Import_Product";
import ImportModal from "../Products/Product_Imports/Modal_Component";
describe("Automation test for Auth", () => {
  let dataSet = {};
  before(() => {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then(function (data) {
        dataSet = data;
      });
  });
  let globalResultTracker = {
    successCount: 0,
    errorCount: 0,
    errorMessages: [],
    stepToReproduces: [],
  };
  const commonAction = new CommonActions();
  commonAction.LoginSession();
  it("Verify the presence and correctness the elements of the product import modal", () => {
    cy.visit(`${dataSet.link}/products-and-assets`);
    commonAction.itemVisibility(".vs-btn")
    commonAction.clickElement(".vs-btn")
    const importmodal = new ImportModal();
    importmodal.importModal(globalResultTracker, dataSet);
  });
  it.only("Validate the functionality of import product", () => {
    cy.visit(`${dataSet.link}/products-and-assets`);
    commonAction.itemVisibility(".vs-btn")
    commonAction.clickElement(".vs-btn")
    const importproduct = new ProductImport();
    importproduct.productImport(globalResultTracker, dataSet);
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Roles & Permissions");
  });
});