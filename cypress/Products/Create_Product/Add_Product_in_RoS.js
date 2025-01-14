import AddNewProduct from "./Add_New_Product";
class AddPorductRoS {
  RosAddproduct(resultTracker) {
    const rosaddproduct = new AddNewProduct();
    rosaddproduct.CreateProduct(resultTracker);
    cy.wait(4000);
  }
}
export default AddPorductRoS;
