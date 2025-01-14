import CommonActions from "../Common/Actions";
class LivescopeTranscription {
  livescopeTranscription(resultTracker) {
    const commonAction = new CommonActions();
    cy.wait(4000);
    commonAction.clickElement(":nth-child(12) > .flex > .text-primary");
    commonAction.itemVisibility(".mt-10 > .grid > :nth-child(1)");
    commonAction.clickElement(".mt-10 > .grid > :nth-child(1)");
    commonAction.itemVisibility(".mb-4 > .items-center > .text-black");
    cy.get(".rounded-l > .flex-wrap , :nth-child(2) > .absolute")
      .should("be.visible")
      .then(($element) => {
        if (
          !$element
            .text()
            .includes("Use your remaining hours to transcribe this video")
        ) {
          cy.log('Success: "Transcription is visible"');
          resultTracker.successCount++;
        } else {
          cy.get(":nth-child(2) > .absolute")
            .should("be.visible")
            .then(($innerElement) => {
              if (
                $innerElement
                  .text()
                  .includes("Use your remaining hours to transcribe this")
              ) {
                cy.log(
                  'Success: "Card contains Use your remaining hours to transcribe this video."'
                );
                resultTracker.successCount++;
              } else {
                const errorMessage =
                  "Card does not contain Use your remaining hours to transcribe this video.";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
              }
              if ($innerElement.text().includes("Transcribe On-Demand")) {
                cy.log('Success: "Card contains on-demand button."');
                resultTracker.successCount++;
                cy.get(".inline-flex").click();
                cy.wait(4000);
                cy.get(
                  ".Toastify__toast.Toastify__toast--success, .Toastify__toast.Toastify__toast--error"
                )
                  .should("be.visible")
                  .then(($toastElement) => {
                    const toastText = $toastElement.text();
                    if (
                      toastText.includes(
                        "Transcription request sent successfully!"
                      )
                    ) {
                      cy.log(
                        'Success: "Transcription request sent successfully!"'
                      );
                      resultTracker.successCount++;
                      cy.get(":nth-child(2) > .absolute")
                        .should("be.visible")
                        .then(($finalElement) => {
                          if (
                            $finalElement
                              .text()
                              .includes(
                                "You will be notified by email when the transcription is ready"
                              )
                          ) {
                            cy.log(
                              'Success: "Card contains You will be notified by email when the transcription is ready."'
                            );
                            resultTracker.successCount++;
                          } else {
                            const errorMessage =
                              "Error: You will be notified by email when the transcription is ready notification not found.";
                            resultTracker.errorMessages.push(errorMessage);
                            resultTracker.errorCount++;
                            const stepToReproduce =
                              "Livescope->Livescope list page->Click on view icon->Livescope details page->click on video card->Post dashboard->Click on on-demand button";
                            resultTracker.push(stepToReproduce);
                          }
                          if (
                            $finalElement
                              .text()
                              .includes("Transcription in progress")
                          ) {
                            cy.log('Success: "Transcribe in progress."');
                            resultTracker.successCount++;
                          } else {
                            const errorMessage =
                              "Error: Unable to send Transcription request.";
                            resultTracker.errorMessages.push(errorMessage);
                            errorCount++;
                            const stepToReproduce =
                              "Livescope->Livescope list page->Click on view icon->Livescope details page->click on video card->Post dashboard->Click on on-demand button";
                            resultTracker.push(stepToReproduce);
                          }
                        });
                    } else {
                      const errorMessage =
                        "Error: Unable to send Transcription request.";
                      resultTracker.errorMessages.push(errorMessage);
                      resultTracker.errorCount++;
                      const stepToReproduce =
                        "Livescope->Livescope list page->Click on view icon->Livescope details page->click on video card->Post dashboard->Click on on-demand button";
                      resultTracker.push(stepToReproduce);
                    }
                  });
              } else {
                const errorMessage =
                  "Error: Card does not contain on-demand button.";
                resultTracker.errorMessages.push(errorMessage);
                resultTracker.errorCount++;
                const stepToReproduce =
                  "Livescope->Livescope list page->Click on view icon->Livescope details page->click on video card->Post dashboard->Transcription section";
                resultTracker.push(stepToReproduce);
              }
            });
        }
      });
  }
}
export default LivescopeTranscription;
