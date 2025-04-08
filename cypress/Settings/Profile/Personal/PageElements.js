import CommonActions from "../../../Common/Actions";
class PersonalPage{
    personalPage(resultTracker){
        const commonAction = new CommonActions()
        commonAction.clickElement(".mb-3 > .flex > :nth-child(2) > .font-semibold")
        commonAction.itemVisibility(":nth-child(2) > .flex-1 > .gap-y-3 > :nth-child(1) > .text-base")
        const elements=[
            {
                selector: ".w-\\[100px\\] > .bg-primary",
                text: "Personal",
                description: "Personal found in Personal info page"
            },
            {
                selector: ".text-\\[18px\\]",
                text: "Bio",
                description: "Bio found in Personal info page"
            },
            {
                selector: ":nth-child(2) > .flex-1 > .gap-y-3 > :nth-child(1) > .text-base",
                text: "Personal Information",
                description: "Personal Information found in Personal info page"
            },
            {
                selector: ":nth-child(2) > .flex-1 > .gap-y-3 > .grid > :nth-child(1) > .flex > .text-sm",
                text: "First Name",
                description: "First Name found in Personal info page"
            },
            {
                selector: ":nth-child(2) > .flex-1 > .gap-y-3 > .grid > :nth-child(2) > .flex > .text-sm",
                text: "Last Name",
                description: "Last Name found in Personal info page"
            },
            {
                selector: ":nth-child(2) > .flex-1 > .gap-y-3 > .grid > :nth-child(3) > .flex > .text-sm",
                text: "Date of Birth",
                description: "Date of Birth found in Personal info page"
            },
            {
                selector: ":nth-child(2) > .flex-1 > .gap-y-3 > .grid > :nth-child(4) > .flex > .text-sm",
                text: "Phone",
                description: "Phone found in Personal info page"
            },
            {
                selector: ".xl\\:col-span-2 > .flex > .text-sm",
                text: "Email Address",
                description: "Email Address found in Personal info page"
            },
            {
                selector: ":nth-child(3) > .flex-1 > .gap-y-3 > :nth-child(1) > .text-base",
                text: "Address",
                description: "Address found in Personal info page"
            },
            {
                selector: ":nth-child(3) > .flex-1 > .gap-y-3 > .grid > :nth-child(1) > .flex > .text-sm",
                text: "Address 1",
                description: "Address 1 found in Personal info page"
            },
            {
                selector: ":nth-child(3) > .flex-1 > .gap-y-3 > .grid > :nth-child(2) > .flex > .text-sm",
                text: "Address 2",
                description: "Address 2 found in Personal info page"
            },
            {
                selector: ":nth-child(3) > .flex-1 > .gap-y-3 > .grid > :nth-child(3) > .flex > .text-sm",
                text: "Country",
                description: "Country found in Personal info page"
            },
            {
                selector: ":nth-child(3) > .flex-1 > .gap-y-3 > .grid > :nth-child(4) > .flex > .text-sm",
                text: "City/State",
                description: "City/State found in Personal info page"
            },
            {
                selector: ":nth-child(3) > .flex-1 > .gap-y-3 > .grid > :nth-child(5) > .flex > .text-sm",
                text: "Post Code",
                description: "Post Code found in Personal info page"
            },
            {
                selector: ":nth-child(6) > .flex > .text-sm",
                text: "TAX ID",
                description: "TAX ID found in Personal info page"
            },
        ]
        elements.forEach((element)=>{
            commonAction.checkElementVisibility(
                element.selector,
                element.text,
                element.description,
                `Error: ${element.text} not found in Personal info page`,
                "Settings->My profile->Personal info",
                resultTracker
            )
        })

    }
}
export default PersonalPage;