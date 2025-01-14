import CommonActions from "../../Common/Actions";
class RoleChange {
  roleChange(resultTracker) {
    const commonAction = new CommonActions();
    const randomIndex = Math.floor(Math.random() * 4) + 1;
    commonAction.clickElement(
      ":nth-child(3) > :nth-child(3) > .css-b62m3t-container > .css-vesz48-control > .css-1wy0on6 > .css-1okf66s-indicatorContainer"
    );
    const opt_role = `#react-select-4-option-${randomIndex}`;
    commonAction.itemVisibility(opt_role)
    commonAction.clickElement(opt_role)
    cy.wait(4000)
    commonAction.checkToast(
        "User role changed successfully!",
        "User role changed successfully!",
        "Unable to User role change or something esle!",
        "Users->user list page->Try to change user role",
        resultTracker
    )
  }
}
export default RoleChange;
