import CommonActions from "../Common/Actions";
import AssetListPage from "../Assets/Asset_List_page";
import CreateModalComponent from "../Assets/Create_Asset/Create_Modal_Component";
import AddNewAsset from "../Assets/Create_Asset/Add_New_Asset";
import RequiredField from "../Assets/Create_Asset/Required_Field";
import AssetNameValidation from "../Assets/Validation/Asset_Name";
import MaxImageSize from "../Assets/Validation/Max_Image_Size";
import AssetDelete from "../Assets/Asset_Delete";
import AssetDeleteValidation from "../Assets/Validation/Asset_Delete_validation";
import DuplicateAsset from "../Assets/Duplicate_Asset";
import EditAsset from "../Assets/Edit_Asset";
import AssetSearch from "../Assets/Asset_Search";
import AssetCatergoy from "../Assets/Asset_Category";
import AssetTag from "../Assets/Asset_Tag";
import AssetView from "../Assets/Asset_View";
describe("Automation test for Assets page", () => {
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
  it("Verify the presence and correctness of the header elements in the Asset List page.", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
    commonAction.itemVisibility(".vs-btn");
    const assetlist = new AssetListPage();
    assetlist.listPageHeader(globalResultTracker);
  });
  it("Verify the presence and correctness of elements in the Asset Create modal.", () => {
    commonAction.visitAssetCreateModal();
    const modalcomponent = new CreateModalComponent();
    modalcomponent.createModalComponent(globalResultTracker);
  });
  it("Verify the required field validations in the Asset Create modal.", () => {
    commonAction.visitAssetCreateModal();
    const requiredfield = new RequiredField();
    requiredfield.requiredField(globalResultTracker);
  });
  it("Validate the functionality of creating a new Asset category.", () => {
    commonAction.visitAssetCreateModal();
    const assetcategory = new AssetCatergoy();
    assetcategory.assetCategory(globalResultTracker);
  });
  it("Validate the functionality of creating a new Asset tag.", () => {
    commonAction.visitAssetCreateModal();
    const assettag = new AssetTag();
    assettag.assetTag(globalResultTracker);
  });
  it("Validate the functionality of creating a new Asset.", () => {
    commonAction.visitAssetCreateModal();
    const addasset = new AddNewAsset();
    addasset.addAsset(globalResultTracker);
  });
  it("Validate the Asset Name it's must be unique", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
    commonAction.itemVisibility(".vs-btn");
    const namevalidation = new AssetNameValidation();
    namevalidation.assetNameValidation(globalResultTracker);
  });
  it("Validate the maximum size for the Asset image to ensure it meets the upload requirements.", () => {
    commonAction.visitAssetCreateModal();
    const maximagesize = new MaxImageSize();
    maximagesize.maxImageSize(globalResultTracker);
  });
  it("Validate the functionality of asset duplication", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
    commonAction.itemVisibility(".vs-btn");
    const duplicateasset = new DuplicateAsset()
    duplicateasset.AssettDuplicate(globalResultTracker);
  });
  it("Validate the functionality of asset edit", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
    commonAction.itemVisibility(".vs-btn");
    const editasset = new EditAsset()
    editasset.editAsset(globalResultTracker);
  });
  it("Verify the presence and correctness of elements on the Asset View page", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(":nth-child(1) > :nth-child(7) > .flex > .bg-primary\\/\\[5\\%\\] > svg");
    const assetview = new AssetView()
    assetview.assetView(globalResultTracker);
  });
  it("Validate the functionality of asset search", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
    commonAction.itemVisibility(".vs-btn");
    const searchasset = new AssetSearch()
    searchasset.assetSearch(globalResultTracker);
  });
  it("Validate the functionality of asset delete", () => {
    for (let i = 0; i < 2; i++) {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
    commonAction.itemVisibility(".vs-btn");
    const deleteasset = new AssetDelete()
    deleteasset.deleteAsset(globalResultTracker);
    }
  });
  it("Validate the functionality of Asset delete validation when it's attached with RoS", () => {
    cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
    commonAction.itemVisibility(".vs-btn");
    const deleteassetvalidation = new AssetDeleteValidation()
    deleteassetvalidation.assetDeleteValidation(globalResultTracker);
  });
  after(() => {
    cy.then(() => {
      let totalCases =
        globalResultTracker.successCount + globalResultTracker.errorCount;
      cy.log(`Total Number of Cases: ${totalCases}`);
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
          <h3>Module Name: Assets</h3>
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
        //cy.task("sendEmail", { emailHtml: htmlString });
      } else {
        cy.log("All checks passed!");
        let htmlString = `
          <h3>Module Name: Assets</h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
        //cy.task("sendEmail", { emailHtml: htmlString });
      }
    });
  });
});