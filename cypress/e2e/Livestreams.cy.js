import CommonActions from "../Common/Actions";
import CopyLivestream from "../Live_Campaigns/Livestreams/Copy_Livestream";
import ModalComponent from "../Live_Campaigns/Livestreams/Create/Create_Modal_Component";
import CreatNew from "../Live_Campaigns/Livestreams/Create/New_Livestream";
import DeleteLivestream from "../Live_Campaigns/Livestreams/Delete_Livestream";
import EditLivestraem from "../Live_Campaigns/Livestreams/Edit_Livestream";
import ListPage from "../Live_Campaigns/Livestreams/List_Page";
import NameUnique from "../Live_Campaigns/Livestreams/Validation/Name_Validation";
import FieldValidation from "../Live_Campaigns/Livestreams/Validation/Required_Fields";
import ViewLivestream from "../Live_Campaigns/Livestreams/View_Livestream";
describe("Automation test", () => {
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
  it("Header element check for RoS list page", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const listpage = new ListPage();
    listpage.listPage(globalResultTracker);
  });
  it("Livestream Create modal component", () => {
    commonAction.visitLivestreamCreateModal();
    const modalcomponent = new ModalComponent();
    modalcomponent.modalComponent(globalResultTracker);
  });
  it("Livestream Create modal required field validation", () => {
    commonAction.visitLivestreamCreateModal();
    const requiredfields = new FieldValidation();
    requiredfields.fieldValidation(globalResultTracker);
  });
  it("Create new livestreams", () => {
    commonAction.visitLivestreamCreateModal();
    const addnew = new CreatNew();
    addnew.createNew(globalResultTracker);
  });
  it("Livestream copy", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const copylivestream = new CopyLivestream();
    copylivestream.copyLivestream(globalResultTracker);
  });
  it("Livestream name validation", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const nameunique = new NameUnique();
    nameunique.nameUnique(globalResultTracker);
  });
  it("Edit Livestream", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const editlivestream = new EditLivestraem();
    editlivestream.editLivestream(globalResultTracker);
  });
  it("Delete Livestream", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const deletelivestream = new DeleteLivestream();
    deletelivestream.deleteLivestream(globalResultTracker);
  });
  it("View Livestream", () => {
    cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
    commonAction.itemVisibility(".vs-btn");
    const viewlivestream = new ViewLivestream();
    viewlivestream.viewLivestream(globalResultTracker);
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
          <h3>Module Name: Livestreams </h3>
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
          <h3>Module Name: Livestreams</h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
        //cy.task("sendEmail", { emailHtml: htmlString });
      }
    });
  });
});
