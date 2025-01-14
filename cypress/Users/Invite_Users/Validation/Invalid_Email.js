import CommonActions from "../../../Common/Actions";
class InvalidEmail{
    invalidEmail(resultTracker){
        const commonAction = new CommonActions();
        commonAction.clickElement(".bg-primary > span");
        cy.wait(2000)
        commonAction.checkElementVisibility(
            ":nth-child(1) > .text-xs > span",
            "Invalid email format",
            "Invalid email format",
            "Invalid email format validation not showing or something else",
            "Users->Invite user->Click on Invite button->Try to invited user where email formate is invalid",
            resultTracker
        )

    }
}
export default InvalidEmail;