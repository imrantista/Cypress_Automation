import CommonActions from "../Common/Actions";
class DeactivateUser {
  deactivateUser(resultTracker, dataSet) {
    const commonAction = new CommonActions();
    commonAction.clearElement('input[name="username"]');
    commonAction.clearElement('input[name="password"]');
    commonAction.selectAndType('input[name="username"]', dataSet.deactiveuser);
    commonAction.selectAndType('input[name="password"]', dataSet.password);
    commonAction.clickElement('button[type="submit"]');
    cy.wait(2000);
    commonAction.checkToast(
      "Your account is disabled. Please contact your system administrator.",
      "Your account is disabled. Please contact your system administrator.",
      "Able to login with deactivate account user credentials",
      "Try to login with deactivate account user credentials",
      resultTracker
    );
  }
}
export default DeactivateUser;
