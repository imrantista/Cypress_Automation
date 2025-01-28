import CommonActions from "../Common/Actions";
class  AssetCatergoy{
    assetCategory(resultTracker){
        const commonAction = new CommonActions()
        const randomString = Math.random().toString(9);
        const newCategory = `Asset-${randomString}-Cat`;
        commonAction.selectAndType(
            ".css-m6f6ft-control > .css-1d8n9bt",
            `${newCategory}{enter}`
          );
          cy.wait(4000);
          commonAction.checkToast(
            "Asset category saved successfully!",
            "Asset category saved successfully!",
            "Unable to saved asset category or something esle!.",
            "Assets->Asset list page->Click on Add new button->Asset create modal will open->Try to add new cetagory",
            resultTracker
          );
    }
}
export default AssetCatergoy;