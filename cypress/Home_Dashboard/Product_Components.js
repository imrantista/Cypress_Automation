import CommonActions from "../Common/Actions";
class ProductComponent{
    productComponent(resultTracker){
        const commonAction = new CommonActions()
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;
            const scrollPosition = scrollHeight / 2;
            win.scrollTo(0, scrollPosition);
            const elements =[
                {
                    selector: ".gap-5",
                    text: "Product",
                    description: "Product foud on product section in home dashboard"
                },
                {
                    selector: ".h-\\[388px\\] > .text-black",
                    text: "Insights",
                    description: "Insights foud on product section in home dashboard"
                },
                {
                    selector: ".py-5 > .text-black",
                    text: "Best Sellers",
                    description: "Best Sellers foud on product section in home dashboard"
                },
                {
                    selector: ".w-\\[22\\%\\] > .relative > .false",
                    text: "Name",
                    description: "Name foud on product section in home dashboard"
                },
                {
                    selector: ".w-\\[63\\%\\] > .bg-white > .pb-5",
                    text: "Category",
                    description: "Category foud on product section in home dashboard"
                },
                {
                    selector: ".w-\\[63\\%\\] > .bg-white > .pb-5",
                    text: "Colour",
                    description: "Colour foud on product section in home dashboard"
                },
                {
                    selector: ".w-\\[63\\%\\] > .bg-white > .pb-5",
                    text: "RRP",
                    description: "RRP foud on product section in home dashboard"
                },
                {
                    selector: ".w-\\[63\\%\\] > .bg-white > .pb-5",
                    text: "Offer Price",
                    description: "Offer Price foud on product section in home dashboard"
                },
                {
                    selector: ".w-\\[63\\%\\] > .bg-white > .pb-5",
                    text: "Unit(s) Sold",
                    description: "Unit(s) Sold foud on product section in home dashboard"
                },
                {
                    selector: ".h-\\[388px\\]",
                    text: "Total Products",
                    description: "Total Products foud on product section in home dashboard"
                },
                {
                    selector: ".h-\\[388px\\]",
                    text: "Active Products",
                    description: "Active Products foud on product section in home dashboard"
                },
                {
                    selector: ".h-\\[388px\\]",
                    text: "Products with Sales",
                    description: "Products with Sales foud on product section in home dashboard"
                },
            ]
            elements.forEach((element)=>{
                commonAction.checkElementVisibility(
                    element.selector,
                    element.text,
                    element.description,
                    `Error: ${element.text} not foud on product section in home dashboard`,
                    "Check on product section in home dashboard",
                    resultTracker
                )
            })
        })
    }
}
export default ProductComponent;