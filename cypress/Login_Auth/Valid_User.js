import CommonActions from "../Common/Actions";
class ValidUser {
  validUser(resultTracker, dataSet) {
    const commonAction = new CommonActions();
    commonAction.clearElement('input[name="username"]');
    commonAction.clearElement('input[name="password"]');
    commonAction.selectAndType('input[name="username"]', dataSet.useremail);
    commonAction.selectAndType('input[name="password"]', dataSet.password);
    commonAction.clickElement('button[type="submit"]');
    commonAction.itemVisibility('[href="/live-campaigns"] > .text-primary')
    commonAction.checkElementVisibility(
        '[href="/live-campaigns"] > .text-primary',
        "Live Campaigns",
        "Able to login with valid credentials",
        "unable to login with valid credentials",
        "Try to login with valid credentials",
        resultTracker
    )
  }
}
export default ValidUser;
