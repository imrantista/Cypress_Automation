import CommonActions from "../Common/Actions";
class ListPage {
  Listpage(resultTracker) {
    const elements = [
      {
        selector: ".relative > .mb-3",
        text: "Search",
        descripsion: "Search found in RoS list page header section ",
      },
      {
        selector: ":nth-child(2) > .relative",
        text: "Name",
        descripsion: "Name found in RoS list page header section ",
      },
      {
        selector: ":nth-child(3) > .relative",
        text: "# Products",
        descripsion: "# Products found in RoS list page header section ",
      },
      {
        selector: ":nth-child(4) > .relative",
        text: "# Assets",
        descripsion: "# Assets found in RoS list page header section ",
      },
      {
        selector: ":nth-child(5) > .relative",
        text: "Duration",
        descripsion: "Duration found in RoS list page header section ",
      },
      {
        selector: ":nth-child(6) > .relative",
        text: "Tag(s)",
        descripsion: "Tag(s) found in RoS list page header section ",
      },
      {
        selector: ":nth-child(7) > .relative",
        text: "Action",
        descripsion: "Action found in RoS list page header section ",
      }
    ];
    elements.forEach((element) => {
      const commonAction = new CommonActions();
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.descripsion,
        `Error: ${element.text} not found in RoS list page header section`,
        "Run of Shows->RoS List page->Page header",
        resultTracker
      );
    });
  }
}
export default ListPage;
