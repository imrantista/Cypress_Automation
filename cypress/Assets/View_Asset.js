import CommonActions from "../Common/Actions";
class ViewAsset {
  assetView(resultTracker) {
    const elements = [
      {
        selector: ".vs-modal-header-content > .text-base",
        text: "Asset Details",
        description: "Asset Details found in Asset view page",
      },
      {
        selector: ".vs-modal-body",
        text: "Description",
        description: "Description found in Asset view page",
      },
      {
        selector: ".vs-modal-body",
        text: "Script",
        description: "Script found in Asset view page",
      },
      {
        selector: ".vs-modal-body",
        text: "Tag(s)",
        description: "Tag(s) found in Asset view page",
      },
      {
        selector: ".vs-modal-body",
        text: "Image",
        description: "Image found in Asset view page",
      }
    ];
    const commonAction = new CommonActions();
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in Asset view page.`,
        "Assets->Asset list page->click on view icon->Asset view page",
        resultTracker
      );
    });
  }
}
export default ViewAsset;
