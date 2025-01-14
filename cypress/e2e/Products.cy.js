import CommonActions from "../Common/Actions";
import ProductList from "../Products/Listpage";
import CreateModalComponent from "../Products/Create_Product/CreateModalComponent";
import ModalComponentValidation from "../Products/Create_Product/RequiiredField";
import AddNewProduct from "../Products/Create_Product/Add_New_Product";
import ProductDelete from "../Products/Delete";
import DeleteValidation from "../Products/Validation/Product_Delete_Validation";
import Name_Unique from "../Products/Uniqueness/Name_Unique";
import SKU_Unique from "../Products/Uniqueness/SKU_Unique";
import Max_Image from "../Products/Validation/Max_Image_Size";
import DuplicateProduct from "../Products/Duplicate_Product";
import EditProduct from "../Products/Edit_Product";
import ViewProduct from "../Products/View_Product";
import AddPorductRoS from "../Products/Create_Product/Add_Product_in_RoS";
import ProductSearch from "../Products/Product_Search";
describe("Automation test", () => {
  let dataSet = {};
  const commonAction = new CommonActions();
  let globalResultTracker = {
    successCount: 0,
    errorCount: 0,
    errorMessages: [],
    stepToReproduces: [],
  };
  before(() => {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then(function (data) {
        dataSet = data;
      });
  });
  commonAction.LoginSession();
  it("Product list page header check", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
    commonAction.itemVisibility(".vs-btn");
    const productlist = new ProductList();
    productlist.pageHeader(globalResultTracker);
  });
  it("Product create modal component check", () => {
    commonAction.visitProductCreateModal();
    const ceatemodal = new CreateModalComponent();
    ceatemodal.ModalComponentCheck(globalResultTracker);
  });
  it("Required filed check for product create modal", () => {
    commonAction.visitProductCreateModal();
    commonAction.clickElement(".gap-3 > .bg-primary");
    const requidfield = new ModalComponentValidation();
    requidfield.RequiredFieldValidation(globalResultTracker);
  });
  it("Add new product", () => {
    commonAction.visitProductCreateModal();
    const addproduct = new AddNewProduct();
    addproduct.CreateProduct(globalResultTracker);
  });
  it("Product Image max size validation check", () => {
    commonAction.visitProductCreateModal();
    const imagesize = new Max_Image();
    imagesize.ImageSize(globalResultTracker);
  });
  it("Product name must be unique", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
    commonAction.itemVisibility(".vs-btn");
    const uniquename = new Name_Unique();
    uniquename.UniqueName(globalResultTracker);
  });
  it("Product SKU must be unique", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
    commonAction.itemVisibility(".vs-btn");
    const uniquesku = new SKU_Unique();
    uniquesku.UniqueSKU(globalResultTracker);
  });
  it("Duplicate Product", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
    commonAction.itemVisibility(".vs-btn");
    const copyproduct = new DuplicateProduct();
    copyproduct.ProductDuplicate(globalResultTracker);
  });
  it("Edit Product", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
    commonAction.itemVisibility(".vs-btn");
    const editproduct = new EditProduct();
    editproduct.ProductEdit(globalResultTracker);
  });
  it("Product view page component", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(11) > .flex > .bg-primary\\/\\[5\\%\\] > svg"
    );
    cy.wait(4000);
    const viewproduct = new ViewProduct();
    viewproduct.ProductView(globalResultTracker);
  });
  it("Add new product from Run of Shows page", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(".vs-btn");
    commonAction.itemVisibility(".gap-2 > .vs-btn");
    commonAction.clickElement(".gap-2 > .vs-btn");
    commonAction.itemVisibility(".vs-modal-header-content");
    commonAction.clickElement(".vs-modal-header-content", "Add");
    const addrosproduct = new AddPorductRoS();
    addrosproduct.RosAddproduct(globalResultTracker);
  });
  it("Product search functinality check", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
    commonAction.itemVisibility(".vs-btn");
    const searchproduct = new ProductSearch();
    searchproduct.productSearch(globalResultTracker);
  });
  it("Product delete check", () => {
    for (let i = 0; i < 2; i++) {
      cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
      commonAction.itemVisibility(".vs-btn");
      const productdlt = new ProductDelete();
      productdlt.deleteProduct(globalResultTracker);
    }
  });
  it("Try to delete product that used in existing RoS", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
    commonAction.itemVisibility(".vs-btn");
    const deletevld = new DeleteValidation();
    deletevld.deletevalidation(globalResultTracker);
  });
  after(() => {
    cy.then(() => {
      let totalCases =
        globalResultTracker.successCount + globalResultTracker.errorCount;
      cy.log(`Total Number of Check: ${totalCases}`);
      cy.log(`Total Success: ${globalResultTracker.successCount}`);
      if (globalResultTracker.errorMessages.length > 0) {
        cy.log(`Total Errors: ${globalResultTracker.errorCount}`);
        let formattedErrorMessages = globalResultTracker.errorMessages
          .map(
            (error, index) =>
              `${
                index + 1
              }. ${error} <br> <span style="color:#22228B;">#Step to Reproduce</span>: ${
                globalResultTracker.stepToReproduces[index]
              }`
          )
          .join("<br>");
        let htmlString = `
          <h3>Module Name: Products</h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <p>Total Errors: ${globalResultTracker.errorCount}</p>
          <h3>Error Details</h3>
          <p>${formattedErrorMessages}</p>
        `;
        globalResultTracker.errorMessages.forEach((error, index) => {
          cy.log(`Error ${index + 1}: ${error}`);
          cy.log(
            `Step to Reproduce for Error ${index + 1}: ${
              globalResultTracker.stepToReproduces[index]
            }`
          );
        });
        cy.task("sendEmail", { emailHtml: htmlString });
      } else {
        cy.log("All checks passed!");
        let htmlString = `
          <h3>Module Name: Products</h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
        cy.task("sendEmail", { emailHtml: htmlString });
      }
    });
  });
});
