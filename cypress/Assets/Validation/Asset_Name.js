import CommonActions from "../../Common/Actions";
class AssetNameValidation {
  assetNameValidation(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .text-primaryYellow"
    );
    commonAction.itemVisibility(".gap-3 > .text-white");
    commonAction.clearElement("#name")
    commonAction.selectAndType("#name", "Assets")
    commonAction.clickElement(".gap-3 > .text-white");
    commonAction.waitFOrtoast();
    commonAction.checkToast(
        "Asset name must be unique.",
        "Asset name must be unique.",
        "Check asset name validation, name must be unique",
        "Assets->Create Asset->Try to create Asset with existing Name",
        resultTracker
    )
  }
}
export default AssetNameValidation;
