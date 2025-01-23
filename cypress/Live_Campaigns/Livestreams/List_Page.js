import { element } from "wd/lib/commands";
import CommonActions from "../../Common/Actions";
class ListPage {
  listPage(resultTracker) {
    const commonActions = new CommonActions();
    const elements = [
      {
        selector: ".\\32 xl\\:mb-4 > .flex > :nth-child(2) > .font-semibold",
        text: "Livestreams",
        description: "Livestreams Found in Livestream list page header",
      },
      {
        selector: "div > .text-textDark",
        text: "Hours Used",
        description: "Hours Used Found in Livestream list page header",
      },
      {
        selector: ".w-\\[15\\%\\] > .relative",
        text: "Name",
        description: "Name Found in Livestream list page header",
      },
      {
        selector: ".w-\\[22\\%\\] > .relative",
        text: "Date & Time",
        description: "Date & Time Found in Livestream list page header",
      },
      {
        selector: ".w-\\[12\\%\\] > .relative",
        text: "Duration",
        description: "Duration Found in Livestream list page header",
      },
      {
        selector: ".w-\\[8\\%\\] > .relative",
        text: "Platform",
        description: "Platform Found in Livestream list page header",
      },
      {
        selector: ":nth-child(6) > .relative",
        text: "Tag(s)",
        description: "Tag(s) Found in Livestream list page header",
      },
      {
        selector: ":nth-child(7) > .relative",
        text: "Status",
        description: "Status Found in Livestream list page header",
      },
      {
        selector: ":nth-child(8) > .relative > .false",
        text: "Livestream Score",
        description: "Livestream Score Found in Livestream list page header",
      },
      {
        selector: ".min-w-\\[130px\\] > .relative",
        text: "Revenue",
        description: "Revenue Found in Livestream list page header",
      },
      {
        selector: ".min-w-\\[150px\\] > .relative",
        text: "Action",
        description: "Action Found in Livestream list page header",
      },
    ];
    elements.forEach((element) => {
      commonActions.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in Livestream list page header`,
        "Live Campaign->Livestreams->Livestreams list page header",
        resultTracker
      );
    });
  }
}
export default ListPage;
