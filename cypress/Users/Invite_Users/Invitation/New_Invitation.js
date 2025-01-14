import CommonActions from "../../../Common/Actions";
class NewInvitation {
  newInvitation(resultTracker) {
    const commonAction = new CommonActions();
    const randomIndex = Math.floor(Math.random() * 4) + 1;
    const randomString = Math.random().toString(36);
    const newEmail = `email${randomString}@yopmail.com`;
    commonAction.clickElement(".vs-btn > .flex")
    commonAction.selectAndType('input[name="email"]', newEmail)
    commonAction.clickElement(".css-tlfecz-indicatorContainer")
    cy.wait(2000);
    const roleSelector = `#react-select-2-option-${randomIndex}`;
    commonAction.clickElement(roleSelector)
    cy.wait(2000);
    commonAction.clickElement(".bg-primary > span")
    cy.wait(4000)
    commonAction.checkToast(
        "Invitation sent successfully!",
        "Invitation sent successfully!",
        "unable to sent new user invitation or something else",
        "Users->Invite user->Click on Invite button->Try to invite new user",
        resultTracker
    )
  }
}
export default NewInvitation;
