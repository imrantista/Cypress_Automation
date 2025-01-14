import CommonActions from "../../Common/Actions";
class SearchInviteUsers{
    searchUsers(resultTracker){
        const commonAction = new CommonActions();
        commonAction.clearElement('input[type="text"].py-2')
        commonAction.selectAndType('input[type="text"].py-2', "Imran")
        cy.wait(2000)
        resultTracker.successCount++;
    }
}
export default SearchInviteUsers;