import CommonActions from "../Common/Actions";
class AssetSearch{
    assetSearch(resultTracker){
     const commonAction = new CommonActions();
     commonAction.clearElement(".py-2");
     commonAction.selectAndType(".py-2", "Assets-12")
     resultTracker.successCount++;
    }
}
export default AssetSearch;