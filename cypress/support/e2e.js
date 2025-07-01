Cypress.on('uncaught:exception', (err) => {
  // Ignore all minified React errors
  if (err.message.includes('Minified React error')) {
    return false;
  }

  // Let other errors fail
  return true;
});

