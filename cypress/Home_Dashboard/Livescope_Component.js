import { element, text } from "wd/lib/commands";
import CommonActions from "../Common/Actions";
class LivescopeComponent {
  livescopeComponent(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(2000);
    cy.window().then((win) => {
      const scrollHeight = win.document.body.scrollHeight;
      win.scrollTo(0, scrollHeight);
      commonAction.clickElement(":nth-child(9) > .justify-between");
      const elements = [
        {
          selector: ".gap-5",
          text: "LiveScope",
          description: "LiveScope found on livescope section in home dashboard",
        },
        {
          selector: ".gap-x-3 > :nth-child(1) > div > .text-textDark",
          text: "Tracked Accounts",
          description: "Tracked Accounts found on livescope section in home dashboard",
        },
        {
          selector: ":nth-child(2) > div > .text-textDark",
          text: "Hours Used",
          description: "Hours Used found on livescope section in home dashboard",
        },
        {
          selector: ".py-\\[22px\\] > :nth-child(1) > .text-black",
          text: "Latest Livestreams",
          description: "Latest Livestreams found on livescope section in home dashboard",
        },
        {
          selector: ":nth-child(9) > .justify-between > .text-black",
          text: "Top 5 Accounts",
          description: "Top 5 Accounts found on livescope section in home dashboard",
        },
        {
          selector: ":nth-child(9) > .pb-5",
          text: "Name",
          description: "Name found on livescope section in home dashboard",
        },
        {
          selector: ":nth-child(9) > .pb-5",
          text: "Country",
          description: "Country found on livescope section in home dashboard",
        },
        {
          selector: ":nth-child(9) > .pb-5",
          text: "Platform",
          description: "Platform found on livescope section in home dashboard",
        },
        {
            selector: ":nth-child(9) > .pb-5",
            text: "Followers",
            description: "Followers found on livescope section in home dashboard",
          },
          {
            selector: ":nth-child(9) > .pb-5",
            text: "Livestreams",
            description: "Livestreams found on livescope section in home dashboard",
          },
          {
            selector: ":nth-child(9) > .pb-5",
            text: "Avg Dur",
            description: "Avg Dur found on livescope section in home dashboard",
          },
          {
            selector: ":nth-child(9) > .pb-5",
            text: "Avg Views",
            description: "Avg Views found on livescope section in home dashboard",
          },
          {
            selector: ":nth-child(9) > .pb-5",
            text: "Avg PCV",
            description: "Avg PCV found on livescope section in home dashboard",
          },
          {
            selector: ":nth-child(9) > .pb-5",
            text: "Avg Score",
            description: "Avg Score found on livescope section in home dashboard",
          },
      ];
      elements.forEach((element) => {
        commonAction.checkElementVisibility(
          element.selector,
          element.text,
          element.description,
          `Error: ${element.text} not found on livescope section in home dashboard `,
          "Check Livescope section in Home Dashboard",
          resultTracker
        );
      });
    });
  }
}
export default LivescopeComponent;
