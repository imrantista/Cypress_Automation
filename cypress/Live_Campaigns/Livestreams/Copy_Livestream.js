import CommonActions from "../../Common/Actions";
class CopyLivestream {
  copyLivestream(resultTracker) {
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
      ":nth-child(1) > :nth-child(10) > .flex > .bg-\\[\\#1FC7A9\\]\\/\\[10\\%\\] > svg"
    );
    cy.wait(4000);
    commonAction.checkToast(
      "Livestream copied successfully!",
      "Livestream copied successfully!",
      "Unable to copied livestream",
      "Live Campaigns->Livestreams->Livestreams list page->Click on duplicate icon",
      resultTracker
    );
  }
}
export default CopyLivestream;
