class CommonActions {
  //Login_session
  LoginSession() {
    beforeEach(function () {
      cy.fixture("LoginData.json")
        .as("dataset")
        .then((dataSet) => {
          cy.session("user-session", () => {
            cy.visit(`${dataSet.link}/auth/login`);
            cy.get('input[name="username"]').clear().type(dataSet.useremail);
            cy.get('input[name="password"]').clear().type(dataSet.password);
            cy.get('button[type="submit"]').click();
            cy.get('[href="/live-campaigns"] > .text-primary').should("be.visible");
          });
        });
    });
  }
  //Host_Login_Session
  HostLoginSession() {
    beforeEach(function () {
      cy.fixture("LoginData.json").then((dataSet) => {
        cy.session("host-user-session", () => {
          cy.visit(`${dataSet.link}/auth/login`);
          cy.get('input[name="username"]').clear().type(dataSet.hostuser);
          cy.get('input[name="password"]').clear().type(dataSet.password);
          cy.get('button[type="submit"]').click();
          cy.get('[href="/live-campaigns"] > .text-primary').should("be.visible");
          cy.wait(2000);
        });
      });
    });
  }
  //Result send via email
  logResults(resultTracker, moduleName) {
    let totalCases = resultTracker.successCount + resultTracker.errorCount;
    cy.log(`Total Number of Cases: ${totalCases}`);
    cy.log(`Total Success: ${resultTracker.successCount}`);

    if (resultTracker.errorMessages.length > 0) {
      cy.log(`Total Errors: ${resultTracker.errorCount}`);
      let formattedErrorMessages = resultTracker.errorMessages
        .map(
          (error, index) =>
            `${
              index + 1
            }. ${error} <br> <span style="color:#22228B;">#Step to Reproduce</span>: ${
              resultTracker.stepToReproduces[index]
            }`
        )
        .join("<br>");
      let htmlString = `
          <h3>Module Name: ${moduleName}</h3>
          <p>Total Number of Test: ${totalCases}</p>
          <p>Total Success: ${resultTracker.successCount}</p>
          <p>Total Errors: ${resultTracker.errorCount}</p>
          <h3>Error Details</h3>
          <p>${formattedErrorMessages}</p>
        `;
      resultTracker.errorMessages.forEach((error, index) => {
        cy.log(`Error ${index + 1}: ${error}`);
        cy.log(
          `Step to Reproduce for Error ${index + 1}: ${
            resultTracker.stepToReproduces[index]
          }`
        );
      });
      //cy.task("sendEmail", { emailHtml: htmlString });
    } else {
      cy.log("All checks passed!");
      let htmlString = `
          <h3>Module Name: ${moduleName}</h3>
          <p>Total Number of Test: ${totalCases}</p>
          <p>Total Success: ${resultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
     // cy.task("sendEmail", { emailHtml: htmlString });
    }
  }
  //Click function
  clickElement(selector, text = null) {
    if (text) {
      cy.get(selector).contains(text).click();
    } else {
      cy.get(selector).click();
    }
  }
  //type Function
  selectAndType(selector, value) {
    cy.get(selector).type(`${value}`);
  }
  //Clear Function
  clearElement(selector) {
    cy.get(selector).clear();
  }
  //waiting for item visible
  itemVisibility(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should("be.visible");
}
  //Element check function
  checkElementVisibility(
    selector,
    expectedText,
    successMessage,
    errorMessage,
    stepToReproduce,
    resultTracker
  ) {
    cy.get("body").then(($body) => {
      if ($body.find(selector).length > 0) {
        cy.get(selector)
          .should("be.visible")
          .then(($element) => {
            if ($element.text().includes(expectedText)) {
              cy.log(`Success: ${successMessage}`);
              resultTracker.successCount++;
            } else {
              cy.log(`Error: ${errorMessage}`);
              resultTracker.errorMessages.push(errorMessage);
              resultTracker.errorCount++;
              cy.log(`${stepToReproduce}`);
              resultTracker.stepToReproduces.push(stepToReproduce);
            }
          });
      } else {
        const notFoundMessage = `Selector: ${selector} not found for Element: ${expectedText}`;
        cy.log(`Error: ${notFoundMessage}`);
        resultTracker.errorMessages.push(notFoundMessage);
        resultTracker.errorCount++;
        cy.log(`${stepToReproduce}`);
        resultTracker.stepToReproduces.push(stepToReproduce);
      }
    });
  }
  //Toaster check function
  logResult(
    isSuccess,
    successMessage,
    errorMessage,
    stepToReproduce,
    resultTracker
  ) {
    if (isSuccess) {
      cy.log(`Success: ${successMessage}`);
      resultTracker.successCount++;
    } else {
      cy.log(`Error: ${errorMessage}`);
      cy.log(`Step to reproduce: ${stepToReproduce}`);
      resultTracker.errorMessages.push(errorMessage);
      resultTracker.stepToReproduces.push(stepToReproduce);
      resultTracker.errorCount++;
    }
  }
  checkToast(
    expectedText,
    successMessage,
    errorMessage,
    stepToReproduce,
    resultTracker
  ) {
    cy.get("body").then(($body) => {
      const toastSelector =
        ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error";

      if ($body.find(toastSelector).length > 0) {
        cy.get(toastSelector)
          .should("be.visible")
          .then(($element) => {
            const isSuccess = $element.text().includes(expectedText);
            this.logResult(
              isSuccess,
              successMessage,
              errorMessage,
              stepToReproduce,
              resultTracker
            );
          });
      } else {
        this.logResult(
          false,
          "",
          `${expectedText} but Toaster not visible or something else`,
          stepToReproduce,
          resultTracker
        );
      }
    });
  }
  //Visite product create modal
  visitProductCreateModal() {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then((data) => {
        const dataSet = data;
        cy.visit(`${dataSet.link}/products-and-assets?tab=Products`);
        this.itemVisibility(".vs-btn");
        this.clickElement(".vs-btn");
        this.itemVisibility(".vs-modal-header-content");
        this.clickElement(".vs-modal-header-content", "Add");
        this.itemVisibility(":nth-child(1) > .inline-flex");
      });
  }
  //vivsite asset create modal
  visitAssetCreateModal() {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then((data) => {
        const dataSet = data;
        cy.visit(`${dataSet.link}/products-and-assets?tab=Assets`);
        this.itemVisibility(".vs-btn");
        this.clickElement(".vs-btn");
      });
  }
  //Visit Livecsope Add user modal
  visiLivescopeAddAccount() {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then((data) => {
        const dataSet = data;
        cy.visit(`${dataSet.link}/livescope`);
        this.itemVisibility(".vs-btn");
        this.clickElement(".vs-btn");
        cy.wait(4000);
      });
  }
  //Visit Run of Shows create page
  visitRoSCraetepage() {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then((data) => {
        const dataSet = data;
        cy.visit(`${dataSet.link}/run-of-shows`);
        this.itemVisibility(".vs-btn");
        this.clickElement(".vs-btn");
        this.itemVisibility(".gap-2 > .vs-btn");
      });
  }
  //visit livestream create modal
  visitLivestreamCreateModal() {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then((data) => {
        const dataSet = data;
        cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
        this.itemVisibility(".vs-btn");
        this.clickElement(".vs-btn");
        this.itemVisibility(".flex-col > .text-\\[18px\\]");
        this.clickElement(".cursor-pointer > label > .w-20");
        cy.wait(4000);
        this.clickElement(".gap-3 > .text-white");
        this.itemVisibility(".vs-modal-header-content > .flex");
      });
  }
  //visit campaign create modal
  visitCampaignCreateModal() {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then((data) => {
        const dataSet = data;
        cy.visit(`${dataSet.link}/live-campaigns?tab=Campaigns`);
        this.itemVisibility(".vs-btn");
        this.clickElement(".vs-btn");
        this.clickElement(".cursor-pointer > label > .w-20");
        cy.wait(2000);
        this.clickElement(".gap-3 > .text-white");
        cy.wait(2000);
        this.clickElement(":nth-child(3) > .gap-x-4 > label > .w-20");
        cy.wait(2000);
        this.clickElement(
          ".no-bg > .overflow-hidden > .vs-modal-body > .pt-7 > .gap-3 > .text-white"
        );
        this.itemVisibility(".overflow-hidden > .pt-7 > .gap-3 > .text-white");
      });
  }
  //visitLivesteamPostDash
  /*visitLivesteamPostDash() {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then((data) => {
        const dataSet = data;
        cy.visit(`${dataSet.link}/live-campaigns?tab=Livestreams`);
        this.itemVisibility(".vs-btn");
        this.clickElement(".select-none > .relative");
        cy.wait(2000);
        this.selectAndType(
          ":nth-child(1) > .css-b62m3t-container > .css-1avjah2-control",
          `TikTok{enter}`
        );
        this.selectAndType(
          ":nth-child(2) > .css-b62m3t-container > .css-1avjah2-control",
          `Completed{enter}`
        );
        this.clickElement(".py-3");
        cy.wait(4000);
        this.clickElement(
          ":nth-child(1) > :nth-child(10) > .flex > .bg-primary\\/\\[5\\%\\] > svg"
        );
        this.itemVisibility(".mb-4 > .items-center > .text-black");
        cy.wait(4000);
      });
  }*/
  //wait for Toast
  waitFOrtoast(timeout = 4000) {
    cy.get(
      ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error",
      { timeout }
    ).should("be.visible");
  }
}
export default CommonActions;
