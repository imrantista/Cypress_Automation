import CommonActions from "../Common/Actions";
import AddLivescopeAccount from "../Home_Dashboard/Livescope_Section/Add_Livescope_Account";
import AddLivestream from "../Home_Dashboard/Campaign_Section/Add_Livestream";
import AddProduct from "../Home_Dashboard/Product_Section/Add_Product";
import CamapignElements from "../Home_Dashboard/Campaign_Section/Campaign_Components";
import LivescopeComponent from "../Home_Dashboard/Livescope_Section/Livescope_Component";
import ProductComponent from "../Home_Dashboard/Product_Section/Product_Components";
import SideMenuEelemnt from "../Home_Dashboard/Side_Menu";
import LivescopeView from "../Home_Dashboard/Livescope_Section/View_Livescope";
import ProductView from "../Home_Dashboard/Product_Section/View_Product";
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
    commonAction.logResults(globalResultTracker, "Home Dashboard");
  });
});