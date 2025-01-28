import CommonActions from "../../Common/Actions";
class NewCategory{
    newCategory(resultTracker){
        const commonAction = new CommonActions()
        const randomString = Math.random().toString(9);
        const newCategory = `New-${randomString}-Categorys`;
        commonAction.selectAndType(
            ":nth-child(3) > .css-b62m3t-container > .css-m6f6ft-control",
            `${newCategory}{enter}`
          ); // Add new Category
          cy.wait(4000);
          commonAction.checkToast(
            "Category saved successfully!",
            "Product category saved successfully!",
            "Unable to save product category",
            "Product->Click on Add new->Create Product modal will open-> Try to add new category",
            resultTracker
          );
    }
}
export default NewCategory;