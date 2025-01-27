import CommonActions from "../../Common/Actions";
class RequiredFields {
  requiredFields(resultTracker) {
    const commonAction = new CommonActions(".overflow-hidden > .pt-7 > .gap-3 > .text-white");
    cy.wait(2000)
    commonAction.clearElement('#streamUrl')
    commonAction.clickElement(".overflow-hidden > .pt-7 > .gap-3 > .text-white")
    const elements = [
      {
        selector: ":nth-child(1) > .w-full.mb-2 > .text-xs",
        text: "Campaign Name is required.",
        description: "Campaign Name is required. found in campaign create modal",
      },
      {
        selector: "#campaignAddForm > :nth-child(1) > :nth-child(2) > .text-xs",
        text: "Start date & time is required.",
        description: "Start date & time is required. found in campaign create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(3) > .text-xs > span",
        text: "Campaign Language is required.",
        description: "Campaign Language is required. found in campaign create modal",
      },
      {
        selector: ":nth-child(3) > :nth-child(1) > .text-xs > span",
        text: "Stream URL is required.",
        description: "Stream URL is required. found in campaign create modal",
      },
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in campaign create modal`,
        "Live Campiagn -> Campaign tab -> click on Add new button -> Create modal will open-> Click on save button with empty fields",
        resultTracker
      );
    });
  }
}
export default RequiredFields;;
