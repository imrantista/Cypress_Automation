import CommonActions from "../../Common/Actions";
class AccountElements{
    accountElement(resultTracker){
        const commonAction = new CommonActions()
        const elements =[
            {
                selector: ".col-span-1 > .flex-col > .text-\\[12px\\]",
                text: "Organisation Logo",
                descriptions: "Organisation Logo found in account settings tab"
            },
            {
                selector: ".grid > :nth-child(1) > :nth-child(1) > .text-\\[12px\\]",
                text: "Organisation Name",
                descriptions: "Organisation Name found in account settings tab"
            },
            {
                selector: ":nth-child(2) > .text-\\[12px\\]",
                text: "TikTok Username",
                descriptions: "TikTok Username found in account settings tab"
            },
            {
                selector: ":nth-child(3) > .text-\\[12px\\]",
                text: "Account Owner",
                descriptions: "Account Owner found in account settings tab"
            },
            {
                selector: ".mt-\\[24px\\] > .text-\\[12px\\]",
                text: "Country",
                descriptions: "Country found in account settings tab"
            },
            {
                selector: ".mt-\\[32px\\] > .text-\\[12px\\]",
                text: "Default Currency",
                descriptions: "Default Currency found in account settings tab"
            },
            {
                selector: ".mt-\\[17px\\] > .text-\\[12px\\]",
                text: "Display Language",
                descriptions: "Display Language found in account settings tab"
            },
        ]
        elements.forEach((element)=>{
            commonAction.checkElementVisibility(
              element.selector,
              element.text,
              element.descriptions,
              `Error: ${element.text} not found in account settings tab`,
              "Setting->Account Tab",
              resultTracker
            )
        })

    }
}
export default AccountElements;