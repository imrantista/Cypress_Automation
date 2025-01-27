import CommonActions from "../../Common/Actions";
class Transcription {
  transcription(resultTracker) {
    const commonAction = new CommonActions();
    commonAction.visitLivesteamPostDash();
    cy.get(".flex-1.overflow-auto.app-content").then(($element) => {
      const scrollHeight = $element[0].scrollHeight;
      const halfHeight = scrollHeight / 3;
      cy.wrap($element).scrollTo(0, halfHeight);
      cy.wait(4000);
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
                    "Error: Card does not contain Use your remaining hours to transcribe this video.";
                  resultTracker.errorMessages.push(errorMessage);
                  resultTracker.errorCount++;
                  const stepToReproduce =
                    "Select Complete Livestream -> Click on view icon->Livestream post dashboard page->Check card message";
                  resultTracker.push(stepToReproduce);
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
                                "Error: You will be notified by email when the transcription is ready not found";
                              resultTracker.errorMessages.push(errorMessage);
                              resultTracker.errorCount++;
                              const stepToReproduce =
                                "Select Complete Livestream -> Click on view icon->Livestream post dashboard page->Try to Transcribing";
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
                              resultTracker.errorCount++;
                              const stepToReproduce =
                                "Select Complete Livestream -> Click on view icon->Livestream post dashboard page->Check Transcription";
                              resultTracker.push(stepToReproduce);
                            }
                          });
                      } else {
                        const errorMessage =
                          "Error: Unable to send Transcription request.";
                        resultTracker.errorMessages.push(errorMessage);
                        resultTracker.errorCount++;
                        const stepToReproduce =
                          "Select Complete Livestream -> Click on view icon->Livestream post dashboard page->Check Transcription";
                        resultTracker.push(stepToReproduce);
                      }
                    });
                } else {
                  const errorMessage =
                    "Error: Card does not contain on-demand button.";
                  resultTracker.errorMessages.push(errorMessage);
                  resultTracker.errorCount++;
                  const stepToReproduce =
                    "Select Complete Livestream -> Click on view icon->Livestream post dashboard page->Check Transcription";
                  resultTracker.push(stepToReproduce);
                }
              });
          }
        });
      cy.wrap($element).click();
    });
  }
}
export default Transcription;
