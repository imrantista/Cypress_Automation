import CommonActions from "../../Common/Actions";
class EditLivestraem {
  editLivestream(resultTracker) {
    const commonAction = new CommonActions();
    const randomString = Math.random().toString(9).substring(2);
    const newLivestream = `Edit-${randomString}-QA`;
    commonAction.clickElement(".select-none > .relative");
    cy.wait(2000);
    commonAction.selectAndType(
      ":nth-child(2) > .css-b62m3t-container > .css-1avjah2-control",
      `Scheduled{enter}`
    );
    commonAction.clickElement(".py-3");
    cy.wait(4000);
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(10) > .flex > .text-primaryYellow"
    );
    commonAction.itemVisibility(".gap-3 > .text-white");
    commonAction.clearElement("#name");
    commonAction.selectAndType("#name", newLivestream);
    commonAction.clearElement('[name="seconds"]');
    commonAction.selectAndType('[name="seconds"]', 15);
    commonAction.clickElement(".px-\\[38px\\] > .gap-3 > .text-white");
    cy.wait(4000);
    cy.get("body").then(($body) => {
      if (
        $body.find('button[type="submit"]:contains("Continue anyway")').length >
        0
      ) {
        cy.get('button[type="submit"]')
          .contains("Continue anyway")
          .should("be.visible")
          .then(($button) => {
            if ($button.is(":visible")) {
              cy.wrap($button).click();
            }
            LivestreamSaveToaster(resultTracker);
          });
      } else {
        LivestreamSaveToaster(resultTracker);
      }
    });
    function LivestreamSaveToaster(resultTracker) {
      commonAction.checkToast(
        "Livestream updated successfully!",
        "Livestream updated successfully!",
        "Unable to updated Livestream or something else",
        "Live Campaigns->Livestreams->Livestreams list page->Click on edit button->Try to update livestream",
        resultTracker
      );
    }
  }
}
export default EditLivestraem;
