import CommonActions from "../../../Common/Actions";
class RequiredEmail{
    requiredEmail(resultTracker){
        const commonAction = new CommonActions();
        commonAction.clickElement(".bg-primary > span");
        cy.wait(2000)
        commonAction.checkElementVisibility(
            ":nth-child(1) > .text-xs > span",
            "User email is required.",
            "User email is required.",
            "User email is required. validation not showing or something else",
            "Users->Invite user->Click on Invite button->Try to invited user where email is empty",
            resultTracker
        )

    }
}
export default  RequiredEmail;