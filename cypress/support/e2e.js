let testData = {};
import "@4tw/cypress-drag-drop";
const nodemailer = require("nodemailer");
before(function () {
  cy.fixture("LoginData.json")
    .as("Login_dataset")
    .then(function (data) {
      testData.data = data;
    });
});
Cypress.Commands.add("ros", () => {
  let successCount = 0;
  let errorCount = 0;
  let errorMessages = [];
  let stepToReproduces = [];
  cy.visit(`${testData.data.link}/run-of-shows`);
  //RoS moderation
  function moderationRoS() {
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > :nth-child(7) > .flex > .bg-\\[\\#FF00FF\\]\\/\\[10\\%\\] > svg"
    ).click();
    cy.get(".border-b > .text-sm", { timeout: 50000 }).should("be.visible");
    cy.wait(4000);
    successCount++
    cy.visit(`${testData.data.link}/run-of-shows`);
    cy.get(".vs-btn", { timeout: 50000 }).should("be.visible");
  }
  moderationRoS();
  cy.then(() => {
    let totalCases = successCount + errorCount;
    cy.log(`Total Number of Cases: ${totalCases}`);
    cy.log(`Total Success: ${successCount}`);
    if (errorMessages.length > 0) {
      cy.log(`Total Errors: ${errorCount}`);
      let formattedErrorMessages = errorMessages
        .map(
          (error, index) =>
            `${
              index + 1
            }. ${error} <br> <span style="color:#22228B;">#Step to Reproduce</span>: ${
              stepToReproduces[index]
            }`
        )
        .join("<br>");
      let htmlString = `
       <h3>Module Name: Run of Shows</h3>
       <p>Total Number of Cases= ${totalCases}</p>
       <p>Total Success= ${successCount}</p>
       <p>Total Errors= ${errorCount}</p>
       <h3>Error Details</h3>
       <p>${formattedErrorMessages}</p>
      `;
      errorMessages.forEach((error, index) => {
        cy.log(`Error ${index + 1}: ${error}`);
        cy.log(
          `Step to Reproduce for Error ${index + 1}: ${stepToReproduces[index]}`
        );
      });
      cy.task("sendEmail", { emailHtml: htmlString });
    } else {
      cy.log("All checks passed!");
      let htmlString = `
       <h3>Module Name: Run of Shows</h3>
       <p>Total Number of Cases= ${totalCases}</p>
       <p>Total Success= ${successCount}</p>
       <h3><span style="color:#228B22;">All checks passed!</span></h3>
      `;
      cy.task("sendEmail", { emailHtml: htmlString });
    }
  });
});