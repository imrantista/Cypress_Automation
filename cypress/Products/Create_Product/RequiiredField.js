import CommonActions from "../../Common/Actions";
class ModalComponentValidation {
  RequiredFieldValidation(resultTracker) {
    const elements = [
      {
        selector: ":nth-child(1) > :nth-child(2) > .text-xs > span",
        text: "Product Name is required.",
        description: "Product Name is required. found in product create modal when user try to empry submission",
      },
      {
        selector: ":nth-child(3) > .text-xs > span",
        text: "Product Category is required.",
        description: "Product Category is required. found in product create modal when user try to empry submission",
      },
      {
        selector: ":nth-child(4) > :nth-child(1) > .text-xs > span",
        text: "Brand Name is required.",
        description: "Brand Name is required. found in product create modal when user try to empry submission",
      },
      {
        selector: ":nth-child(4) > :nth-child(2) > .text-xs > span",
        text: "Quantity is required.",
        description: "Quantity is required. found in product create modal when user try to empry submission",
      },
      {
        selector: ":nth-child(5) > :nth-child(1) > .text-xs > span",
        text: "SKU Code is required.",
        description: "SKU Code is required. found in product create modal when user try to empry submission",
      },
      {
        selector: ":nth-child(5) > .grid > :nth-child(1) > .text-xs > span",
        text: "Price RRP is required.",
        description: "Price RRP is required. found in product create modal when user try to empry submission",
      },
      {
        selector: ".relative > .w-full > .text-xs > span",
        text: "Product script is required.",
        description: "Product script is required. found in product create modal when user try to empry submission",
      },
      {
        selector: ".col-span-2 > :nth-child(1) > .text-xs > span",
        text: "Product duration is required.",
        description: "Product duration is required. found in product create modal when user try to empry submission",
      }
    ];
    elements.forEach((element) => {
      const commonAction = new CommonActions();
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in product create modal when user try to empry submission.`,
        "Product-> Product List page-> Click on Add new button->Product create modal->With all empty field Click on Add button",
        resultTracker
      );
    });
  }
}
export default ModalComponentValidation;
