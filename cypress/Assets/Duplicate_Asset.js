import CommonActions from "../Common/Actions";
class DuplicateAsset {
  
  AssettDuplicate(resultTracker) {
    const commonAction = new CommonActions()
    commonAction.clickElement(":nth-child(1) > :nth-child(8) > .flex > .bg-\\[\\#1FC7A9\\]\\/\\[10\\%\\]")
    cy.wait(4000);
    commonAction.checkToast(
      "Asset duplicated successfully!",
      "Asset duplicated successfully!",
      "Unable to duplicate Asset!",
      "Asset->Asset list page->click on duplicate icon-> Try to duplicate Asset",
      resultTracker
    );
  }
}
export default DuplicateAsset;
