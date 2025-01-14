import CommonActions from "../../Common/Actions";

class AssetDeleteValidation {
  assetDeleteValidation(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clearElement(".py-2");
    commonAction.selectAndType(".py-2", "Assets-12");
    cy.wait(2000);
    commonAction.clickElement(".text-primaryRed");
    cy.wait(4000);
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
          cy.get(".gap-3 > .text-white").click();
          cy.wait(4000);
          cy.get(".Toastify__toast")
            .should("be.visible")
            .then(($toast) => {
              const toastMessage = $toast.text();
              if (toastMessage.includes("This Asset is used in an existing Run of Show and cannot be deleted.")) {
                commonAction.checkToast(
                  "This Asset is used in an existing Run of Show and cannot be deleted.",
                  "",
                  "",
                  "Asset->Choose an Asset that is used in an existing RoS->Click on delete icon->Confirm deletion",
                  resultTracker
                );
              } else if (toastMessage.includes("Asset deleted successfully!")) {
                commonAction.checkToast(
                  "",
                  "",
                  "Asset deleted successfully!",
                  "Asset->Click on delete icon",
                  resultTracker
                );
              } else {
                commonAction.checkToast(
                  "",
                  "",
                  "Unexpected toaster message: " + toastMessage,
                  "Asset->Click on delete icon",
                  resultTracker
                );
              }
            });
        } else {
          commonAction.checkToast(
            "",
            "",
            "Asset delete confirmation button not visible.",
            "Asset->Click on delete icon",
            resultTracker
          );
        }
        commonAction.clearElement(".py-2");
      });
  }
}

export default AssetDeleteValidation;
