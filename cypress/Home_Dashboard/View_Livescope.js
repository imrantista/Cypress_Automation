import CommonActions from "../Common/Actions";
class LivescopeView{
    livescopeView(resultTracker){
        const commonAction = new CommonActions()
        cy.window().then((win) => {
            const scrollHeight = win.document.body.scrollHeight;
            win.scrollTo(0, scrollHeight);
            commonAction.clickElement(":nth-child(1) > .pt-2")
            commonAction.itemVisibility(".rounded-l > .py-3 > .text-black")
            commonAction.checkElementVisibility(
                ".rounded-l > .py-3 > .text-black",
                "Audio Transcription",
                "Able to view Livescope from home dashboard",
                "Unable to view Livescope from home dashboard",
                "Dashboard->Click on Livescope video card",
                resultTracker
            )

        })
    }
}
export default LivescopeView;