import CommonActions from "../Common/Actions";
class ProductView{
    productView(resultTracker){
        const commonAction = new CommonActions()
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;
            const scrollPosition = scrollHeight / 2;
            win.scrollTo(0, scrollPosition);
            commonAction.clickElement(".bg-white > .py-5")
            commonAction.clickElement(":nth-child(1) > .flex > .pl-7")
            commonAction.itemVisibility(".min-w-\\[160px\\] > .relative")
            commonAction.checkElementVisibility(
                ".min-w-\\[160px\\] > .relative",
                "Name",
                "Able to view product from home dashboard",
                "Unable to view product from home dashboard",
                "Dashboard->Click on Total Products",
                resultTracker
            )

        });
    }
}
export default ProductView;