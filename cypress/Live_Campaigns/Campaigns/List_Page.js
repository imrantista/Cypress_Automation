import CommonActions from "../../Common/Actions";
class CampaingListPage{
    listPage(resultTracker){
        const commonAction = new CommonActions();
        const elements =[
            {
                selector: ".w-\\[15\\%\\] > .relative",
                text: "Name",
                description: "Name found in Campaign list page header"
            },
            {
                selector: ".bg-\\[\\#EDF3FF\\] > :nth-child(3) > .relative",
                text: "Start Date",
                description: "Start Date found in Campaign list page header"
            },
            {
                selector: ".min-w-\\[120px\\] > .relative",
                text: "End Date",
                description: "End Date found in Campaign list page header"
            },
            {
                selector: ".w-\\[8\\%\\] > .relative",
                text: "Platform",
                description: "Platform found in Campaign list page header"
            },
            {
                selector: ".w-\\[20\\%\\] > .relative",
                text: "Tag(s)",
                description: "Tag(s) found in Campaign list page header"
            },
            {
                selector: ".w-\\[12\\%\\] > .relative",
                text: "Status",
                description: "Status found in Campaign list page header"
            },
            {
                selector: ".w-\\[9\\%\\] > .relative",
                text: "Livestreams",
                description: "Livestreams found in Campaign list page header"
            },
            {
                selector: ":nth-child(9) > .relative",
                text: "Revenue",
                description: "Revenue found in Campaign list page header"
            },
            {
                selector: ".min-w-\\[150px\\] > .relative > .false",
                text: "Action",
                description: "Action found in Campaign list page header"
            },
            {
                selector: "div > .text-textDark",
                text: "Hours Used",
                description: "Hours Used found in Campaign list page header"
            },
            {
                selector: ".relative > .mb-3",
                text: "Search",
                description: " found in Campaign list page header"
            },
        ]
        elements.forEach((element)=>{
            commonAction.checkElementVisibility(
                element.selector,
                element.text,
                element.description,
                `Error: ${element.text} not found in Campaign list page header`,
                "Live Campaign->Campaing",
                resultTracker

            )
        })

    }
}
export default CampaingListPage;