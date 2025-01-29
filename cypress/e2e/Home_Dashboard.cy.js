import CommonActions from "../Common/Actions";
import AddLivescopeAccount from "../Home_Dashboard/Add_Livescope_Account";
import AddLivestream from "../Home_Dashboard/Add_Livestream";
import AddProduct from "../Home_Dashboard/Add_Product";
import CamapignElements from "../Home_Dashboard/Campaign_Components";
import LivescopeComponent from "../Home_Dashboard/Livescope_Component";
import ProductComponent from "../Home_Dashboard/Product_Components";
import SideMenuEelemnt from "../Home_Dashboard/Side_Menu";
import LivescopeView from "../Home_Dashboard/View_Livescope";
import ProductView from "../Home_Dashboard/View_Product";
describe("Automation test for Home Dashboard", () => {
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
  it("Verify the presence and correctness of elements in the Side menu bar", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const sidemenu = new SideMenuEelemnt();
    sidemenu.seidMenu(globalResultTracker);
  });
  it("Verify the presence and correctness of elements on camapign section in Home dashboard", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const dashboardelement = new CamapignElements();
    dashboardelement.dashboardElements(globalResultTracker);
  });
  it("Verify the presence and correctness of elements on product section in Home dashboard", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const productelements = new ProductComponent();
    productelements.productComponent(globalResultTracker);
  });
  it("Verify the presence and correctness of elements on livescope section in Home dashboard", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const livescopeelements = new LivescopeComponent();
    livescopeelements.livescopeComponent(globalResultTracker);
  });
  it("Verify the functionality of create new product from home dashboard", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const createnewproduct = new AddProduct();
    createnewproduct.addProduct(globalResultTracker);
  });
  it("Verify the functionality of create new livestream from home dashboard", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const addlivestream = new AddLivestream();
    addlivestream.addLivestream(globalResultTracker);
  });
  it("Verify the functionality of add Livescope account from home dashboard", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const addaccount = new AddLivescopeAccount();
    addaccount.addLivescopeaccount(globalResultTracker);
  });
  it("Verify the functionality of view Livescope from home dashboard", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const viewlivescope = new LivescopeView();
    viewlivescope.livescopeView(globalResultTracker);
  });
  it("Verify the functionality of view Product from home dashboard", () => {
    cy.visit(`${dataSet.link}/dashboard`);
    commonAction.itemVisibility(".vs-btn");
    const viewproduct = new ProductView();
    viewproduct.productView(globalResultTracker);
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
          <h3>Module Name: Home Dashboard </h3>
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
          <h3>Module Name: Home Dashboard</h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
        cy.task("sendEmail", { emailHtml: htmlString });
      }
    });
  });
});
