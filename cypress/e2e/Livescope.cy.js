import LivescopeListPage from "../Livescope/List_Page";
import CommonActions from "../Common/Actions";
import NewAccount from "../Livescope/Add_New_Account/New_Account";
import AccountReadd from "../Livescope/Add_New_Account/Account_Readd";
import AccountActivated from "../Livescope/Add_New_Account/Account_Activated";
import AccountDelete from "../Livescope/Account_Delete";
import RequiredCountry from "../Livescope/Required_Validation/Country_Required";
import RequiredLanguage from "../Livescope/Required_Validation/Language_Required";
import AccountNotFound from "../Livescope/Required_Validation/Account_Not_Found";
import AccountTracking from "../Livescope/Add_New_Account/Account_Tracking";
import PageComponetLivescopeDetailsPage from "../Livescope/Livescope_Details_Page";
import PostDashComponent from "../Livescope/Post_Dashboard";
import LivescopeTranscription from "../Livescope/Transcription";
describe("Automation test for Livescope page", () => {
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
  it("Verify the presence and correctness of the header elements on the livescope list page", () => {
    cy.visit(`${dataSet.link}/livescope`);
    commonAction.itemVisibility(".vs-btn");
    const listpage = new LivescopeListPage();
    listpage.listPage(globalResultTracker)
  });
  it("Validate the functionality of Livescope add new account", () => {
    commonAction.visiLivescopeAddAccount();
    const addaccount = new NewAccount();
    addaccount.newAccount(globalResultTracker)
  });
  it("Validate the functionality of add existing account", () => {
    commonAction.visiLivescopeAddAccount();
    const readdaccount = new AccountReadd();
    readdaccount.accountReadd(globalResultTracker)
  });
  it("Validate the functionality of activated existing account", () => {
    commonAction.visiLivescopeAddAccount();
    const activateaccount = new AccountActivated();
    activateaccount.accountActivated(globalResultTracker)
  });
  it("Validate the functionality of delete account", () => {
    cy.visit(`${dataSet.link}/livescope`);
    commonAction.itemVisibility(".vs-btn");
    const deleteaccount = new AccountDelete();
    deleteaccount.deleteAccount(globalResultTracker)
  });
  it("Validate the functionality of add account without country", () => {
    commonAction.visiLivescopeAddAccount();
    const requiredcountry = new RequiredCountry();
    requiredcountry.requiredCountry(globalResultTracker)
  });
  it("Validate the functionality of add account without language", () => {
    commonAction.visiLivescopeAddAccount();
    const requiredlanguage = new RequiredLanguage();
    requiredlanguage.requiredLanguage(globalResultTracker)
  });
  it("Validate the functionality of add account when user is invalid", () => {
    commonAction.visiLivescopeAddAccount();
    const accountnotfound = new AccountNotFound();
    accountnotfound.accountNotFound(globalResultTracker)
  });
  it("Validate the functionality of enabling and disabling Account tracking", () => {
    cy.visit(`${dataSet.link}/livescope`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clearElement(".mb-6 > :nth-child(1) > .relative > .py-2")
    commonAction.selectAndType(".mb-6 > :nth-child(1) > .relative > .py-2", dataSet.viewpageuser);
    const accounttracking = new AccountTracking();
    accounttracking.accountTracking(globalResultTracker)
  });
  it("Verify the presence and correctness of the Livescope details page component", () => {
    cy.visit(`${dataSet.link}/livescope`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clearElement(".mb-6 > :nth-child(1) > .relative > .py-2")
    commonAction.selectAndType(".mb-6 > :nth-child(1) > .relative > .py-2", dataSet.dashboarduser);
    const pagecomponent = new PageComponetLivescopeDetailsPage();
    pagecomponent.pageComponent(globalResultTracker)
  });
  it("Verify the presence and correctness of the Livescope post dashboard component", () => {
    cy.visit(`${dataSet.link}/livescope`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clearElement(".mb-6 > :nth-child(1) > .relative > .py-2")
    commonAction.selectAndType(".mb-6 > :nth-child(1) > .relative > .py-2", dataSet.dashboarduser);
    const postdashcomponenet = new PostDashComponent();
    postdashcomponenet.dashComponent(globalResultTracker)
  });
  it("Validate the functionality of Livescope post dashboard Transcription", () => {
    cy.visit(`${dataSet.link}/livescope`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clearElement(".mb-6 > :nth-child(1) > .relative > .py-2")
    commonAction.selectAndType(".mb-6 > :nth-child(1) > .relative > .py-2", dataSet.dashboarduser);
    const postdashtranscription = new LivescopeTranscription();
    postdashtranscription.livescopeTranscription(globalResultTracker)
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Livescope");
  });
});