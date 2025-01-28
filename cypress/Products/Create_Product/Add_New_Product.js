import CommonActions from "../../Common/Actions";
import "cypress-file-upload";
class AddNewProduct {
  CreateProduct(resultTracker) {
    const commonAction = new CommonActions();
    const randomquantity = Math.floor(Math.random() * 20) + 1;
    const randomsku = Math.floor(Math.random() * 200) + 1;
    const newsku = `SkU-${randomsku}-${randomsku + 1}`;
    const randomprice = Math.floor(Math.random() * 200) + 2;
    const offprice = randomprice - 1;
    const randomString = Math.random().toString(9);
    const ProductName = `Products-${randomString}-909`;
    const filepath = "product.jpg";
    commonAction.clickElement(".w-full > div > .relative > svg"); //Add image
    cy.get('input[type="file"]').attachFile(filepath);
    commonAction.selectAndType("#name", `${ProductName}`);  //Type name
    commonAction.selectAndType(
      ":nth-child(3) > .css-b62m3t-container > .css-m6f6ft-control",
      `Category{enter}`
    ); 
    commonAction.selectAndType(
      ":nth-child(1) > .css-b62m3t-container > .css-m6f6ft-control",
      `Brand{enter}`
    );
    commonAction.selectAndType("#stockQty", randomquantity);    //Add Product Quantity
    commonAction.selectAndType("#skuCode", newsku);    //Add Product SKU
    commonAction.selectAndType("#rrpPrice", randomprice); //Add Product Price
    commonAction.selectAndType("#offerPrice", offprice);    //Add Offer Price
    const colors = ["Black", "Red", "Blue", "White", "Green", "Yellow", "Sky"];
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    cy.log(`Selected color: ${selectedColor}`);
    commonAction.selectAndType("#color", selectedColor); //Add Colour
    commonAction.selectAndType("#sizes", randomquantity);  //Add Product size
    commonAction.selectAndType(
      ":nth-child(2) > .quill > .ql-container > .ql-editor",
      "Very good producty"
    );  //Add description
    cy.wait(2000);
    commonAction.selectAndType(".css-v1m836", `Tag{enter}`);
    cy.wait(2000);
    commonAction.clickElement(".vs-modal-header");
    commonAction.selectAndType(
      ":nth-child(1) > .quill > .ql-container > .ql-editor",
      "At Stickler, we believe that Live Commerce will be the ascendant e-commerce trend of the next 5 years – and beyond."
    );   //type scripts
    cy.wait(1000);
    commonAction.selectAndType('[name="minutes"]', randomquantity);     //Add Durations
    commonAction.itemVisibility(".gap-3 > .bg-primary");
    commonAction.clickElement(".gap-3 > .bg-primary"); //clcik on Add button
    cy.wait(4000);
    commonAction.checkToast(
      "Product created successfully!",
      "Product created successfully!",
      "Unable to create product",
      "Product->Click on Add new->Create Product modal will open-> Try to create new product",
      resultTracker
    );
  }
}
export default AddNewProduct;
