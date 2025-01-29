import Loginpage from "../Login_Auth/Loginpage";
describe("Automation test for Auth", () => {
  it("Login with valid credencial", () => {
    cy.fixture("LoginData.json").then((data) => {
      const dataSet = data;
      cy.visit(`${dataSet.link}/auth/login`);
      const login = new Loginpage();
      login.Newlogin(dataSet.email, dataSet.password);
    });
  });
});

