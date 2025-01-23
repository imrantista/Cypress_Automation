import CommonActions from "../../../Common/Actions";
class NameUnique {
  nameUnique(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(".select-none > .relative");
    cy.wait(2000);
    commonAction.selectAndType(
      ":nth-child(2) > .css-b62m3t-container > .css-1avjah2-control",
      `Scheduled{enter}`
    );
    commonAction.clickElement(".py-3");
    cy.wait(4000);
    commonAction.clickElement(":nth-child(1) > :nth-child(10) > .flex > .text-primaryYellow");
    commonAction.itemVisibility(".gap-3 > .text-white")
    commonAction.clearElement('#name')
    commonAction.selectAndType('#name', "Test 2")
    commonAction.clickElement(".gap-3 > .text-white")
    cy.wait(400)
    commonAction.checkToast(
      "Livestream name must be unique.",
      "Livestream name must be unique.",
      "Name validtaion failed Livestream name must be unique.",
      "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Try to create livestream with name [test 2] ",
      resultTracker
    )
  }
}
export default NameUnique;
