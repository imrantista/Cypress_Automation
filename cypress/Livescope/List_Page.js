import CommonActions from "../Common/Actions";
class LivescopeListPage {
  listPage(resultTracker) {
    const elements = [
      {
        selector: ".\\32xl\\:w-\\[15\\%\\] > .relative",
        text: "Name",
        descriptions: "Name found in livescope list page on header section",
      },
      {
        selector: ".\\32xl\\:w-\\[10\\%\\] > .relative",
        text: "Country",
        descriptions: "Country found in livescope list page on header section",
      },
      {
        selector: ".\\32xl\\:w-\\[8\\%\\] > .relative",
        text: "Platform",
        descriptions: "Platform found in livescope list page on header section",
      },
      {
        selector: ":nth-child(5) > .relative",
        text: "Followers",
        descriptions: "Followers found in livescope list page on header section",
      },
      {
        selector: ":nth-child(6) > .relative",
        text: "Livestreams",
        descriptions: "Livestreams found in livescope list page on header section",
      },
      {
        selector: ".min-w-\\[135px\\] > .relative",
        text: "Avg Dur",
        descriptions: "Avg Dur found in livescope list page on header section",
      },
      {
        selector: ":nth-child(8) > .relative",
        text: "Avg Views",
        descriptions: "Avg Views found in livescope list page on header section",
      },
      {
        selector: ".\\32xl\\:min-w-\\[130px\\] > .relative",
        text: "Avg PCV",
        descriptions: "Avg PCV found in livescope list page on header section",
      },
      {
        selector: ":nth-child(10) > .relative",
        text: "Avg Score",
        descriptions: "Avg Score found in livescope list page on header section",
      },
      {
        selector: ".w-\\[8\\%\\] > .relative",
        text: "Tracking",
        descriptions: "Tracking found in livescope list page on header section",
      },
      {
        selector: ".min-w-\\[110px\\] > .relative > .false",
        text: "Action",
        descriptions: "Action found in livescope list page on header section",
      },
      {
        selector: ":nth-child(1) > .gap-x-3",
        text: "Tracked Accounts",
        descriptions: "Tracked Accounts found in livescope list page on header section",
      },
      {
        selector: ":nth-child(2) > div > .text-textDark",
        text: "Hours Used",
        descriptions: "Hours Used found in livescope list page on header section",
      },
      {
        selector: ".relative.items-end > .py-2",
        text: "Export",
        descriptions: "Export found in livescope list page on header section",
      },
      {
        selector: ".relative > .mb-3",
        text: "Search",
        descriptions: "Search found in livescope list page on header section",
      }
    ];
    elements.forEach((element) => {
      const commonAction = new CommonActions();
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.descriptions,
        `Error: ${element.text} not found in livescope list page on header section.`,
        "Livescope-> Livescope List page-> Check page header componenet",
        resultTracker
      );
    });
  }
}
export default LivescopeListPage;
