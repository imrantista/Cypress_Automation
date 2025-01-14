import CommonActions from "../../Common/Actions";
class CreateModalComponent {
  ModalComponentCheck(resultTracker) {
    const elements = [
      {
        selector: ":nth-child(1) > .inline-flex",
        text: "Image",
        description: "Image found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Product Name *",
        description: "Product Name * found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Category *",
        description: "Category * found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Brand *",
        description: "Brand * found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Product Quantity *",
        description: "Product Quantity * found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "SKU Code *",
        description: "SKU Code * found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Price RRP *",
        description: "Price RRP * found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Offer Price",
        description: "Offer Price found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Colours",
        description: "Colours found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Sizes",
        description: "Sizes found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Description",
        description: "Description found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Script *",
        description: "Script * found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Tag(s)",
        description: "Tag(s) found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Duration(HH:MM:SS) *",
        description: "Duration(HH:MM:SS) * found in product create modal",
      },
      {
        selector: ".vs-modal-body",
        text: "Status",
        description: "Status found in product create modal",
      },
    ];
    elements.forEach((element) => {
      const commonAction = new CommonActions();
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in product create modal.`,
        "Product-> Product List page-> Click on Add new button->Product create modal",
        resultTracker
      );
    });
  }
}

export default CreateModalComponent;
