import CommonActions from "../Common/Actions";
import DeactivateUser from "../Login_Auth/Deactivate_User";
import InvalidUser from "../Login_Auth/Invalid_User";
import ValidUser from "../Login_Auth/Valid_User";
describe("Automation test for Auth", () => {
  let dataSet = {};
  before(() => {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then(function (data) {
        dataSet = data;
      });
  });
  const commonAction = new CommonActions();
  let globalResultTracker = {
    successCount: 0,
    errorCount: 0,
    errorMessages: [],
    stepToReproduces: [],
  };
  it("Login with invalid credencial", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const invalidlogin = new InvalidUser();
    invalidlogin.invalidUser(globalResultTracker, dataSet);
  });
  it("Login with valid credencial", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const validuser = new ValidUser();
    validuser.validUser(globalResultTracker, dataSet);
  });
  it("Login with deactivate account user credencial", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const deactivateuser = new DeactivateUser();
    deactivateuser.deactivateUser(globalResultTracker, dataSet);
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Auth. Login");
  });
});
