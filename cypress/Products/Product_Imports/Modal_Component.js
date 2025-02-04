import CommonActions from "../../Common/Actions";
class ImportModal{
    importModal(resultTracker){
        const commonAction = new CommonActions ()
        const elements =[
            {
                selector: ".vs-modal-body > :nth-child(1) > .mb-6 > .items-end > .relative > .mb-3",
                text: "Search",
                description: "Search found in product import modal",
            },
            {
                selector: ".gap-x-4 > :nth-child(2) > .mb-3",
                text: "Platform",
                description: "Platform found in product import modal",
            },
            {
                selector: ":nth-child(3) > .mb-3",
                text: "Status",
                description: "Status found in product import modal",
            },
            {
                selector: ":nth-child(4) > .text-\\[12px\\]",
                text: "Default Duration",
                description: "Default Duration found in product import modal",
            },
            {
                selector: ".w-\\[20\\%\\] > .relative",
                text: "Name",
                description: "Name found in product import modal",
            },
            {
                selector: ".min-w-\\[140px\\] > .relative",
                text: "Category",
                description: "Category found in product import modal",
            },

             {
                selector: ".h-\\[300px\\] > .pb-4 > .w-full > .text-\\[\\#2A3236\\] > .bg-\\[\\#EDF3FF\\] > :nth-child(4) > .relative",
                text: "Colour",
                description: "Colour found in product import modal",
            },
            {
                selector: ".w-\\[12\\%\\] > .relative",
                text: "SKU",
                description: "SKU found in product import modal",
            },
            {
                selector: ".h-\\[300px\\] > .pb-4 > .w-full > .text-\\[\\#2A3236\\] > .bg-\\[\\#EDF3FF\\] > .w-\\[8\\%\\] > .relative",
                text: "RRP",
                description: "RRP found in product import modal",
            },
            {
                selector: ".h-\\[300px\\] > .pb-4 > .w-full > .text-\\[\\#2A3236\\] > .bg-\\[\\#EDF3FF\\]  > :nth-child(7) > .relative",
                text: "Offer Price",
                description: "Offer Price found in product import modal",
            },
            {
                selector: ".h-\\[300px\\] > .pb-4 > .w-full > .text-\\[\\#2A3236\\] > .bg-\\[\\#EDF3FF\\]  > :nth-child(8) > .relative",
                text: "Quantity",
                description: "Quantity found in product import modal",
            },
            {
                selector: ".w-\\[15\\%\\].min-w-\\[130px\\] > .relative",
                text: "Duration",
                description: "Duration found in product import modal",
            },
            {
                selector: ".min-w-\\[110px\\] > .relative",
                text: "Status",
                description: "Status found in product import modal",
            }, 
        ]
        elements.forEach((element)=>{
            commonAction.checkElementVisibility(
                element.selector,
                element.text,
                element.description,
                `Error: ${element.text} not found in product import modal`,
                "Product->Click on Add new button->Import modal will open",
                resultTracker
            )
        })

    }
}
export default ImportModal;