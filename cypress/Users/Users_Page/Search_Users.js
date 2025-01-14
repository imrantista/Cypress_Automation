import CommonActions from "../../Common/Actions";
class SearchUsers{
   searchUsers(resultTracker){
    const commonAction = new CommonActions();
    commonAction.clearElement('input[type="text"].py-2');
    commonAction.selectAndType('input[type="text"].py-2', "Imran")
    resultTracker.successCount++;
   }
}
export default SearchUsers;