import CommonActions from "../Common/Actions";
import AddNewProduct from "../Products/Create_Product/Add_New_Product";
class AddProduct{
    addProduct(resultTracker){
        const commonAction = new CommonActions();
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;
            const scrollPosition = scrollHeight / 2;
            win.scrollTo(0, scrollPosition);
            cy.wait(2000)
            commonAction.clickElement(".py-5 > .font-montserrat")
            commonAction.itemVisibility(".vs-modal-header-content");
            commonAction.clickElement(".vs-modal-header-content", "Add");
            commonAction.itemVisibility(":nth-child(1) > .inline-flex");
            const addproduct = new AddNewProduct()
            addproduct.CreateProduct(resultTracker)

        })
    }
}
export default AddProduct;