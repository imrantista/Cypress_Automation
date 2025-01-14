import CommonActions from "../Common/Actions";
class Loginpage {
  Newlogin(username, password) {
    const commonAction = new CommonActions();
    commonAction.selectAndType('input[name="username"]', username);
    commonAction.selectAndType('input[name="password"]', password);
    commonAction.clickElement('button[type="submit"]');
    commonAction.itemVisibility('[title="Go to Live Campaigns page"]');
  }
}
export default Loginpage;
