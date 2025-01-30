import CommonActions from "../Common/Actions";
import CreatePage from "../Run_of_Shows/Create_RoS/Create_Page_Component";
import CreateRoS from "../Run_of_Shows/Create_RoS/Create_Ros";
import EmptyValidation from "../Run_of_Shows/Validation/Empty_Validation";
import ListEnd from "../Run_of_Shows/Create_RoS/List_End";
import DuplicateRoS from "../Run_of_Shows/Dupicate_RoS";
import ListPage from "../Run_of_Shows/List_Page";
import DeleteRoS from "../Run_of_Shows/Delete_RoS";
import DeleteValidation from "../Run_of_Shows/Validation/Delete_Validation";
import SearchRoS from "../Run_of_Shows/Search_RoS";
import ViewPage from "../Run_of_Shows/View_Page";
import RoSProductEdit from "../Run_of_Shows/Edit_RoS_Product";
import EditRoS from "../Run_of_Shows/Edit_RoS";
import ModeratioPage from "../Run_of_Shows/Moderation_Page";
import ProductAdd from "../Run_of_Shows/New_Product";
import AssetAdd from "../Run_of_Shows/New_Asset";
describe("Automation test for Ron of Shows page", () => {
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
  it.only("Verify the presence and correctness of the header elements in the RoS page", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const roslist = new ListPage();
    roslist.Listpage(globalResultTracker);
  });
  it("Verify the presence and correctness of elements in the RoS create page", () => {
    commonAction.visitRoSCraetepage();
    const pagecomponent = new CreatePage();
    pagecomponent.pageComponent(globalResultTracker);
  });
  it("Validate the functionality of Empty content while create a new RoS", () => {
    commonAction.visitRoSCraetepage();
    const rosvalidation = new EmptyValidation();
    rosvalidation.Validation(globalResultTracker);
  });
  it("Verify the functionality of RoS create page scroll to botton and component check", () => {
    commonAction.visitRoSCraetepage();
    const endlist = new ListEnd();
    endlist.listEnd(globalResultTracker);
  });
  it("Validate the functionality of creating a new RoS", () => {
    commonAction.visitRoSCraetepage();
    const createros = new CreateRoS();
    createros.createRoS(globalResultTracker);
  });
  it("Validate the functionality of RoS duplication", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const rosduplicate = new DuplicateRoS();
    rosduplicate.duplicateRoS(globalResultTracker);
  });
  it("Validate the functionality of delete RoS", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const deleteros = new DeleteRoS();
    deleteros.deleteRoS(globalResultTracker);
  });
  it("Validate the functionality of RoS delete validation when it's attachted with livestream", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const deletevalidation = new DeleteValidation();
    deletevalidation.deleteValidation(globalResultTracker);
  });
  it("Validate the functionality of Search RoS", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const searchros = new SearchRoS();
    searchros.searchRoS(globalResultTracker);
  });
  it("Verify the presence and correctness of the RoS view page component", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const viewros = new ViewPage();
    viewros.viewPage(globalResultTracker);
  });
  it("Validate the functionality of RoS product edit", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .text-primaryYellow"
    );
    commonAction.itemVisibility(".my-auto");
    const editrosproduct = new RoSProductEdit();
    editrosproduct.RoSproductedit(globalResultTracker);
  });
  it("Validate the functionality of edit RoS", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .text-primaryYellow"
    );
    commonAction.itemVisibility(".my-auto");
    const editros = new EditRoS();
    editros.editRoS(globalResultTracker);
  });
  it("Validate the functionality of add new Product from RoS page", () => {
    commonAction.visitRoSCraetepage();
    const productadd = new ProductAdd();
    productadd.productAdd(globalResultTracker);
  });
  it("Validate the functionality of add new Asset from RoS page", () => {
    commonAction.visitRoSCraetepage();
    const assetadd = new AssetAdd();
    assetadd.assetAdd(globalResultTracker);
  });
  it("Verify the presence and correctness of the Moderation page componets", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .bg-\\[\\#FF00FF\\]\\/\\[10\\%\\] > svg"
    );
    commonAction.itemVisibility(".my-auto");
    const moderationpage = new ModeratioPage();
    moderationpage.moderationPage(globalResultTracker);
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Run of Shows");
  });
});