import CommonActions from "../../Common/Actions";
class ListEnd {
  listEnd(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(2000)
    cy.get("#scrollableDiv > .overflow-y-auto").scrollTo("bottom").click();
    cy.wait(2000);
    commonAction.checkElementVisibility(
        ".overflow-y-auto > .text-center",
        "End of products",
        "End of product found in button of the product list in ros",
        "Error: End of product not found in button of the product list in ros",
        "RoS->RoS list page->Click on Add new button->RoS create page->Scroll product upto bottom",
        resultTracker
    )
    cy.get("#scrollableDiv > .overflow-y-auto").scrollTo("top").click();
    cy.wait(4000);
    commonAction.clickElement('.mb-3 > :nth-child(1) > :nth-child(2)');
    cy.wait(2000)
    cy.get("#scrollableDiv > .overflow-y-auto").scrollTo("bottom").click();
    cy.wait(2000)
    commonAction.checkElementVisibility(
        ".overflow-y-auto > .text-center",
        "End of assets",
        "End of assets found in button of the asset list in ros",
        "Error: End of assets not found in button of the asset list in ros",
        "RoS->RoS list page->Click on Add new button->RoS create page->Scroll asset upto bottom",
        resultTracker
    )
  }
}
export default ListEnd;
