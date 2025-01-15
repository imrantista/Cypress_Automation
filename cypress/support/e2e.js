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
  cy.get(".vs-btn", { timeout: 50000 }).should("be.visible");
  function checkToastTextAndElementVisibility(
    selector,
    expectedText,
    successMessage,
    errorMessage,
    stepToReproduce
  ) {
    cy.get("body").then(($body) => {
      if ($body.find(selector).length > 0) {
        cy.get(selector)
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes(expectedText)) {
              cy.log(`Success: ${successMessage}`);
              successCount++;
            } else {
              cy.log(`Error: ${errorMessage}`);
              errorMessages.push(errorMessage);
              errorCount++;
              cy.log(`${stepToReproduce}`);
              stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        cy.log(
          `Error: Selector: [${selector}] not found for Element: ${expectedText}`
        );
        errorMessages.push(
          `Selector: [${selector}] not found for Element: ${expectedText}`
        );
        errorCount++;
        cy.log(`${stepToReproduce}`);
        stepToReproduces.push(stepToReproduce);
      }
    });
  }
  cy.wait(4000);
  cy.visit(`${testData.data.link}/run-of-shows`);
  cy.get(".vs-btn", { timeout: 50000 }).should("be.visible");
  //Run of Shows edit
    function rosEditContent() {
      cy.get(
        ":nth-child(1) > .px-4 > :nth-child(1) > .border > .w-1\\/12 > .flex > .text-primaryYellow"
      ).click();
      cy.wait(4000);
      cy.get(":nth-child(2) > .quill > .ql-container > .ql-editor").clear();
      cy.get(":nth-child(2) > .quill > .ql-container > .ql-editor").type(
        "live Commerce Moving to more positive interaction, informed consumption and more meaningful conversati"
      );
      cy.wait(1000);
      cy.get('[name="minutes"]').clear();
      cy.get('[name="minutes"]').type(20); //duration
      cy.get(".gap-3 > .text-white").click();
      cy.wait(4000);
      cy.get("body").then(($body) => {
        if (
          $body.find(
            ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error"
          ).length > 0
        ) {
          cy.get(
            ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error"
          )
            .should("be.visible")
            .then(($element) => {
              if ($element.text().includes("Product updated successfully!")) {
                cy.log('Success: "Product updated successfully!"');
                successCount++;
              } else {
                const errorMessage =
                  "Error: Unable to update product from RoS moderation page!.";
                errorMessages.push(errorMessage);
                errorCount++;
                const stepToReproduce =
                  "RoS->RoS list page->Click on moderation icon icon->moderation page->Click on edit icon->Try to update product";
                stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage =
            "Error: Product updated from RoS moderation page but Toaster not showing or something esle!";
          errorMessages.push(errorMessage);
          errorCount++;
          const stepToReproduce =
            "RoS->RoS list page->Click on moderation icon icon->moderation page->Click on edit icon->Try to update product";
          stepToReproduces.push(stepToReproduce);
        }
      });
      cy.wait(4000);
    }
    rosEditContent();
  cy.visit(`${testData.data.link}/run-of-shows`);
  cy.get(".vs-btn", { timeout: 50000 }).should("be.visible");
  //Edit Ros
  function editRoS() {
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > :nth-child(7) > .flex > .text-primaryYellow > svg"
    ).click();
    cy.wait(4000);
    cy.get(".flex-end").contains("Clear").click();
    cy.wait(2000);
    cy.get('[data-rbd-draggable-id="0"] > .border').drag(".h-\\[500px\\]");
    cy.wait(4000);
    cy.get('[data-rbd-draggable-id="1"] > .border').drag(
      ".pt-8 > .\\32 xl\\:mb-4"
    );
    cy.wait(4000);
    cy.get(".flex-end").contains("Save").click();
    cy.wait(4000);
    cy.get("body").then(($body) => {
      if (
        $body.find(
          ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error"
        ).length > 0
      ) {
        cy.get(
          ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error"
        )
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes("Run of Show updated successfully!")) {
              cy.log("Success: Run of Show updated successfully!");
              successCount++;
            } else {
              const errorMessage = "Error: Unable to updated Run of Show.";
              errorMessages.push(errorMessage);
              errorCount++;
              const stepToReproduce =
                "RoS->RoS list page->Click on edit icon->try to edit RoS";
              stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: RoS updated but toaster not showing or smoething else.";
        errorMessages.push(errorMessage);
        errorCount++;
        const stepToReproduce =
          "RoS->RoS list page->Click on edit icon->try to edit RoS";
        stepToReproduces.push(stepToReproduce);
      }
    });
  }
  editRoS();
  //Search
  function searchRoS() {
    cy.wait(4000);
    cy.get(".py-2").clear();
    cy.get(".py-2").type("Stickler RoS-2");
    cy.wait(4000);
    cy.get(".py-2").clear();
    successCount++
  }
  searchRoS();

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