import CommonActions from "../../Common/Actions";
class NewTag {
  newTag(resultTracker) {
    const commonAction = new CommonActions();
    const randomString = Math.random().toString(9);
    const newTag = `New-${randomString}-Tags`;
    commonAction.selectAndType(".css-v1m836", `${newTag}{enter}`); // Add Tag
    cy.wait(4000);
    commonAction.checkToast(
      "Tag added successfully!",
      "Tag added successfully!",
      "Unable to save product tag",
      "Product->Click on Add new->Create Product modal will open-> Try to add new tag",
      resultTracker
    );
  }
}
export default NewTag;
