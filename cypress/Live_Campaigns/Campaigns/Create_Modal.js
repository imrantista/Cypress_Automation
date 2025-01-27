import CommonActions from "../../Common/Actions";
class ModalComponents{
  modalComponent(resultTracker) {
    const commonAction = new CommonActions();
    const elements = [
      {
        selector: ":nth-child(1) > .w-full.mb-2 > .text-\\[12px\\]",
        text: "Name *",
        description: "Name * found in campaign create modal",
      },
      {
        selector: ":nth-child(1) > :nth-child(2) > .text-\\[12px\\]",
        text: "Start Date *",
        description: "Start Date * found in campaign create modal",
      },
      {
        selector: ":nth-child(1) > :nth-child(3) > .text-\\[12px\\]",
        text: "End Date",
        description: "End Date found in campaign create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(1) > .text-\\[12px\\]",
        text: "Host(s)",
        description: "Host(s) found in campaign create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(2) > .text-\\[12px\\]",
        text: "Moderator(s)",
        description: "Moderator(s) found in campaign create modal",
      },
      {
        selector: ":nth-child(2) > :nth-child(3) > .text-\\[12px\\]",
        text: "Language *",
        description: "Language * found in campaign create modal",
      },
      {
        selector: ":nth-child(3) > :nth-child(1) > .text-\\[12px\\]",
        text: "Stream URL *",
        description: "Stream URL * found in campaign create modal",
      },
      {
        selector: ":nth-child(3) > :nth-child(2) > .text-\\[12px\\]",
        text: "Tag(s)",
        description: "Tag(s) found in campaign create modal",
      },
      {
        selector: ".mt-0 > .text-\\[12px\\]",
        text: "Attachments",
        description: "Attachments found in campaign create modal",
      },
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in campaign create modal`,
        "Live Campiagn -> Campaign tab -> click on Add new button -> Create modal will open",
        resultTracker
      );
    });
  }
}
export default ModalComponents;
