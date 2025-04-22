Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore React error 419 or any uncaught exceptions
    if (err.message.includes('Minified React error #419')) {
      return false; // prevent Cypress from failing the test
    }
  
    // let other errors fail the test
    return true;
  });
  