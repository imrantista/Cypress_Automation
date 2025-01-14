import CommonActions from "../../Common/Actions";
class EmptyValidation{
    Validation(resultTracker){
        const commonAction = new CommonActions();
        commonAction.clickElement(".flex-end", "Save")
        cy.wait(4000)
        commonAction.checkToast(
            "Run of Show is empty. Please add content to proceed",
            "Run of Show is empty. Please add content to proceed",
            "Create RoS without Content",
            "Run of Shows-> List page -> Click on Add new -> Try to Create RoS where content is empty",
            resultTracker
        )

    }
}
export default EmptyValidation;