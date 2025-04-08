import CommonActions from "../Common/Actions";
import AccountElements from "../Settings/Account/Element";
import PersonalPage from "../Settings/Profile/Personal/PageElements";
import UpdatePersonalInfo from "../Settings/Profile/Personal/Update";
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
  it("Verify the presence and correctness of elements in Account tab", () => {
    cy.visit(`${dataSet.link}/settings`);
    commonAction.itemVisibility(".grid > :nth-child(1) > :nth-child(1)");
    const accountelements = new AccountElements();
    accountelements.accountElement(globalResultTracker);
  });
  it("Verify the presence and correctness of elements for personal info in My profile tab", () => {
    cy.visit(`${dataSet.link}/settings`);
    commonAction.itemVisibility(".grid > :nth-child(1) > :nth-child(1)");
    const personalpage = new PersonalPage();
    personalpage.personalPage(globalResultTracker);
  });
  it("Validate the functionality of update personal info", () => {
    cy.visit(`${dataSet.link}/settings`);
    commonAction.itemVisibility(".grid > :nth-child(1) > :nth-child(1)");
    const updatepersonalino = new UpdatePersonalInfo();
    updatepersonalino.updateInfo(globalResultTracker);
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Home Dashboard");
  });
});