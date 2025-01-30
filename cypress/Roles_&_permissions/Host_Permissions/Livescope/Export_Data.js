class ExportDataPermissions {
    exportPermissions(resultTracker, dataSet) {
      cy.visit(`${dataSet.link}/livescope`);
      cy.wait(2000);
      const exportButtonSelector =
        ".relative.items-end > .py-2";
      cy.get("body").then(($body) => {
        if ($body.find(exportButtonSelector).length > 0) {
          cy.get(exportButtonSelector)
            .should("be.visible")
            .then(($btn) => {
              if ($btn.length > 0) {
                const errorMessage =
                  "Error: Host able to see livescope account data export button";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Login with host user and try to export livescope account data";
                resultTracker.stepToReproduces.push(stepToReproduce);
                cy.log(errorMessage);
              }
            });
        } else {
          cy.log(
            'Success: "Host not able to see livescope account data export button"'
          );
          resultTracker.successCount++;
        }
      });
    }
  }
  export default ExportDataPermissions;
  