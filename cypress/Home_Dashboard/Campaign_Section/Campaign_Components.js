import CommonActions from "../../Common/Actions";
class CamapignElements {
  dashboardElements(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.itemVisibility(":nth-child(1) > .ml-2 > .text-\\[\\#A3AED0\\]")
    const elements = [
      {
        selector: ":nth-child(1) > .ml-2 > .text-\\[\\#A3AED0\\]",
        text: "Total GMV",
        description: "Total GMV found on campaign section in Home dashboard",
      },
      {
        selector: ":nth-child(2) > .ml-2 > .text-\\[\\#A3AED0\\]",
        text: "Livestream Score (Avg.)",
        description:
          "Livestream Score (Avg.) found on campaign section in Home dashboard",
      },
      {
        selector: ":nth-child(3) > .ml-2 > .text-\\[\\#A3AED0\\]",
        text: "Total Livestreams",
        description:
          "Total Livestreams found on campaign section in Home dashboard",
      },
      {
        selector: ":nth-child(4) > .ml-2 > .text-\\[\\#A3AED0\\]",
        text: "Frequency (Avg.)",
        description:
          "Frequency (Avg.) found on campaign section in Home dashboard",
      },
      {
        selector: ":nth-child(5) > .ml-2 > .text-\\[\\#A3AED0\\]",
        text: "Duration (Avg.)",
        description:
          "Duration (Avg.) found on campaign section in Home dashboard",
      },
      {
        selector: ":nth-child(6) > .ml-2 > .text-\\[\\#A3AED0\\]",
        text: "Views (Avg.)",
        description: "Views (Avg.) found on campaign section in Home dashboard",
      },
      {
        selector: ":nth-child(7) > .ml-2 > .text-\\[\\#A3AED0\\]",
        text: "PCV (Avg.)",
        description: "PCV (Avg.) found on campaign section in Home dashboard",
      },
      {
        selector: ".justify-between > .font-bold",
        text: "Revenue",
        description: "Revenue found on campaign section in Home dashboard",
      },
      {
        selector: ".top-\\[24px\\] > .bg-\\[\\#F4F8FF\\] > div > .text-textDark",
        text: "Hours Used",
        description: "Hours Used found on campaign section in Home dashboard",
      },
      {
        selector: ".right-\\[180px\\] > .font-montserrat > .flex",
        text: "Livestream",
        description: "Livestream found on campaign section in Home dashboard",
      },
      {
        selector: ".fc-today-button",
        text: "Today",
        description: "Today found on campaign section in Home dashboard",
      },
      {
        selector: ".mb-5 > .text-black",
        text: "Insights",
        description: "Insights found on campaign section in Home dashboard",
      },
      {
        selector: ".css-1d8n9bt",
        text: "This Month",
        description: "This Month found on campaign section in Home dashboard",
      },
      {
        selector: ".bg-\\[\\#F0F5FF\\] > .text-\\[\\#A3AED0\\]",
        text: "New Followers",
        description: "New Followers found on campaign section in Home dashboard",
      },
      {
        selector: ".bg-\\[\\#FFE8FF\\] > .text-\\[\\#A3AED0\\]",
        text: "New Gifts",
        description: "New Gifts found on campaign section in Home dashboard",
      },
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found on campaign section in Home dashboard`,
        "Check on campaign section in home dashboard",
        resultTracker
      );
    });
  }
}
export default CamapignElements;
