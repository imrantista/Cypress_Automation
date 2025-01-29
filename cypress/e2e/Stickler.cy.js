//import "./Login.cy";
//import "./Products.cy";
import "./Assets.cy";
import "./RoS.cy";
//import "./Users.cy";
//import "./Livescope.cy";
//import "./Livestreams.cy";
//import "./Post_Dashboard.cy";
//import "./Home_Dashboard.cy"
let globalResultTracker = {
    successCount: 0,
    errorCount: 0,
    errorMessages: [],
    stepToReproduces: [],
  };
  after(() => {
    cy.then(() => {
      let totalCases =
        globalResultTracker.successCount + globalResultTracker.errorCount;
      cy.log(`Total Number of Cases: ${totalCases}`);
      cy.log(`Total Success: ${globalResultTracker.successCount}`);
      if (globalResultTracker.errorMessages.length > 0) {
        cy.log(`Total Errors: ${globalResultTracker.errorCount}`);
        let formattedErrorMessages = globalResultTracker.errorMessages
          .map(
            (error, index) =>
              `${
                index + 1
              }. ${error} <br> <span style="color:#22228B;">#Step to Reproduce</span>: ${
                globalResultTracker.stepToReproduces[index]
              }`
          )
          .join("<br>");
        let htmlString = `
          <h3>Automation test result for Stickler</h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <p>Total Errors: ${globalResultTracker.errorCount}</p>
          <h3>Error Details</h3>
          <p>${formattedErrorMessages}</p>
        `;
        globalResultTracker.errorMessages.forEach((error, index) => {
          cy.log(`Error ${index + 1}: ${error}`);
          cy.log(
            `Step to Reproduce for Error ${index + 1}: ${
              globalResultTracker.stepToReproduces[index]
            }`
          );
        });
        cy.task("sendEmail", { emailHtml: htmlString });
      } else {
        cy.log("All checks passed!");
        let htmlString = `
          <h3>Automation test result for Stickler</h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
        cy.task("sendEmail", { emailHtml: htmlString });
      }
    });
  });
