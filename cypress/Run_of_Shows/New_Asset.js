import AddNewAsset from "../Assets/Create_Asset/Add_New_Asset";
import CommonActions from "../Common/Actions";
class AssetAdd{
    assetAdd(resultTracker){
       const commonAction = new CommonActions()
       cy.wait(2000)
       commonAction.clickElement(".mb-3 > :nth-child(1) > :nth-child(2)")
       cy.wait(4000)
       commonAction.clickElement(".mb-6 > .relative.flex > .font-montserrat");
       commonAction.itemVisibility(".gap-3 > .text-white")
       const assetadd = new AddNewAsset()
       assetadd.addAsset(resultTracker)

    }
}
export default AssetAdd;