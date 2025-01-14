import CommonActions from "../Common/Actions";
class PageComponetLivescopeDetailsPage {
  pageComponent(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(4000)
    commonAction.clickElement(":nth-child(12) > .flex > .text-primary");
    commonAction.itemVisibility(
      ":nth-child(1) > .flex-1"
    );
    const elements = [
      {
        selector: ".gap-1 > .font-bold",
        text: "Livestream Tracking",
        description: "Livestream Tracking found on Livescope details page",
      },
      {
        selector: ".mb-3 > :nth-child(1) > :nth-child(1) > .font-semibold",
        text: "Livestreams",
        description: "Livestreams found on Livescope details page",
      },
      {
        selector: ".mb-3 > :nth-child(1) > :nth-child(2) > .font-semibold",
        text: "Video",
        description: "Video found on Livescope details page",
      },
      {
        selector: ":nth-child(1) > .flex-1",
        text: "Followers",
        description: "Followers found on Livescope details page",
      },
      {
        selector: ".h-full > :nth-child(2) > .flex-1",
        text: "Following",
        description: "Following found on Livescope details page",
      },
      {
        selector: ":nth-child(3) > .flex-1",
        text: "Likes",
        description: "Likes found on Livescope details page",
      },
      {
        selector: ":nth-child(4) > .flex-1",
        text: "Videos",
        description: "Videos found on Livescope details page",
      },
      {
        selector: ":nth-child(5) > .flex-1",
        text: "Livestreams",
        description: "Livestreams found on Livescope details page",
      },
      {
        selector: ":nth-child(6) > .flex-1",
        text: "Avg Gifts",
        description: "Avg Gifts found on Livescope details page",
      },
      {
        selector: ":nth-child(7) > .flex-1",
        text: "Frequency (pw)",
        description: "Frequency (pw) found on Livescope details page",
      },
      {
        selector: ":nth-child(8) > .flex-1",
        text: "Avg Duration",
        description: "Avg Duration found on Livescope details page",
      },
      {
        selector: ":nth-child(9) > .flex-1",
        text: "Avg Views",
        description: "Avg Views found on Livescope details page",
      },
      {
        selector: ":nth-child(10) > .flex-1",
        text: "Avg PCV",
        description: "Avg PCV found on Livescope details page",
      },
     
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in Livescope details page.`,
        "Livescope-> Livescope List page-> Click on view button->Livescope details page ",
        resultTracker
      );
    });
  }
}
export default PageComponetLivescopeDetailsPage;
