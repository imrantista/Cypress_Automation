import CommonActions from "../../../Common/Actions";
import CreateRoS from "../../../Run_of_Shows/Create_RoS/Create_Ros";
class CreateNew {
  createNew(resultTracker) {
    const commonAction = new CommonActions();
    const randomString = Math.random().toString(9).substring(2);
    const newLivestream = `Livestream-${randomString}-QA`;
    commonAction.itemVisibility(".px-\\[38px\\] > .gap-3 > .text-white");
    commonAction.selectAndType("#name", newLivestream);
    commonAction.selectAndType(
      ".react-datepicker__input-container > .h-\\[55px\\]",
      `"01/01/2027"{enter}`
    );
    commonAction.selectAndType('[name="minutes"]', 10);
    cy.wait(2000);
    commonAction.selectAndType(
      ":nth-child(1) > .css-b62m3t-container > .css-ipivbr-control",
      `imran{enter}`
    );
    commonAction.selectAndType(
      ":nth-child(2) > .css-b62m3t-container > .css-ipivbr-control",
      `imran{enter}`
    );
    commonAction.selectAndType(".css-m6f6ft-control", `English (US){enter}`);
    commonAction.clickElement(".px-\\[38px\\] > .gap-3 > .text-white");
    cy.wait(6000);
    cy.get("body").then(($body) => {
      if ($body.find('button[type="submit"]:contains("Continue anyway")').length > 0) {
        cy.get('button[type="submit"]')
          .contains("Continue anyway")
          .should("be.visible")
          .then(($button) => {
            if ($button.is(":visible")) {
              cy.wrap($button).click();
            }
            LivestreamSaveToaster(resultTracker);
            createROS(resultTracker);
          });
      } else {
        LivestreamSaveToaster(resultTracker);
        createROS(resultTracker);
      }
    });
    function LivestreamSaveToaster(resultTracker) {
      commonAction.checkToast(
        "Livestream saved successfully!",
        "Livestream saved successfully!",
        "Unable to Create Livestream or something else",
        "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Try to create livestream",
        resultTracker
      );
    }
    function createROS(resultTracker) {
      const newRos = new CreateRoS();
      newRos.createRoS(resultTracker);
    }
  }
}
export default CreateNew;
