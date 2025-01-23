let testData = {};
const nodemailer = require("nodemailer");
before(function () {
  cy.fixture("LoginData.json")
    .as("Login_dataset")
    .then(function (data) {
      testData.data = data;
    });
});

Cypress.Commands.add("livestream", () => {
  let successCount = 0;
  let errorCount = 0;
  let errorMessages = [];
  let stepToReproduces = [];
  cy.visit(`${testData.data.link}/live-campaigns?tab=Livestreams`);
  cy.get(".vs-btn", { timeout: 50000 }).should("be.visible");
  //required field validation
  function fieldValidation() {
    cy.wait(4000);
    cy.get("#streamUrl").clear();
    cy.wait(2000);
    cy.get(".px-\\[38px\\] > .gap-3 > .text-white").click();
    checkToastTextAndElementVisibility(
      ":nth-child(1) > .w-full.mb-2 > .text-xs > span",
      "",
      "Livestream name is required.",
      "Error: Livestream name should be required",
      "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button"
    );
    checkToastTextAndElementVisibility(
      "",
      "",
      "Date & time is required.",
      "Error: Date & time should be required",
      "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(1) > :nth-child(3) > .text-xs > span",
      "Livestream duration is required.",
      "Livestream duration is required.",
      "Error: Livestream duration should be required",
      "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(2) > :nth-child(1) > .text-xs > span",
      "Host is required.",
      "Host is required",
      "Error: Host should be required",
      "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(2) > :nth-child(2) > .text-xs > span",
      "Moderator is required.",
      "Moderator is required.",
      "Error: Moderator should be required",
      "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(2) > :nth-child(3) > .text-xs",
      "Language is required.",
      "Language is required.",
      "Error: Language should be required",
      "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button"
    );
    checkToastTextAndElementVisibility(
      ".w-full.mb-2 > .text-xs",
      "Stream URL is required",
      "Stream URL is required.",
      "Error: Stream URL should be required.",
      "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button"
    );
    cy.get(".px-\\[38px\\] > .gap-3 > .min-w-\\[101px\\]").click();
    cy.wait(4000);
    cy.get(".pt-7").contains("Cancel").click();
  }
  fieldValidation();

  //Add new livestream
  function addlivestream() {
    cy.wait(4000);
    cy.get(".vs-btn").click();
    cy.get(".flex-col > .text-\\[18px\\]", { timeout: 50000 }).should(
      "be.visible"
    );
    cy.get(".cursor-pointer > label > .w-20").click();
    cy.wait(4000);
    cy.get(".gap-3 > .text-white").click();
    cy.get(".vs-modal-header-content > .flex", { timeout: 50000 }).should(
      "be.visible"
    );

    const randomString = Math.random().toString(9);
    const newLivestream = `Livestream-${randomString}-Test`;
    cy.get("#name").type(newLivestream);
    cy.get(".react-datepicker__input-container > .h-\\[55px\\]").type(
      `"01/01/2027"{enter}`
    );
    cy.wait(2000);
    cy.get('[name="minutes"]').type(10);
    cy.get(":nth-child(1) > .css-b62m3t-container > .css-ipivbr-control").type(
      `${testData.data.livestreamHost}{enter}`
    );
    cy.wait(2000);
    cy.get(":nth-child(2) > .css-b62m3t-container > .css-ipivbr-control").type(
      `${testData.data.livestreamMod}{enter}`
    );
    cy.wait(2000);
    cy.get(".css-m6f6ft-control").type(`English (US){enter}`);
    cy.wait(2000);
    cy.get(".px-\\[38px\\] > .gap-3 > .text-white").click();
    cy.wait(6000);
    cy.get("body").then(($body) => {
      if (
        $body.find('button[type="submit"]:contains("Continue anyway")').length >
        0
      ) {
        cy.get('button[type="submit"]')
          .contains("Continue anyway")
          .should("be.visible")
          .then(($button) => {
            if ($button.is(":visible")) {
              cy.wrap($button).click();
              LivestreamSaveToaster();
              createROS();
            } else {
              LivestreamSaveToaster();
              createROS();
            }
          });
      } else {
        LivestreamSaveToaster();
        createROS();
      }
    });
    function LivestreamSaveToaster() {
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
              if ($element.text().includes("Livestream saved successfully!")) {
                cy.log('Success: "Livestream saved successfully!"');
                successCount++;
              } else {
                const errorMessage =
                  "Error: Livestream Create but toaster not showing or something else";
                errorMessages.push(errorMessage);
                errorCount++;
                const stepToReproduce =
                  "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Try to create livestream";
                stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage =
            "Error: livestream Create but toaster not showing or something else";
          errorMessages.push(errorMessage);
          errorCount++;
          const stepToReproduce =
            "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Try to create livestream";
          stepToReproduces.push(stepToReproduce);
        }
      });
    }
    function createROS() {
      cy.get(".gap-2 > .vs-btn", { timeout: 50000 }).should("be.visible");
      cy.get('[data-rbd-draggable-id="0"] > .border').drag(".h-\\[500px\\]");
      cy.wait(4000);
      cy.get('[data-rbd-draggable-id="1"] > .border').drag(
        ".pt-8 > .\\32 xl\\:mb-4"
      );
      cy.wait(4000);
      cy.get(".flex-end").contains("Save").should("be.visible").click();
      cy.wait(6000);
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
              if (
                $element.text().includes("Run of Show created successfully!")
              ) {
                cy.log('Success: "Run of Show created successfully!"');
                successCount++;
              } else {
                const errorMessage = "Error: Unable to create Run of Show.";
                errorMessages.push(errorMessage);
                errorCount++;
                const stepToReproduce =
                  "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button->Click on Save button";
                stepToReproduces.push(stepToReproduce);
              }
            });
        } else {
          const errorMessage =
            "Error: Run of Show created but toaster not showing or something else!";
          errorMessages.push(errorMessage);
          errorCount++;
          const stepToReproduce =
            "Live Campaigns->Livestreams->Livestreams list page->Click on Add new button->Livestream create modal->Click on Save & Continue button->Click on Save button";
          stepToReproduces.push(stepToReproduce);
        }
      });
    }
  }
  addlivestream();

  //Livestream duplicate
  function duplicateLivestream() {
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > :nth-child(10) > .flex > .bg-\\[\\#1FC7A9\\]\\/\\[10\\%\\] > svg"
    ).click();
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
            if ($element.text().includes("Livestream copied successfully!")) {
              cy.log('Success: "Livestream copied successfully!"');
              successCount++;
            } else {
              const errorMessage = "Error: Unable to copied livestream";
              errorMessages.push(errorMessage);
              errorCount++;
              const stepToReproduce =
                "Live Campaigns->Livestreams->Livestreams list page->Click on duplicate icon";
              stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const errorMessage =
          "Error: Livesream copied but toaster not showing or something else!";
        errorMessages.push(errorMessage);
        errorCount++;
        const stepToReproduce =
          "Live Campaigns->Livestreams->Livestreams list page->Click on duplicate icon";
        stepToReproduces.push(stepToReproduce);
      }
    });
  }
  duplicateLivestream();
  //Livestream delete
  function livestreamDelete() {
    cy.get(".select-none > .relative").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .css-b62m3t-container > .css-1avjah2-control").type(
      `Scheduled{enter}`
    );
    cy.get(".py-3").click();
    cy.wait(6000);
    cy.get(":nth-child(1) > :nth-child(10) > .flex > .text-primaryRed").click();
    cy.wait(4000);
    cy.get(".gap-3 > .text-white")
      .should("be.visible")
      .then(($button) => {
        if ($button.is(":visible")) {
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
                  if (
                    $element.text().includes("Livestream deleted successfully!")
                  ) {
                    cy.log('Success: "Livestream deleted successfully!"');
                    successCount++;
                  } else {
                    const errorMessage = "Error: Unable to deleted livestream";
                    errorMessages.push(errorMessage);
                    errorCount++;
                    const stepToReproduce =
                      "Live Campaigns->Livestreams->Livestreams list page->Click on delete icon";
                    stepToReproduces.push(stepToReproduce);
                  }
                });
            } else {
              const errorMessage =
                "Error: Livesream deleted but toaster not showing or something else!";
              errorMessages.push(errorMessage);
              errorCount++;
              const stepToReproduce =
                "Live Campaigns->Livestreams->Livestreams list page->Click on delete icon->Click on delete button";
              stepToReproduces.push(stepToReproduce);
            }
          });
        } else {
          const errorMessage =
            "Livestream delete Confirmation button not visible!";
          errorMessages.push(errorMessage);
          errorCount++;
          const stepToReproduce =
            "Live Campaigns->Livestreams->Livestreams list page->Click on delete icon";
          stepToReproduces.push(stepToReproduce);
        }
      });
  }
  livestreamDelete();
  //Livestream view
  function livestreamView() {
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > :nth-child(10) > .flex > .bg-primary\\/\\[5\\%\\] > svg"
    ).click();
    cy.get(".bg-primary > .text-white", { timeout: 50000 }).should(
      "be.visible"
    );
    cy.wait(4000);
    checkToastTextAndElementVisibility(
      ".justify-end > .py-1\\.5 > .text-\\[10px\\]",
      "Start Time",
      "Start Time found in Live-monitor page",
      "Error: Start Time not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".space-x-2 > .py-1\\.5 > .text-\\[10px\\]",
      "Live Duration",
      "Live Duration found in Live-monitor page",
      "Error: Live Duration not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".flex-col.py-1\\.5 > :nth-child(1)",
      "Host(s)",
      "Host(s) found in Live-monitor page",
      "Error: Host(s) not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".flex-col.py-1\\.5 > :nth-child(2)",
      "Moderator(s)",
      "Moderator(s) found in Live-monitor page",
      "Error: Moderator(s) not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".\\32 xl\\:w-\\[80\\%\\] > :nth-child(1)",
      "Platform",
      "Platform found in Live-monitor page",
      "Error: Platform not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".\\32 xl\\:w-\\[80\\%\\] > :nth-child(2) > .whitespace-nowrap",
      "Stream URL",
      "Stream URL found in Live-monitor page",
      "Error: Stream URL not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".w-\\[75px\\] > .text-center",
      "Connect",
      "Connect found in Live-monitor page",
      "Error: Connect not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(2) > .text-sm > :nth-child(1)",
      "Products",
      "Products found in Live-monitor page",
      "Error: Products not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(2) > .text-sm > :nth-child(2)",
      "Assets",
      "Assets found in Live-monitor page",
      "Error: Assets not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(3) > .bg-white > .font-\\[700\\]",
      "Stream Activity Feed",
      "Stream Activity Feed found in Live-monitor page",
      "Error: Stream Activity Feed not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(3) > .bg-white > .flex",
      "No event found yet",
      "No event found yet found in Live-monitor page",
      "Error: No event found yet not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".h-\\[858px\\] > .font-\\[700\\]",
      "Viewer Comments",
      "Viewer Comments found in Live-monitor page",
      "Error: Viewer Comments not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".h-\\[858px\\] > .flex",
      "No comments yet",
      "No comments yet found in Live-monitor page",
      "error: No comments yet not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".w-\\[81px\\]",
      "Send",
      "Send found in Live-monitor page",
      "Error: Send not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".w-\\[470px\\] > .text-sm > :nth-child(1)",
      "Speed",
      "Speed found in Live-monitor page",
      "Error: Speed not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".bg-primary > .text-white",
      "Run of Show",
      "Run of Show found in Live-monitor page",
      "Error: Run of Show not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(1) > :nth-child(1) > .font-medium",
      "Revenue",
      "Revenue found in Live-monitor page",
      "Error: Revenue not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".rounded-\\[10px\\] > :nth-child(1) > :nth-child(2) > .font-medium",
      "Orders",
      "Order found in Live-monitor page",
      "Error: Order not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(1) > :nth-child(3) > .font-medium",
      "Views",
      "Views found in Live-monitor page",
      "Error: Views not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(1) > :nth-child(4) > .font-medium",
      "Unique Viewers",
      "Unique Viewers found in Live-monitor page",
      "Error: Unique Viewers not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(1) > :nth-child(5) > .font-medium",
      "Comments",
      "Comments found in Live-monitor page",
      "error: Comments not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(1) > :nth-child(6) > .font-medium",
      "Shares",
      "Shares found in Live-monitor page",
      "Error: Shares not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ".rounded-\\[10px\\] > :nth-child(3) > :nth-child(1) > .font-medium",
      "GPM",
      "GPM found in Live-monitor page",
      "Error: GPM not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(3) > :nth-child(2) > .font-medium",
      "Unit(s) Sold",
      "Unit(s) Sold found in Live-monitor page",
      "Error: Unit(s) Sold not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(3) > :nth-child(3) > .font-medium",
      "Peak Concurrent Viewers",
      "Peak Concurrent Viewers found in Live-monitor page",
      "error: Peak Concurrent Viewers not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(3) > :nth-child(4) > .font-medium",
      "New Follows",
      "New Follows found in Live-monitor page",
      "Error: New Follows not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(3) > :nth-child(5) > .font-medium",
      "Likes",
      "Likes found in Live-monitor page",
      "Error: Likes not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
    checkToastTextAndElementVisibility(
      ":nth-child(3) > :nth-child(6) > .font-medium",
      "Gifts",
      "Gifts found in Live-monitor page",
      "Error: Gifts not found in Live-monitor page",
      "Live Campaigns->Livestreams->Livestreams list page->Click on view icon"
    );
  }
  livestreamView();
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
       <h3>Module Name: Livestreams </h3>
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
       <h3>Module Name: Livestreams </h3>
       <p>Total Number of Cases= ${totalCases}</p>
       <p>Total Success= ${successCount}</p>
       <h3><span style="color:#228B22;">All checks passed!</span></h3>
      `;
      cy.task("sendEmail", { emailHtml: htmlString });
    }
  });
});