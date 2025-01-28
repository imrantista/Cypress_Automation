import CommonActions from "../Common/Actions";
class AssetTag {
  assetTag(resultTracker) {
    const commonAction = new CommonActions();
    const randomString = Math.random().toString(9);
    const newTag = `Asset-${randomString}-Tags`;
    commonAction.selectAndType(".css-v1m836", `${newTag}{enter}`);
    cy.wait(4000);
    commonAction.checkToast(
      "Tag added successfully!",
      "Tag added successfully!",
      "Unable to saved asset Tag or something esle!",
      "Assets->Asset list page->Click on Add new button->Asset create modal will open->Try to add new tag",
      resultTracker
    );
  }
}
export default AssetTag;
