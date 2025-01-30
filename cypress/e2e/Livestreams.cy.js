import CommonActions from "../Common/Actions";
import ModalComponents from "../Live_Campaigns/Campaigns/Create_Modal";
import CampaingListPage from "../Live_Campaigns/Campaigns/List_Page";
import RequiredFields from "../Live_Campaigns/Campaigns/Required_Fields";
import CopyLivestream from "../Live_Campaigns/Livestreams/Copy_Livestream";
import ModalComponent from "../Live_Campaigns/Livestreams/Create/Create_Modal_Component";
import CreatNew from "../Live_Campaigns/Livestreams/Create/New_Livestream";
import DeleteLivestream from "../Live_Campaigns/Livestreams/Delete_Livestream";
import EditLivestraem from "../Live_Campaigns/Livestreams/Edit_Livestream";
import ListPage from "../Live_Campaigns/Livestreams/List_Page";
import NameUnique from "../Live_Campaigns/Livestreams/Validation/Name_Validation";
import FieldValidation from "../Live_Campaigns/Livestreams/Validation/Required_Fields";
import ViewLivestream from "../Live_Campaigns/Livestreams/View_Livestream";
describe("Automation test for Livestream page", () => {
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
  it("Verify the presence and correctness of the header elements in Livestreams list page", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const listpage = new ListPage();
    listpage.listPage(globalResultTracker);
  });
  it("Verify the presence and correctness of elements in Livestreams Create modal", () => {
    commonAction.visitLivestreamCreateModal();
    const modalcomponent = new ModalComponent();
    modalcomponent.modalComponent(globalResultTracker);
  });
  it("Verify the required field validations in the Livestreams Create modal", () => {
    commonAction.visitLivestreamCreateModal();
    const requiredfields = new FieldValidation();
    requiredfields.fieldValidation(globalResultTracker);
  });
  it("Validate the functionality of creating a new Livestream", () => {
    commonAction.visitLivestreamCreateModal();
    const addnew = new CreatNew();
    addnew.createNew(globalResultTracker);
  });
  it("Validate the functionality of Livestream duplication", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const copylivestream = new CopyLivestream();
    copylivestream.copyLivestream(globalResultTracker);
  });
  it("Validate the Livestream Name it's must be unique", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const nameunique = new NameUnique();
    nameunique.nameUnique(globalResultTracker);
  });
  it("Validate the functionality of edit Livestream", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const editlivestream = new EditLivestraem();
    editlivestream.editLivestream(globalResultTracker);
  });
  it("Validate the functionality of delete Livestream", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const deletelivestream = new DeleteLivestream();
    deletelivestream.deleteLivestream(globalResultTracker);
  });
  it("Verify the presence and correctness of elements of the Livestream view page", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const viewlivestream = new ViewLivestream();
    viewlivestream.viewLivestream(globalResultTracker);
  });
  it("Verify the presence and correctness of hesder elements of the Campaign list page", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Campaigns`);
    commonAction.itemVisibility(".vs-btn");
    const campaignpage  = new CampaingListPage();
    campaignpage.listPage(globalResultTracker);
  });
  it("Verify the presence and correctness of the elements of Campaign create modal", () => {
    commonAction.visitCampaignCreateModal()
    const modalelements = new ModalComponents();
    modalelements.modalComponent(globalResultTracker);
  });
  it("Verify the required field validations in the Campaign Create modal", () => {
    commonAction.visitCampaignCreateModal()
    const requiredelement = new RequiredFields();
    requiredelement.requiredFields(globalResultTracker);
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Live Campaigns");
  });
});