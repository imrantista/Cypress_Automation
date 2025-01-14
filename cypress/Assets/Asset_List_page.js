import CommonActions from "../Common/Actions";
class AssetListPage {
  listPageHeader(resultTracker) {
    const elements = [
      {
        selector: ".w-\\[20\\%\\] > .relative",
        text: "Name",
        description: "Name found in Asset List page header",
      },
      {
        selector: ":nth-child(3) > .relative",
        text: "Category",
        description: "Category found in Asset List page header",
      },
      {
        selector: ":nth-child(4) > .relative",
        text: "Script",
        description: "Script found in Asset List page header",
      },
      {
        selector: ".min-w-\\[120px\\] > .relative",
        text: "Notes",
        description: "Notes found in Asset List page header",
      },
      {
        selector: ".min-w-\\[125px\\] > .relative",
        text: "Duration",
        description: "Duration found in Asset List page header",
      },
      {
        selector: ".w-\\[22\\%\\] > .relative",
        text: "Tag(s)",
        description: "Tag(s) found in Asset List page header",
      },
      {
        selector: ".w-\\[13\\%\\] > .relative > .false",
        text: "Action",
        description: "Action found in Asset List page header",
      },
      {
        selector: ".relative.flex > :nth-child(1) > .mb-3",
        text: "Catergory",
        description: "Catergory found in Asset List page header",
      }
    ];
    const commonAction = new CommonActions();
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in Asset create modal.`,
        "Assets->Asset list page->click on Add new button->Asset create modal",
        resultTracker
      );
    });
  }
}

export default AssetListPage;
