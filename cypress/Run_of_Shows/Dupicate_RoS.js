import CommonActions from "../Common/Actions";
class DuplicateRoS {
  duplicateRoS(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .bg-\\[\\#1FC7A9\\]\\/\\[10\\%\\] > svg"
    );
    cy.wait(4000);
    commonAction.checkToast(
      "Run of Show copied successfully!",
      "Run of Show copied successfully!",
      "Unable to copied run of show",
      "RoS->RoS list page->Click on copy icon",
      resultTracker
    );
  }
}
export default DuplicateRoS;
