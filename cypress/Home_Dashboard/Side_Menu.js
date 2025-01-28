import CommonActions from "../Common/Actions";
class SideMenuEelemnt{
    seidMenu(resultTracker){
        const commonAction = new CommonActions();
        const elements =[
            {
                selector: ":nth-child(1) > .flex-row > .pl-5",
                text: "Dashboard",
                description: "Dashboard found in side menu bar"
            },
            {
                selector: ":nth-child(2) > .flex-row > .pl-5",
                text: "Live Campaigns",
                description: "Live Campaigns found in side menu bar"
            },
            {
                selector: ":nth-child(3) > .flex-row > .pl-5",
                text: "Run of Shows",
                description: "Run of Shows found in side menu bar"
            },
            {
                selector: ":nth-child(4) > .flex-row > .pl-5",
                text: "Products & Assets",
                description: "Products & Assets found in side menu bar"
            },
            {
                selector: ":nth-child(5) > .flex-row > .pl-5",
                text: "LiveScope",
                description: "LiveScope found in side menu bar"
            },
            {
                selector: ":nth-child(6) > .flex-row > .pl-5",
                text: "Users",
                description: "Users found in side menu bar"
            },
        ]
        elements.forEach((element)=>{
            commonAction.checkElementVisibility(
                element.selector,
                element.text,
                element.description,
                `Error" ${element.text} not found in side menu bar`,
                "Check side mune bar elements",
                resultTracker
            )
        })
    }
}
export default SideMenuEelemnt;