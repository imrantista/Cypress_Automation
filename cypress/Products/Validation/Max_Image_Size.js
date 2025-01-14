import CommonActions from "../../Common/Actions";
import "cypress-file-upload";
class Max_Image {
  ImageSize(resultTracker) {
    const commonAction = new CommonActions()
    const maxfile = "maxsize.JPG";
    commonAction.clickElement(".w-full > div > .relative > svg");
    cy.get('input[type="file"]').attachFile(maxfile);
    cy.wait(4000);
    commonAction.checkToast(
      "Image size exceeds 4 MB limit. Please reduce the file size.",
      "Image size exceeds 4 MB limit. Please reduce the file size.",
      "Check product image upload validation, Iamge size must be less than 4 mb",
      "Product->Click on Add new->Create Product modal will open-> Try to upload image more than 4mb",
      resultTracker
    );
  }
}
export default Max_Image;
