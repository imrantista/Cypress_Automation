let testData = {};
before(function () {
  cy.fixture("LoginData.json")
    .as("Login_dataset")
    .then(function (data) {
      testData.data = data;
    });
});
Cypress.Commands.add("dashboard", () => {
  let successCount = 0;
  let errorCount = 0;
  let errorMessages = [];
  function checkToastTextAndElementVisibility(
    selector,
    expectedText,
    successMessage,
    errorMessage
  ) {
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
        }
      });
  }
  function dashboardComponent() {
    cy.wait(4000);
    checkToastTextAndElementVisibility(
      ":nth-child(1) > .ml-2 > .text-\\[\\#A3AED0\\]",
      "Total GMV",
      '"Total GMV found in home dashboard"',
      '"Total GMV not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ":nth-child(2) > .ml-2 > .text-\\[\\#A3AED0\\]",
      "Livestream Score (Avg.)",
      '"Livestream Score (Avg.) found in home dashboard"',
      '"Livestream Score (Avg.) not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ":nth-child(3) > .ml-2 > .text-\\[\\#A3AED0\\]",
      "Total Livestreams",
      '"Total Livestreams found in home dashboard"',
      '"Total Livestreams not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ":nth-child(4) > .ml-2 > .text-\\[\\#A3AED0\\]",
      "Frequency (Avg.)",
      '"Frequency (Avg.) found in home dashboard"',
      '"Frequency (Avg.) not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ":nth-child(5) > .ml-2 > .text-\\[\\#A3AED0\\]",
      "Duration (Avg.)",
      '"Duration (Avg.) found in home dashboard"',
      '"Duration (Avg.) not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ":nth-child(6) > .ml-2 > .text-\\[\\#A3AED0\\]",
      "Views (Avg.)",
      '"Views (Avg.) found in home dashboard"',
      '"Views (Avg.) not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ":nth-child(7) > .ml-2 > .text-\\[\\#A3AED0\\]",
      "PCV (Avg.)",
      '"PCV (Avg.) found in home dashboard"',
      '"PCV (Avg.) not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ".justify-between > .font-bold",
      "Revenue",
      '"Revenue Found in home dshboard"',
      '"Revenue not Found in home dshboard"'
    );
    checkToastTextAndElementVisibility(
      ".top-\\[24px\\] > .bg-\\[\\#F4F8FF\\] > div > .text-textDark",
      "Hours Used",
      '"Hours Used found in home dashboard"',
      '"Hours Used not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ".right-\\[180px\\] > .font-montserrat > .flex",
      "Livestream",
      '"Livestream found in home dashboard"',
      '"Livestream not found in home dashboard"'
    );
    function livestreamClick() {
      cy.wait(4000);
      cy.get(".right-\\[180px\\] > .font-montserrat > .flex").click();
      cy.get(".flex-col > .text-\\[18px\\]", { timeout: 10000 }).should(
        "be.visible"
      );
      cy.get(".cursor-pointer > label > .w-20").click();
      cy.wait(4000);
      cy.get(".gap-3 > .text-white").click();
      cy.wait(4000);
      cy.get(
        ".no-bg > .overflow-hidden > .vs-modal-body > .pt-7 > .gap-3 > .text-white"
      ).click();
      cy.wait(4000);
      cy.get(".vs-modal-header-content > .flex > .text-\\[18px\\]").then(
        ($element) => {
          if ($element.is(":visible")) {
            cy.log("Success: Livestream create modal is visible");
            successCount++;
          } else {
            const errorMessage =
              "Error: Unable to open livestream create modal from home dashboard.";
            errorMessages.push(errorMessage);
            errorCount++;
          }
        }
      );
      cy.wait(4000);
      cy.get(".px-\\[38px\\] > .gap-3 > .min-w-\\[101px\\]").click();
      cy.wait(1000);
      cy.get(
        ".no-bg > .overflow-hidden > .vs-modal-body > .pt-7 > .gap-3 > .border-\\[\\#BDD4FF\\]"
      ).click();
      cy.wait(1000);
      cy.get(".gap-3 > .border-\\[\\#BDD4FF\\]").click();
      cy.wait(4000);
    }
    livestreamClick();
    checkToastTextAndElementVisibility(
      ".fc-today-button",
      "Today",
      '"Today found in home dashboard"',
      '"Today not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ".mb-5 > .text-black",
      "Insights",
      '"Insights found in home dashboard"',
      '"Insights not found in home dashboard"'
    );
    checkToastTextAndElementVisibility(
      ".css-1d8n9bt",
      "This Month",
      '"This Month found in home dashboard"',
      '"This Month not found in home dashboard"'
    );
    cy.window().then((win) => {
      const scrollHeight = win.document.body.scrollHeight;
      const scrollPosition = scrollHeight / 2;
      win.scrollTo(0, scrollPosition);
      checkToastTextAndElementVisibility(
        ".bg-\\[\\#F0F5FF\\] > .text-\\[\\#A3AED0\\]",
        "New Followers",
        '"New Followers found in home dashboard"',
        '"New Followers not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".bg-\\[\\#FFE8FF\\] > .text-\\[\\#A3AED0\\]",
        "New Gifts",
        '"New Gifts found in home dashboard"',
        '"New Gifts not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".gap-5",
        "Product",
        '"Product found in home dashboard"',
        '"Product not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".h-\\[388px\\] > .text-black",
        "Insights",
        '"Insights found in home dashboard"',
        '"Insights not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".py-5 > .text-black",
        "Best Sellers",
        '"Best Sellers found in home dashboard"',
        '"Best Sellers not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".w-\\[22\\%\\] > .relative > .false",
        "Name",
        '"Name found in home dashboard"',
        '"Name not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".w-\\[63\\%\\] > .bg-white > .pb-5",
        "Category",
        '"Category found in home dashboard"',
        '"Category not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".w-\\[63\\%\\] > .bg-white > .pb-5",
        "Colour",
        '"Colour found in home dashboard"',
        '"Colour not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".w-\\[63\\%\\] > .bg-white > .pb-5",
        "RRP",
        '"RRP found in home dashboard"',
        '"RRP not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".w-\\[63\\%\\] > .bg-white > .pb-5",
        "Offer Price",
        '"Offer Price found in home dashboard"',
        '"Offer Price not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".w-\\[63\\%\\] > .bg-white > .pb-5",
        "Unit(s) Sold",
        '"Unit(s) Sold found in home dashboard"',
        '"Unit(s) Sold not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".h-\\[388px\\]",
        "",
        '" found in home dashboard"',
        '" not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".h-\\[388px\\]",
        "Total Products",
        '"Total Products found in home dashboard"',
        '"Total Products not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".h-\\[388px\\]",
        "Active Products",
        '"Active Products found in home dashboard"',
        '"Active Products not found in home dashboard"'
      );
      checkToastTextAndElementVisibility(
        ".h-\\[388px\\]",
        "Products with Sales",
        '"Products with Sales found in home dashboard"',
        '"Products with Sales not found in home dashboard"'
      );
      cy.wait(4000)
      cy.get('.py-5 > .font-montserrat').click();
      cy.wait(4000)
      cy.get('.gap-3 > .border-\\[\\#BDD4FF\\]').click()
      cy.log("product create modal is visble");
      cy.wait(4000)
      cy.get(":nth-child(1) > .flex > .pl-7").click();
      cy.get(".vs-btn", { timeout: 10000 }).should("be.visible");
      cy.wait(4000);
      cy.go('back');
      cy.get(":nth-child(3) > .flex-row > .pl-5", { timeout: 10000 }).should("be.visible");
      cy.wait(4000)
      win.scrollTo(0, scrollPosition);
      cy.get(":nth-child(2) > .flex > .pl-7").click()
      cy.get(".vs-btn", { timeout: 10000 }).should("be.visible");
      cy.wait(4000);
      cy.go('back');
      cy.get(".py-\\[22px\\] > :nth-child(1) > .text-black", { timeout: 10000 }).should("be.visible");
    });
    checkToastTextAndElementVisibility(
        ".gap-5",
        "LiveScope",
        '"LiveScope found in home dashboard"',
        '"Livescope not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ".gap-x-3 > :nth-child(1) > div > .text-textDark",
        "Tracked Accounts",
        '"Tracked Accounts found in home dashboard"',
        '"Tracked Accounts not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(2) > div > .text-textDark",
        "Hours Used",
        '"Hours Used found in home dashboard"',
        '"Hours Used not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ".py-\\[22px\\] > :nth-child(1) > .text-black",
        "Latest Livesreams",
        '"Latest Livesreams found in home dashboard"',
        '"Latest Livesreams not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .justify-between > .text-black",
        "Top 5 Accounts",
        '"Top 5 Accounts found in home dashboard"',
        '"Top 5 Accounts not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Name",
        '"Name found in home dashboard"',
        '"Name not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Country",
        '"Country found in home dashboard"',
        '"Country not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Platform",
        '"Platform found in home dashboard"',
        '"Platform not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Followers",
        '"Followers found in home dashboard"',
        '"Followers not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Livestreams",
        '"Livestreams found in home dashboard"',
        '"Livestreams not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Avg Dur",
        '"Avg Dur found in home dashboard"',
        '"Avg Dur not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Avg Views",
        '"Avg Views found in home dashboard"',
        '"Avg Views not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Avg PCV",
        '"Avg PCV found in home dashboard"',
        '"Avg PCV not found in home dashboard"'
    )
    checkToastTextAndElementVisibility(
        ":nth-child(9) > .pb-5",
        "Avg Score",
        '"Avg Score found in home dashboard"',
        '"Avg Score not found in home dashboard"'
    )
    cy.wait(4000)
    cy.get('.justify-between > .h-fit > .font-montserrat').click()
    cy.wait(4000)
    cy.go('back');
    cy.visit(`${testData.data.link}/dashboard`);
  }
  dashboardComponent();

  cy.then(() => {
    cy.log(`Total Success: ${successCount}`);
    cy.log(`Total Errors: ${errorCount}`);
    if (errorMessages.length > 0) {
      cy.log("Errors Details:");
      errorMessages.forEach((error, index) => {
        cy.log(`${index + 1}: ${error}`);
      });
    } else {
      cy.log("All checks passed!");
    }
  });
});