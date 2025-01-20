import CommonActions from "../Common/Actions";
class ModeratioPage {
  moderationPage(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(4000)
    commonAction.checkElementVisibility(
        ".gap-x-2 > .px-2",
        "Change run of show",
        "Change run of show found in moderation page",
        "Change run of show not found in moderation page",
        "RoS->RoS list page-> Click on Moderation icon",
        resultTracker
    )
    commonAction.checkElementVisibility(
        ".border-b > .text-sm",
        "Run of Show",
        "Run of Show found in moderation page",
        "Run of Show not found in moderation page",
        "RoS->RoS list page-> Click on Moderation icon",
        resultTracker
    )
    commonAction.checkElementVisibility(
        ".bg-white.h-\\[calc\\(100vh-110px\\)\\] > .text-sm",
        "Products",
        "Products found in moderation page",
        "Products not found in moderation page",
        "RoS->RoS list page-> Click on Moderation icon",
        resultTracker
    )
  }
}
export default ModeratioPage;
