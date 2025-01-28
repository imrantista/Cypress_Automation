import CommonActions from "../Common/Actions";
import AddNewProduct from "../Products/Create_Product/Add_New_Product";
class ProductAdd{
    productAdd(resultTracker){
        const commonAction = new CommonActions()
        commonAction.itemVisibility(".gap-2 > .vs-btn");
        commonAction.clickElement(".gap-2 > .vs-btn")
        commonAction.itemVisibility(".vs-modal-header-content");
        commonAction.clickElement(".vs-modal-header-content", "Add");
        commonAction.itemVisibility(":nth-child(1) > .inline-flex");
        const addnewproduct = new AddNewProduct()
        addnewproduct.CreateProduct(resultTracker)
    }
}
export default ProductAdd;