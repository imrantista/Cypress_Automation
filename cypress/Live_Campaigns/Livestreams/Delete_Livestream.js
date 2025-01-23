import CommonActions from "../../Common/Actions";
class DeleteLivestream {
  deleteLivestream(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(".select-none > .relative");
    cy.wait(2000);
    commonAction.selectAndType(
      ":nth-child(2) > .css-b62m3t-container > .css-1avjah2-control",
      `Scheduled{enter}`
    );
    commonAction.clickElement(".py-3");
    cy.wait(4000);
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(10) > .flex > .text-primaryRed"
    );
    cy.wait(4000);
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
          cy.get(".gap-3 > .text-white").click();
          cy.wait(4000);
          commonAction.checkToast(
            "Livestream deleted successfully!",
            "Livestream deleted successfully!",
            "Unable to deleted livestream",
            "Live Campaigns->Livestreams->Livestreams list page->Click on delete icon",
            resultTracker
          );
        } else {
          const errorMessage =
            "Livestream delete Confirmation button not visible!";
          resultTracker.errorMessages.push(errorMessage);
          resultTracker.errorCount++;
          const stepToReproduce =
            "Live Campaigns->Livestreams->Livestreams list page->Click on delete icon";
          resultTracker.stepToReproduces.push(stepToReproduce);
        }
      });
  }
}
export default DeleteLivestream;
