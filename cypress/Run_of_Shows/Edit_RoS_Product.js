import CommonActions from "../Common/Actions";
import EditProduct from "../Products/Edit_Product";
class RoSProductEdit {
  RoSproductedit(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      ":nth-child(1) > .px-4 > :nth-child(1) > .border > .w-1\\/12 > .flex > .text-primaryYellow"
    );
    commonAction.itemVisibility(".gap-3 > .text-white")
    const roseditproduct = new EditProduct();
    roseditproduct.ProductEdit(resultTracker);
  }
}
export default RoSProductEdit;
