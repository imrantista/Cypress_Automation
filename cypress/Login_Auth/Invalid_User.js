import CommonActions from "../Common/Actions";
class InvalidUser {
  invalidUser(resultTracker, dataSet) {
    const commonAction = new CommonActions();
    commonAction.clearElement('input[name="username"]')
    commonAction.clearElement('input[name="password"]')
    commonAction.selectAndType('input[name="username"]', dataSet.invaliduser);
    commonAction.selectAndType('input[name="password"]', dataSet.password);
    commonAction.clickElement('button[type="submit"]');
    cy.wait(2000)
    commonAction.checkToast(
      "Invalid login credential!",
      "Invalid login credential!",
      "Able to login with invalid credentials",
      "Try to login with invalid credentialsl",
      resultTracker
    )
  }
}
export default InvalidUser;
