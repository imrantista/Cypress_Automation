import CommonActions from "../Common/Actions";
import CreatePage from "../Run_of_Shows/Create_RoS/Create_Page_Component";
import CreateRoS from "../Run_of_Shows/Create_RoS/Create_Ros";
import EmptyValidation from "../Run_of_Shows/Validation/Empty_Validation";
import ListEnd from "../Run_of_Shows/Create_RoS/List_End";
import DuplicateRoS from "../Run_of_Shows/Dupicate_RoS";
import ListPage from "../Run_of_Shows/List_Page";
import DeleteRoS from "../Run_of_Shows/Delete_RoS";
import DeleteValidation from "../Run_of_Shows/Validation/Delete_Validation";
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
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const roslist = new ListPage();
    roslist.Listpage(globalResultTracker);
  });
  it("RoS create page component check", () => {
    commonAction.visiRoSCraetepage()
    const pagecomponent = new CreatePage();
    pagecomponent.pageComponent(globalResultTracker);
  });
  it("Empty content validation check while create ne RoS", () => {
    commonAction.visiRoSCraetepage()
    const rosvalidation = new EmptyValidation();
    rosvalidation.Validation(globalResultTracker);
  });
  it("RoS create page scroll to botton and component check", () => {
    commonAction.visiRoSCraetepage()
    const endlist = new ListEnd();
    endlist.listEnd(globalResultTracker);
  });
  it("Create new RoS", () => {
    commonAction.visiRoSCraetepage()
    const createros = new CreateRoS();
    createros.createRoS(globalResultTracker);
  });
  it("Duplicate RoS", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const rosduplicate = new DuplicateRoS();
    rosduplicate.duplicateRoS(globalResultTracker);
  });
  it("Delete RoS", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const deleteros = new DeleteRoS();
    deleteros.deleteRoS(globalResultTracker);
  });
  it.only("Delete RoS that attachted with livestream", () => {
    cy.visit(`${dataSet.link}/run-of-shows`);
    commonAction.itemVisibility(".vs-btn");
    const deletevalidation = new DeleteValidation();
    deletevalidation.deleteValidation(globalResultTracker);
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
          <h3>Module Name: Run os Shows </h3>
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
          <h3>Module Name: Run os Shows</h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
        //cy.task("sendEmail", { emailHtml: htmlString });
      }
    });
  });
});
