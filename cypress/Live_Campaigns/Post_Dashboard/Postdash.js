import CommonActions from "../../Common/Actions";
class DashElements {
  dashElements(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.visitLivesteamPostDash()
    cy.wait(4000)
    const elements = [
        //Metrics component//
      {
        selector: ".justify-center > .text-xxs",
        text: "Start Time",
        description: "Start Time found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > .text-xxs",
        text: "Live Duration",
        description: "Live Duration found in livestream post dashboard",
      },
      {
        selector: ":nth-child(4) > .text-xxs",
        text: "Platform",
        description: "Platform found in livestream post dashboard",
      },
      {
        selector: ".border-l.text-xxs > :nth-child(1)",
        text: "Host(s)",
        description: "Host(s) found in livestream post dashboard",
      },
      {
        selector: ".border-l.text-xxs > :nth-child(2)",
        text: "Moderator(s)",
        description: "Moderator(s) found in livestream post dashboard",
      },
      {
        selector: ":nth-child(6) > .text-xxs",
        text: "Run of Show",
        description: "Run of Show found in livestream post dashboard",
      },
      {
        selector: ".border-r > .font-medium",
        text: "Revenue",
        description: "Revenue found in livestream post dashboard",
      },
      {
        selector: ".grid-cols-2 > :nth-child(2) > .font-medium",
        text: "Livestream Score",
        description: "Livestream Score found in livestream post dashboard",
      },
      {
        selector: ".col-span-3 > :nth-child(1) > :nth-child(1) > .font-medium",
        text: "Average Order Value",
        description: "Average Order Value found in livestream post dashboard",
      },
      {
        selector: ".col-span-3 > :nth-child(1) > :nth-child(2) > .font-medium",
        text: "Average Selling Price",
        description: "Average Selling Price found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > :nth-child(3) > .font-medium",
        text: "Conversion Rate",
        description: "Conversion Rate found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > :nth-child(4) > .font-medium",
        text: "Views",
        description: "Views found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > :nth-child(5) > .font-medium",
        text: "Unique Viewers",
        description: "Unique Viewers found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > :nth-child(6) > .font-medium",
        text: "New Follows",
        description: "New Follows found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > :nth-child(7) > .font-medium",
        text: "Comments",
        description: "Comments found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > :nth-child(8) > .font-medium",
        text: "Shares",
        description: "Shares found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > :nth-child(9) > .font-medium",
        text: "Total Engagement",
        description: "Total Engagement found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(1) > .font-medium",
        text: "GPM",
        description: "GPM found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(2) > .font-medium",
        text: "Orders",
        description: "Orders found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(3) > .font-medium",
        text: "Unit(s) Sold",
        description: "Unit(s) Sold found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(4) > .font-medium",
        text: "Buyers",
        description: "Buyers found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(5) > .font-medium",
        text: "Peak Concurrent Viewers",
        description:
          "Peak Concurrent Viewers found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(6) > .font-medium",
        text: "Follower CR",
        description: "Follower CR found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(7) > .font-medium",
        text: "Likes",
        description: "Likes found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(8) > .font-medium",
        text: "Gifts",
        description: "Gifts found in livestream post dashboard",
      },
      {
        selector: ":nth-child(3) > :nth-child(9) > .font-medium",
        text: "Engagement Rate",
        description: "Engagement Rate found in livestream post dashboard",
      },
      //Graph component//
      {
        selector: ".mb-4 > .items-center > .text-black",
        text: "Event Timeline",
        description: "Event Timeline found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Audio loudness level",
        description: "Audio loudness level found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Total low or silent audio",
        description:
          "Total low or silent audio found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Views",
        description: "Views found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Viewers",
        description: "Viewers found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Likes",
        description: "Likes found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Comments",
        description: "Comments found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Follows",
        description: "Follows found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Shares",
        description: "Shares found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "GMV",
        description: "GMV found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Orders",
        description: "Orders found in livestream post dashboard",
      },
      {
        selector: ":nth-child(1) > .mb-4",
        text: "Gifts",
        description: "Gifts found in livestream post dashboard",
      },
      //sales info//
      {
        selector: ".w-\\[30\\%\\] > .flex > .select-none",
        text: "Product Name",
        description: "Product Name found in livestream post dashboard",
      },
      {
        selector: ".min-w-\\[111px\\] > .flex > .select-none",
        text: "Unit(s) Sold",
        description: "Unit(s) Sold found in livestream post dashboard",
      },
      {
        selector: ".w-\\[18\\%\\] > .flex > .select-none",
        text: "Orders",
        description: "Orders found in livestream post dashboard",
      },
      {
        selector: ".min-w-\\[70px\\] > .flex > .select-none",
        text: "Sales",
        description: "Sales found in livestream post dashboard",
      },
      {
        selector: ".max-h-\\[380px\\] > .text-textDark > .flex",
        text: "Data unavailable",
        description: "Data unavailable found in livestream post dashboard",
      },
      {
        selector: ".overflow-hidden > .justify-center",
        text: "Export",
        description: "Export found in livestream post dashboard",
      },
      {
        selector: ".px-1 > .text-black",
        text: "Audio Transcription",
        description: "Audio Transcription found in livestream post dashboard",
      },
      {
        selector: ".pl-1 > .text-black",
        text: "Comments",
        description: "Comments found in livestream post dashboard",
      },
      {
        selector: ".pl-1 > .flex > :nth-child(2)",
        text: "Moderator",
        description: "Moderator found in livestream post dashboard",
      },
      {
        selector: ".pl-1 > .flex > :nth-child(4)",
        text: "Viewer",
        description: "Viewer found in livestream post dashboard",
      },
      {
        selector: ".hidden > .flex-col > .px-1",
        text: "Stream Activity Feed",
        description: "Stream Activity Feed found in livestream post dashboard",
      },
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in livestream post dashboard`,
        "Select Complete Livestream -> Click on view icon->Will redirect Livestream post dashboard page",
        resultTracker
      );
    });
    cy.wait(2000)
    cy.get(".flex-1.overflow-auto.app-content").then(($element) => {
      const scrollHeight = $element[0].scrollHeight;
      const halfHeight = scrollHeight / 3;
      cy.wrap($element).scrollTo(0, halfHeight);
      cy.wait(4000);
      const elements = [
        {
          selector: ".hidden > .flex-col > .flex",
          text: "No event found yet",
          description: "No event found yet found in livestream post dashboard",
        },
        {
          selector: ".w-1\\/2.rounded > .py-7",
          text: "No comments found yet",
          description: "No comments found yet found in livestream post dashboard",
        },
        {
          selector: ".w-1\\/2.rounded > .absolute > :nth-child(2) > .flex",
          text: "Export",
          description: "Export found in livestream post dashboard",
        },
        {
          selector: ":nth-child(7) > .relative > .justify-between > .text-black",
          text: "Keywords(top 20)",
          description: "Keywords(top 20) found in livestream post dashboard",
        },
        {
          selector: ":nth-child(8) > .relative > .text-textDark",
          text: "Wordcloud",
          description: "Wordcloud found in livestream post dashboard",
        },
      ];
      elements.forEach((element) => {
        commonAction.checkElementVisibility(
          element.selector,
          element.text,
          element.description,
          `Error: ${element.text} not found in livestream post dashboard`,
          "Select Complete Livestream -> Click on view icon->Will redirect Livestream post dashboard page",
          resultTracker
        );
      });
    });
  }
}
export default DashElements;
