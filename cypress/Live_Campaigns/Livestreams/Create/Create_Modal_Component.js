import { element } from "wd/lib/commands";
import CommonActions from "../../../Common/Actions";
class ModalComponent {
  modalComponent(resultTracker) {
    const commonActions = new CommonActions();
    cy.wait(4000);
    const elements = [
      {
        selector: ":nth-child(1) > .w-full.mb-2 > .text-\\[12px\\]",
        text: "Name *",
        description: "Name * found in livestream create modal",
      },
      {
        selector: ".justify-between > .text-\\[12px\\]",
        text: "Date & Time *",
        description: "Date & Time * found in livestream create modal",
      },
      {
        selector: ".inline-flex > .text-black",
        text: "Auto Start",
        description: "Auto Start found in livestream create modal",
      },
      {
        selector: ":nth-child(1) > :nth-child(3) > .text-\\[12px\\]",
        text: "Duration(HH:MM:SS) *",
        description: "Duration(HH:MM:SS) * found in livestream create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(1) > .text-\\[12px\\]",
        text: "Host(s) *",
        description: "Host(s) * found in livestream create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(2) > .text-\\[12px\\]",
        text: "Moderator(s) *",
        description: "Moderator(s) * found in livestream create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(3) > .text-\\[12px\\]",
        text: "Language *",
        description: "Language * found in livestream create modal",
      },
      {
        selector: ":nth-child(3) > :nth-child(1) > .text-\\[12px\\]",
        text: "Location",
        description: "Location found in livestream create modal",
      },
      {
        selector: ":nth-child(3) > :nth-child(2) > .justify-between > .font-semibold",
        text: "Run of Show",
        description: "Run of Show found in livestream create modal",
      },
      {
        selector: ".gap-x-2 > :nth-child(1) > .text-xs",
        text: "New",
        description: "New found in livestream create modal",
      },
      {
        selector: ".gap-x-2 > :nth-child(2) > .text-xs",
        text: "Existing",
        description: "Existing found in livestream create modal",
      },
      {
        selector: ":nth-child(3) > :nth-child(3) > .text-\\[12px\\]",
        text: "Tag(s)",
        description: "Tag(s) found in livestream create modal",
      },
      {
        selector: ".mt-0 > .text-\\[12px\\]",
        text: "Attachments",
        description: "Attachments found in livestream create modal",
      },
      {
        selector: ":nth-child(4) > .w-full.mb-2 > .text-\\[12px\\]",
        text: "Stream URL",
        description: "Stream URL found in livestream create modal",
      },
      {
        selector: ".px-\\[38px\\] > .gap-3 > .text-white",
        text: "Save & Continue",
        description: "Save & Continue found in livestream create modal",
      },
      {
        selector: ".px-\\[38px\\] > .gap-3 > .min-w-\\[101px\\]",
        text: "Back",
        description: "Back found in livestream create modal",
      },
    ];
    elements.forEach((element) => {
      commonActions.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in livestream create modal`,
        "Live Campaigns->Livestreams -> Craete Livestream Modal",
        resultTracker
      );
    });
  }
}
export default ModalComponent;
