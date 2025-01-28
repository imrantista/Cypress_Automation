import CommonActions from "../Common/Actions";
import CreateNew from "../Live_Campaigns/Livestreams/Create/New_Livestream";
class AddLivestream{
    addLivestream(resultTracker){
        const commonAction = new CommonActions()
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;
            const scrollPosition = scrollHeight / 2;
            win.scrollTo(0, scrollPosition);
            cy.wait(2000)
            commonAction.clickElement(".right-\\[180px\\] > .font-montserrat")
            commonAction.itemVisibility(".flex-col > .text-\\[18px\\]");
            commonAction.clickElement(".cursor-pointer > label > .w-20");
            commonAction.clickElement(".gap-3 > .text-white")
            commonAction.itemVisibility(":nth-child(2) > .gap-x-4 > label")
            commonAction.clickElement(":nth-child(2) > .gap-x-4 > label")
            commonAction.clickElement(".no-bg > .overflow-hidden > .vs-modal-body > .pt-7 > .gap-3 > .text-white")
            commonAction.itemVisibility(".px-\\[38px\\] > .gap-3 > .text-white");
            const livestreamadd = new CreateNew()
            livestreamadd.createNew(resultTracker)

        })

    }
}
export default AddLivestream;