import AddNewAsset from "./Add_New_Asset";
class AddNewAssetInRoS{
  addAssetRoS(resultTracker){
    const rosaddasset = new AddNewAsset();
    rosaddasset.addAsset(resultTracker);
    cy.wait(4000);

  }
}
export default AddNewAssetInRoS;