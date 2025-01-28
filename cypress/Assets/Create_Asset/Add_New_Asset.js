import CommonActions from "../../Common/Actions";
import "cypress-file-upload";
class AddNewAsset {
  addAsset(resultTracker) {
    const commonAction = new CommonActions();
    const randomString = Math.random().toString(9);
    const assetName = `Asset-${randomString}-9098`;
    const filepath = "product.jpg";
    commonAction.clickElement(
      '[role="presentation"] > .flex > .cursor-pointer > svg'
    );
    cy.get('input[type="file"]').attachFile(filepath);
    cy.wait(6000);
    commonAction.selectAndType(
      ".css-m6f6ft-control > .css-1d8n9bt",
      `Category{enter}`
    );
    commonAction.selectAndType("#name", assetName);
    commonAction.selectAndType(
      ":nth-child(3) > .quill > .ql-container > .ql-editor",
      "Asset description Asset description"
    );
    commonAction.selectAndType(".css-v1m836", `Tag{enter}`);
    commonAction.selectAndType(
      ":nth-child(2) > .w-full > .quill > .ql-container > .ql-editor",
      "Asset Scripts done"
    );
    commonAction.selectAndType('[name="minutes"]', 13);
    commonAction.clickElement(".gap-3 > .text-white")
    cy.wait(4000);
    commonAction.checkToast(
        "Asset created successfully!",
        "Asset created successfully!",
        "Unable to create asset or something esle!.",
        "Assets->Asset list page->Click on Add new button->Asset create modal will open->Try to add new asset",
        resultTracker
    )
  }
}
export default AddNewAsset;
