import CommonActions from "../Common/Actions";
class PostDashComponent {
  dashComponent(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(4000);
    commonAction.clickElement(":nth-child(12) > .flex > .text-primary");
    commonAction.itemVisibility(".mt-10 > .grid > :nth-child(1)");
    commonAction.clickElement(".mt-10 > .grid > :nth-child(1)");
    commonAction.itemVisibility(".mb-4 > .items-center > .text-black");
    const elements = [
      {
        selector: ".mb-3 > :nth-child(1) > .text-xxs",
        text: "Account Name",
        description: "Account Name found in livescope post dashboard",
      },
      {
        selector: ".mt-3 > :nth-child(1) > .text-xxs",
        text: "Start Time",
        description: "Start Time found in livescope post dashboard",
      },
      {
        selector: ".mb-3 > :nth-child(2) > .text-xxs",
        text: "Platform",
        description: "Platform found in livescope post dashboard",
      },
      {
        selector: ".mt-3 > :nth-child(2) > .text-xxs",
        text: "Live Duration",
        description: "Live Duration found in livescope post dashboard",
      },
      {
        selector: ".px-4 > .grow > :nth-child(1) > :nth-child(1)",
        text: "Views",
        description: "Views found in livescope post dashboard",
      },
      {
        selector: ".px-4 > .grow > :nth-child(1) > :nth-child(2)",
        text: "Unique Viewers",
        description: "Unique Viewers found in livescope post dashboard",
      },
      {
        selector: ".px-4 > .grow > :nth-child(1) > :nth-child(3)",
        text: "New Follows",
        description: "New Follows found in livescope post dashboard",
      },
      {
        selector: ".px-4 > .grow > :nth-child(1) > :nth-child(4)",
        text: "Comments",
        description: "Comments found in livescope post dashboard",
      },
      {
        selector: ".px-4 > .grow > :nth-child(1) > :nth-child(5)",
        text: "Shares",
        description: "Shares found in livescope post dashboard",
      },
      {
        selector: ".px-4 > .grow > :nth-child(1) > :nth-child(6)",
        text: "Total Engagement",
        description: "Total Engagement found in livescope post dashboard",
      },
      {
        selector: ".px-4 > .grow > :nth-child(3) > :nth-child(1)",
        text: "Peak Concurrent Viewers",
        description: " Peak Concurrent Viewers found in livescope post dashboard",
      },
      {
        selector: ".px-4 > .grow > :nth-child(3) > :nth-child(2)",
        text: "Avg View Duration",
        description: "Avg View Duration found in livescope post dashboard",
      },
      {
        selector: ".grow > :nth-child(3) > :nth-child(3)",
        text: "Follower CR",
        description: "Follower CR found in livescope post dashboard",
      },
      {
        selector: ".grow > :nth-child(3) > :nth-child(4)",
        text: "Likes",
        description: "Likes found in livescope post dashboard",
      },
      {
        selector: ".grow > :nth-child(3) > :nth-child(5)",
        text: "Gifts",
        description: "Gifts found in livescope post dashboard",
      },
      {
        selector: ".grow > :nth-child(3) > :nth-child(6)",
        text: "Engagement Rate",
        description: "Engagement Rate found in livescope post dashboard",
      },
      {
        selector: ".mb-4 > .items-center > .text-black",
        text: "Event Timeline",
        description: "Event Timeline found in livescope post dashboard",
      },
      {
        selector: ".pl-1 > .text-black",
        text: "Comments",
        description: "Comments found in livescope post dashboard",
      },
      {
        selector: ".\\32 xl\\:w-\\[calc\\(30\\%\\-10px\\)\\] > .flex-col > .px-1",
        text: "Stream Activity Feed",
        description: "Stream Activity Feed found in livescope post dashboard",
      }
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in livescope post dashboard`,
        "Livescope-> Livescope List page-> Click on view button->Livescope details page->Livescope post dashboard ",
        resultTracker
      );
    });
  }
}
export default PostDashComponent;
