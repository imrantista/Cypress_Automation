import CommonActions from "../Common/Actions";
class SearchRoS {
  searchRoS(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(2000);
    commonAction.clearElement(".py-2");
    commonAction.selectAndType(".py-2", "Stickler RoS-2");
    cy.wait(2000);
    commonAction.clearElement(".py-2");
    resultTracker.successCount++;
  }
}
export default SearchRoS;
