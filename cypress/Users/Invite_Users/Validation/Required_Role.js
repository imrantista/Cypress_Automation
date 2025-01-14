import CommonActions from "../../../Common/Actions";
class RequiredRole{
    requiredRole(resultTracker){
        const commonAction = new CommonActions();
        commonAction.clickElement(".bg-primary > span");
        cy.wait(2000)
        commonAction.checkElementVisibility(
            ":nth-child(2) > .text-xs > span",
            "User role is required.",
            "User role is required.",
            "User role is required. validation not showing or something else",
            "Users->Invite user->Click on Invite button->Try to invited user where role is empty",
            resultTracker
        )

    }
}
export default  RequiredRole;