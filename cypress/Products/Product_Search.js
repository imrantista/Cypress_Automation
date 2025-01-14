import CommonActions from "../Common/Actions";
class ProductSearch{
    productSearch(resultTracker){
     const commonAction = new CommonActions();
     commonAction.clearElement(".py-2");
     commonAction.selectAndType(".py-2", "Stickler Product")
     resultTracker.successCount++;
    }
}
export default ProductSearch;