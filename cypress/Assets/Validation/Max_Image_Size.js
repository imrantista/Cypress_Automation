import CommonActions from "../../Common/Actions";
import "cypress-file-upload";
class MaxImageSize {
  maxImageSize(resultTracker) {
    const commonAction = new CommonActions();
    const maxfile = "maxsize.JPG";
    commonAction.clickElement('[role="presentation"] > .flex > .cursor-pointer > svg')
    cy.get('input[type="file"]').attachFile(maxfile);
    commonAction.waitFOrtoast();
    commonAction.checkToast(
        "Image size exceeds 4 MB limit. Please reduce the file size.",
        "Image size exceeds 4 MB limit. Please reduce the file size.",
        "Check max image isze validation, image size must be less than 4MB.",
        "Asset->Click on Add new->Create Product modal will open-> Try to add image more than 4MB",
        resultTracker
    )
  }
}
export default MaxImageSize;
