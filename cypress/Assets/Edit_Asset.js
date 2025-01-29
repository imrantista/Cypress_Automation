import CommonActions from "../Common/Actions";
class EditAsset {
  editAsset(resultTracker) {
    const commonAction = new CommonActions();
    const randomString = Math.random().toString(9);
    const assetName = `Edit-${randomString}-99`;
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .text-primaryYellow > svg"
    );
    commonAction.itemVisibility(".gap-3 > .text-white");
    commonAction.clearElement("#name");
    commonAction.selectAndType("#name", assetName);
    commonAction.clearElement(
      ":nth-child(3) > .quill > .ql-container > .ql-editor"
    );
    commonAction.selectAndType(
      ":nth-child(3) > .quill > .ql-container > .ql-editor",
      "Asset description Asset description"
    );
    commonAction.clickElement(".gap-3 > .text-white");
    cy.wait(4000)
    commonAction.checkToast(
      "Asset updated successfully!",
      "Asset updated successfully!",
      "Unable to update asset",
      "Assets->Asset list page->click on edit icon->Try to edit asset",
      resultTracker
    );
  }
}
export default EditAsset;
