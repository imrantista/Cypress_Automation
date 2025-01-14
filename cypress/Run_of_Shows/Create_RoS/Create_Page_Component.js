import CommonActions from "../../Common/Actions";
class CreatePage {
  pageComponent(resultTracker) {
    const elements = [
      {
        selector: ".flex-col > .px-4",
        text: "Total Run Time",
        descripsion: "Total Run Time found in RoS create page",
      },
      {
        selector: ".mb-3 > :nth-child(1) > :nth-child(1) > .font-semibold",
        text: "Products",
        descripsion: "Products found in RoS create page",
      },
      {
        selector: ".mb-3 > :nth-child(1) > :nth-child(2) > .font-semibold",
        text: "Assets",
        descripsion: "Assets found in RoS create page",
      },
      {
        selector: ".flex-end",
        text: "Save",
        descripsion: "Save button found in RoS create page",
      }
    ];
    elements.forEach((element) => {
        const commonAction = new CommonActions()
        commonAction.checkElementVisibility(
            element.selector,
            element.text,
            element.descripsion,
            `Error: ${element.text} not found in RoS create page`,
            "RoS->RoS list page -> Click on add new button -> RoS create page",
            resultTracker
        )
    });
  }
}
export default CreatePage;
