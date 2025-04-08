import { element } from "wd/lib/commands";
import CommonActions from "../../Common/Actions";
class ViewLivestream {
  viewLivestream(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clickElement(".select-none > .relative");
    cy.wait(2000);
    commonAction.selectAndType(
      ":nth-child(2) > .css-b62m3t-container > .css-1avjah2-control",
      `Scheduled{enter}`
    );
    commonAction.clickElement(".py-3");
    cy.wait(2000);
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(10) > .flex > .bg-primary\\/\\[5\\%\\] > svg"
    );
    commonAction.itemVisibility(".bg-primary > .text-white")
    cy.wait(2000);
    const elements = [
      {
        selector: ".justify-end > .py-1\\.5 > .text-\\[10px\\]",
        text: "Start Time",
        description: "Start Time found in Live-monitor page",
      },
      {
        selector: ".space-x-2 > .py-1\\.5 > .text-\\[10px\\]",
        text: "Live Duration",
        description: "Live Duration found in Live-monitor page",
      },
      {
        selector: ".flex-col.py-1\\.5 > :nth-child(1)",
        text: "Host(s)",
        description: "Host(s) found in Live-monitor page",
      },
      {
        selector: ".flex-col.py-1\\.5 > :nth-child(2)",
        text: "Moderator(s)",
        description: "Moderator(s) found in Live-monitor page",
      },
      {
        selector: ".\\32 xl\\:w-\\[80\\%\\] > :nth-child(1)",
        text: "Platform",
        description: "Platform found in Live-monitor page",
      },
      {
        selector: ".\\32 xl\\:w-\\[80\\%\\] > :nth-child(2) > .whitespace-nowrap",
        text: "Stream URL",
        description: "Stream URL found in Live-monitor page",
      },
      {
        selector: ".w-\\[75px\\] > .text-center",
        text: "Connect",
        description: "Connect found in Live-monitor page",
      },
      {
        selector: ":nth-child(2) > .text-sm > :nth-child(1)",
        text: "Products",
        description: "Products found in Live-monitor page",
      },
      {
        selector: ":nth-child(2) > .text-sm > :nth-child(2)",
        text: "Assets",
        description: "Assets found in Live-monitor page",
      },
      {
        selector: ":nth-child(3) > .bg-white > .font-\\[700\\]",
        text: "Stream Activity Feed",
        description: "Stream Activity Feed found in Live-monitor page",
      },
      {
        selector: ":nth-child(3) > .bg-white > .flex",
        text: "No event found yet",
        description: "No event found yet found in Live-monitor page",
      },
      {
        selector: ".h-\\[858px\\] > .font-\\[700\\]",
        text: "Viewer Comments",
        description: "Viewer Comments found in Live-monitor page",
      },
      {
        selector: ".h-\\[858px\\] > .flex > p",
        text: "No comments yet",
        description: "No comments yet found in Live-monitor page",
      },
      {
        selector: ".w-\\[81px\\]",
        text: "Send",
        description: "Send found in Live-monitor page",
      },
      {
        selector: ".w-\\[470px\\] > .text-sm > :nth-child(1)",
        text: "Speed",
        description: "Speed found in Live-monitor page",
      },
      {
        selector: ".bg-primary > .text-white",
        text: "Run of Show",
        description: "Run of Show found in Live-monitor page",
      },
      {
        selector: ".justify-center > .font-medium",
        text: "Views",
        description: "Views found in Live-monitor page",
      },
      {
        selector: ".col-span-5 > .grid > :nth-child(1) > .font-medium",
        text: "Revenue",
        description: "Revenue found in Live-monitor page",
      },
      {
        selector: ".grid > :nth-child(2) > .font-medium",
        text: "Orders",
        description: "Orders found in Live-monitor page",
      },
      {
        selector: ":nth-child(3) > .font-medium",
        text: "Unique Viewers",
        description: "Unique Viewers found in Live-monitor page",
      },
      {
        selector: ":nth-child(4) > .font-medium",
        text: "Likes",
        description: "Likes found in Live-monitor page",
      },
      {
        selector: ":nth-child(5) > .font-medium",
        text: "Comments",
        description: "Comments found in Live-monitor page",
      },
      {
        selector: ":nth-child(6) > .font-medium",
        text: "Shares",
        description: "Shares found in Live-monitor page",
      },
      {
        selector: ":nth-child(7) > .font-medium",
        text: "GPM",
        description: "GPM found in Live-monitor page",
      },
      {
        selector: ":nth-child(8) > .font-medium",
        text: "Unit(s) Sold",
        description: "Unit(s) Sold found in Live-monitor page",
      },
      {
        selector: ":nth-child(9) > .font-medium",
        text: "Buyers",
        description: "Buyers found in Live-monitor page",
      },
      {
        selector: ":nth-child(10) > .font-medium",
        text: "Peak Concurrent Viewers",
        description: "Peak Concurrent Viewers found in Live-monitor page",
      },
      {
        selector: ":nth-child(11) > .font-medium",
        text: "New Follows",
        description: "New Follows found in Live-monitor page",
      },
      {
        selector: ":nth-child(12) > .font-medium",
        text: "Gifts",
        description: "Gifts found in Live-monitor page",
      },
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in Livescope view page`,
        "Live Campaigns->Livestreams->Livestreams list page->Click on view icon",
        resultTracker
      );
    });

  }
}
export default ViewLivestream;
