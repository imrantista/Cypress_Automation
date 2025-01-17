import CommonActions from "../Common/Actions";
class EditRoS{
    editRoS(resultTracker){
        const commonAction = new CommonActions()
        cy.wait(4000);
    commonAction.clickElement(".flex-end", "Clear")
    cy.wait(2000);
    cy.get('[data-rbd-draggable-id="0"] > .border').drag(".h-\\[500px\\]");
    cy.wait(6000);
    cy.get('[data-rbd-draggable-id="1"] > .border').drag(
      ".pt-8 > .\\32 xl\\:mb-4"
    );
    cy.wait(6000);
    commonAction.clickElement(".flex-end", "Save")
    cy.wait(4000)
    commonAction.checkToast(
        "Run of Show updated successfully!",
        "Run of Show updated successfully!",
        "Unable to updated Run of Show.",
        "RoS->RoS list page->Click on edit icon->try to edit RoS",
        resultTracker
    )
    }

}
export default EditRoS;