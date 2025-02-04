import CommonActions from "../../Common/Actions";
class CardElements {
  cardElements(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.itemVisibility(".grid");
    const elements = [
      {
        text: "TiTok Shop",
        descriptions: "TiTok Shop card found in integration page",
      },
      {
        text: "TikTok Live Mod Account",
        descriptions: "TikTok Live Mod Account card found in integration page",
      },
      {
        text: "Shopee Seller Account",
        descriptions: "Shopee Seller Account card found in integration page",
      },
      {
        text: "Tiktok Live Creator Account",
        descriptions:
          "Tiktok Live Creator Account card found in integration page",
      },
      {
        text: "Google Calendar",
        descriptions: "Google Calendar card found in integration page",
      },
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        ".flex-1",
        element.text,
        element.descriptions,
        `Error: ${element.text} card not found in integration page`,
        "Settings-> Integrations tab",
        resultTracker
      );
    });
  }
}
export default CardElements;
