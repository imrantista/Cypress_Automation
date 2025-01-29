import CommonActions from "../Common/Actions";
class ViewPage {
  viewPage(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.clearElement(".py-2")
    commonAction.selectAndType(".py-2", "New Livestream 120" )
    cy.wait(2000)
    commonAction.clickElement(
      ":nth-child(1) > :nth-child(7) > .flex > .bg-primary\\/\\[5\\%\\] > svg"
    );
    commonAction.itemVisibility(".my-auto");
    commonAction.clickElement(
      ":nth-child(1) > .px-4 > :nth-child(1) > .border > .w-1\\/12 > .px-2\\.5"
    );
    cy.wait(2000)
    const elements = [
      {
        selector: ".mb-6",
        text: "Total Run Time",
        descripsion: "Total Run Time found in RoS view page",
      },
      {
        selector: ".mb-6",
        text: "Moderation",
        descripsion: "Moderation found in RoS view page",
      },
      {
        selector: ".mb-6",
        text: "Export to PDF",
        descripsion: "Export to PDF found in RoS view page",
      },
      {
        selector: ":nth-child(2) > .text-right",
        text: "Script",
        descripsion: "Script found in RoS view page",
      },
      {
        selector: ":nth-child(3) > .text-right",
        text: "Colours",
        descripsion: "Colours found in RoS view page",
      },
      {
        selector: ":nth-child(4) > .text-right",
        text: "Quantity",
        descripsion: "Quantity found in RoS view page",
      },
      {
        selector: ":nth-child(5) > .text-right",
        text: "RRP",
        descripsion: "RRP found in RoS view page",
      },
      {
        selector: ":nth-child(6) > .text-right",
        text: "Offer Price",
        descripsion: "Offer Price found in RoS view page",
      },
      {
        selector: ":nth-child(7) > .text-right",
        text: "SKU",
        descripsion: "SKU found in RoS view page",
      },
      {
        selector: ":nth-child(8) > .text-right",
        text: "Description",
        descripsion: "Description found in RoS view page",
      },
      {
        selector: ":nth-child(9) > .text-right",
        text: "Category",
        descripsion: "Category found in RoS view page",
      },
      {
        selector: ":nth-child(10) > .text-right",
        text: "Tag(s)",
        descripsion: "Tag(s) found in RoS view page",
      },
    ];
    elements.forEach((element) => {
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.descripsion,
        `Error: ${element.text} not found in RoS view page`,
        "RoS->RoS list page -> Click on View icon -> Ros View page",
        resultTracker
      );
    });
  }
}
export default ViewPage;
