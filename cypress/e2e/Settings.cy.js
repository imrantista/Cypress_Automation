import CommonActions from "../Common/Actions";
import AccountElements from "../Settings/Account/Element";
import CardElements from "../Settings/Integrations/Card_Element";
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
  it.skip("Verify the presence and correctness of elements in My profile tab", () => {
    cy.visit(`${dataSet.link}/settings`);
    commonAction.itemVisibility(".grid > :nth-child(1) > :nth-child(1)");
    const accountelements = new AccountElements();
    accountelements.accountElement(globalResultTracker);
  });
  it.skip("Verify the presence and correctness of elements in Integrations tab", () => {
    cy.visit(`${dataSet.link}/settings`);
    commonAction.itemVisibility(".mb-3 > .flex > :nth-child(3)");
    commonAction.clickElement(".mb-3 > .flex > :nth-child(3)")
    const cardelements = new CardElements();
    cardelements.cardElements(globalResultTracker);
  });
  it.skip("Verify the presence and correctness of elements in Billing tab", () => {
    cy.visit(`${dataSet.link}/settings`);
    commonAction.itemVisibility(".grid > :nth-child(1) > :nth-child(1)");
    const accountelements = new AccountElements();
    accountelements.accountElement(globalResultTracker);
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Home Dashboard");
  });
});