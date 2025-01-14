import CommonActions from "../Common/Actions";
class ViewProduct {
  ProductView(resultTracker) {
    const elements = [
      {
        selector: ":nth-child(1) > .text-\\[\\#4D5A72\\]",
        text: "Brand",
        description: "Brand found in product view page",
      },
      {
        selector: ":nth-child(2) > .text-\\[\\#4D5A72\\]",
        text: "Colours",
        description: "Colours found in product view page",
      },
      {
        selector: ":nth-child(3) > .text-\\[\\#4D5A72\\]",
        text: "Category",
        description: "Category found in product view page",
      },
      {
        selector: ":nth-child(4) > .text-\\[\\#4D5A72\\]",
        text: "SKU",
        description: "SKU found in product view page",
      },
      {
        selector: ":nth-child(5) > .text-\\[\\#4D5A72\\]",
        text: "Quantity",
        description: "Quantity found in product view page",
      },
      {
        selector: ":nth-child(6) > .text-\\[\\#4D5A72\\]",
        text: "RRP",
        description: "RRP found in product view page",
      },
      {
        selector: ":nth-child(7) > .text-\\[\\#4D5A72\\]",
        text: "Offer Price",
        description: "Offer Price found in product view page",
      },
      {
        selector: ".mb-4 > :nth-child(3) > .text-xs",
        text: "Script",
        description: "Script found in product view page",
      },
      {
        selector: ":nth-child(5) > .text-xs",
        text: "Description",
        description: "Description found in product view page",
      },
      {
        selector: ":nth-child(6) > .text-xs",
        text: "Tag(s)",
        description: "Tag(s) found in product view page",
      },
      {
        selector: ":nth-child(7) > .text-xs",
        text: "Image(s)",
        description: "Image(s) found in product view page",
      },
    ];
    elements.forEach((element) => {
      const commonAction = new CommonActions();
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in product view page.`,
        "Product-> Product List page-> Click on view icon->Product view page",
        resultTracker
      );
    });
  }
}
export default ViewProduct;
