import CommonActions from "../../../Common/Actions";
class FieldValidation {
  fieldValidation(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(2000);
    commonAction.clearElement("#streamUrl");
    commonAction.clickElement(".px-\\[38px\\] > .gap-3 > .text-white");
    const elements = [
      {
        selector: ":nth-child(1) > .w-full.mb-2 > .text-xs > span",
        text: "Livestream name is required.",
        description:
          "Livestream name is required. validation found in Livestream create modal",
      },
      {
        selector: ":nth-child(1) > :nth-child(2) > .flex-wrap > span",
        text: "Date & time is required.",
        description:
          "Date & time is required. validation found in Livestream create modal",
      },
      {
        selector: ":nth-child(1) > :nth-child(3) > .text-xs > span",
        text: "Livestream duration is required.",
        description:
          "Livestream duration is required. validation found in Livestream create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(1) > .text-xs > span",
        text: "Host is required.",
        description:
          "Host is required. validation found in Livestream create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(2) > .text-xs > span",
        text: "Moderator is required.",
        description:
          "Moderator is required. validation found in Livestream create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(3) > .text-xs",
        text: "Language is required.",
        description:
          "Language is required. validation found in Livestream create modal",
      },
      {
        selector: ".w-full.mb-2 > .text-xs",
        text: "Stream URL is required",
        description:
          "Stream URL is required validation found in Livestream create modal",
      },
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} validation not found in Livestream create modal`,
        "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button",
        resultTracker
      );
    });
  }
}
export default FieldValidation;
