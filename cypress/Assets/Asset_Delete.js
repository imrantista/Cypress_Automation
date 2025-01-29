import CommonActions from "../Common/Actions";
class AssetDelete {
  deleteAsset(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .text-primaryRed>svg"
    );
    cy.wait(4000)
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
          cy.get(".gap-3 > .text-white").click();
          cy.wait(4000);
          commonAction.checkToast(
            "Asset deleted successfully!",
            "Asset deleted successfully!",
            "Unable to delete Asset or This Asset is used in an existing Run of Show and cannot be deleted.",
            "Asset->Click on delete icon->Confirm deletion",
            resultTracker
          );
        } else {
          commonAction.checkToast(
            "",
            "",
            "Error: Asset delete confirmation button not visible.",
            "Asset->Click on delete icon",
            resultTracker
          );
        }
      });
  }
}
export default AssetDelete;
