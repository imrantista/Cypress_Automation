import CommonActions from "../../Common/Actions";
class OfferPrice{
    offerPrice(resultTracker){
        const commonAction = new CommonActions()
        commonAction.clearElement("#rrpPrice")
        commonAction.selectAndType("#rrpPrice",10)
        commonAction.clearElement("#offerPrice")
        commonAction.selectAndType("#offerPrice", 15)
        commonAction.clickElement(".gap-3 > .text-white")
        cy.wait(1000)
        commonAction.checkElementVisibility(
            ":nth-child(2) > .text-red-500 > span",
            "Offer Price cannot be greater than RRP Price.",
            "Offer Price cannot be greater than RRP Price. found",
            "Offer Price cannot be greater than RRP Price. not found when Offer Price is greater than RRP Price. ",
            "Try to create a product when Offer Price is greater than RRP Price.",
            resultTracker
        )

    }
}
export default OfferPrice;