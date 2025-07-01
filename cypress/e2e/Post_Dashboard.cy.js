import CommonActions from "../Common/Actions";
import DashElements from "../Live_Campaigns/Post_Dashboard/Postdash";
import Transcription from "../Live_Campaigns/Post_Dashboard/Transcription";
describe("Automation test for Livestream post Dashboard", () => {
  let dataSet = {};
  before(() => {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then(function (data) {
        dataSet = data;
      });
  });
  let globalResultTracker = {
    successCount: 0,
    errorCount: 0,
    errorMessages: [],
    stepToReproduces: [],
  };
  const commonAction = new CommonActions();
  commonAction.LoginSession();
  it("Verify the presence and correctness of the elements in Livestreams post dashboard page", () => {
    cy.visit(`${dataSet.livestreamPostDashbordlink}`);
    const dashelement = new DashElements();
    dashelement.dashElements(globalResultTracker);
  });
  it("Validate the functionality Livestream transcriptions", () => {
    cy.visit(`${dataSet.livestreamPostDashbordlink}`);
    const transcriptions = new Transcription();
    transcriptions.transcription(globalResultTracker);
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Livestream Post Dashboard");
  });
});