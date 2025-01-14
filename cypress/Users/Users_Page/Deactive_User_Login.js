import CommonActions from "../../Common/Actions";
class DeactivatedUserLogin {
  deactivatedUserLogin(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(4000);
    commonAction.checkToast(
      "Your account is disabled. Please contact your system administrator.",
      "Your account is disabled. Please contact your system administrator.",
      "Able to login deactivated user check asap  or something esle!",
      "Deactive user->Now try to login with deactivated user email",
      resultTracker
    );
  }
}
export default DeactivatedUserLogin;
