import CommonActions from "../Common/Actions";
class ProductList {
  pageHeader(resultTracker) {
    const elements = [
      { text: "Name", description: "Name found in header section" },
      { text: "Platform", description: "Platform found in header section" },
      { text: "Category", description: "Category found in header section" },
      { text: "Colour", description: "Colour found in header section" },
      { text: "SKU", description: "SKU found in header section" },
      { text: "RRP", description: "RRP found in header section" },
      { text: "Offer Price", description: "Offer Price found in header section" },
      { text: "Script", description: "Script found in header section" },
      { text: "Status", description: "Status found in header section" },
      { text: "Action", description: "Action found in header section" },
      { text: "AI", description: "AI found in header section" },
    ];
    elements.forEach((element) => {
      const commonAction = new CommonActions()
      commonAction.checkElementVisibility(
        ".\\32 xl\\:px-6 > :nth-child(1)",
        element.text,
        element.description,
        `Error: ${element.text} not found in product list page header section.`,
        "Product-> Product List page header",
        resultTracker
      );
    });
  }
}
export default ProductList;
