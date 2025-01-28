import CommonActions from "../Common/Actions";
import NewAccount from "../Livescope/Add_New_Account/New_Account";
class AddLivescopeAccount{
    addLivescopeaccount(resultTracker){
        const commonAction = new CommonActions()
        cy.wait(2000)
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;
            win.scrollTo(0, scrollHeight);
            commonAction.clickElement(".justify-between > .h-fit > .font-montserrat")
            const addaccount = new NewAccount()
            addaccount.newAccount(resultTracker)
        });

    }
}
export default AddLivescopeAccount;