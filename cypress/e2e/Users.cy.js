import CommonActions from "../Common/Actions";
import DeleteInvitation from "../Users/Invite_Users/Delete_Invitation";
import ExistUserInvitation from "../Users/Invite_Users/Invitation/Existing_User_Invitation";
import NewInvitation from "../Users/Invite_Users/Invitation/New_Invitation";
import OwnInvitation from "../Users/Invite_Users/Invitation/Own_Invitation";
import PendingUserInvitation from "../Users/Invite_Users/Invitation/Pending_User_Invitation";
import ResendInvitation from "../Users/Invite_Users/Invitation/Resend_Invitation";
import InviteUserList from "../Users/Invite_Users/Invite_List_Page";
import EmailRoleRequired from "../Users/Invite_Users/Validation/Email_&_Role_Required";
import InvalidEmail from "../Users/Invite_Users/Validation/Invalid_Email";
import RequiredEmail from "../Users/Invite_Users/Validation/Required_Email";
import RequiredRole from "../Users/Invite_Users/Validation/Required_Role";
import SearchInviteUsers from "../Users/Invite_Users/Search";
import UserListPage from "../Users/Users_Page/User_List_Page";
import SearchUsers from "../Users/Users_Page/Search_Users";
import UserActiveDeactive from "../Users/Users_Page/User_Active_Deactive";
import RoleChange from "../Users/Users_Page/Role_Change";
import DeactivatedUserLogin from "../Users/Users_Page/Deactive_User_Login";
describe("Automation test", () => {
  let dataSet = {};
  before(() => {
    cy.fixture("LoginData.json")
      .as("dataset")
      .then(function (data) {
        dataSet = data;
      });
  });
  let globalResultTracker = {
    successCount: 0,
    errorCount: 0,
    errorMessages: [],
    stepToReproduces: [],
  };
  const commonAction = new CommonActions();
  commonAction.LoginSession();
  it("Verify the presence and correctness of the header elements in the Invite users list page", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    const userlist = new InviteUserList();
    userlist.inviteListPage(globalResultTracker);
  });
  it("Validate the functionality of sending a new user invitation", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    const inviteuser = new NewInvitation();
    inviteuser.newInvitation(globalResultTracker);
  });
  it("Validate the functionality of own user invitation", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(".vs-btn > .flex");
    commonAction.selectAndType('input[name="email"]', dataSet.email);
    const inviteownuser = new OwnInvitation();
    inviteownuser.ownInvitation(globalResultTracker);
  });
  it("Validate the functionality of existing user invitation", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(".vs-btn > .flex");
    commonAction.selectAndType('input[name="email"]', dataSet.userexist);
    const existinguserinvitation = new ExistUserInvitation();
    existinguserinvitation.exitsUserInvitation(globalResultTracker);
  });
  it("Validate the functionality of pending user invitation", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(".vs-btn > .flex");
    commonAction.selectAndType(
      'input[name="email"]',
      dataSet.pendingInvitation
    );
    const pendinguserinvitation = new PendingUserInvitation();
    pendinguserinvitation.pendingUserInvitation(globalResultTracker);
  });
  it("Validate the functionality of invalid email formate", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(".vs-btn > .flex");
    commonAction.selectAndType('input[name="email"]', "imra41@yopmai");
    const invalidemailformate = new InvalidEmail();
    invalidemailformate.invalidEmail(globalResultTracker);
  });
  it("Validate the functionality of email is required", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(".vs-btn > .flex");
    const emailrequired = new RequiredEmail();
    emailrequired.requiredEmail(globalResultTracker);
  });
  it("Validate the functionality of role is required", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(".vs-btn > .flex");
    const rolerequired = new RequiredRole();
    rolerequired.requiredRole(globalResultTracker);
  });
  it("Validate the functionality of email and role is required", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    commonAction.clickElement(".vs-btn > .flex");
    const emailrolerequired = new EmailRoleRequired();
    emailrolerequired.emailroleRequired(globalResultTracker);
  });
  it("Validate the functionality of resend invitation", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    const resendinvitation = new ResendInvitation();
    resendinvitation.resendInvitation(globalResultTracker);
  });
  it("Validate the functionality of delete invitation", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    const deleteinvitation = new DeleteInvitation();
    deleteinvitation.deleteInvitation(globalResultTracker);
  });
  it("Validate the functionality of search for invite user ", () => {
    cy.visit(`${dataSet.link}/users?tab=Invited_Users`);
    commonAction.itemVisibility(".vs-btn");
    const searchinvitation = new SearchInviteUsers();
    searchinvitation.searchUsers(globalResultTracker);
  });
  it("Verify the presence and correctness of the header elements in the users list page ", () => {
    cy.visit(`${dataSet.link}/users?tab=Users`);
    commonAction.itemVisibility(".vs-btn");
    const userlistpage = new UserListPage();
    userlistpage.userListPage(globalResultTracker);
  });
  it("Validate the functionality of search for users page ", () => {
    cy.visit(`${dataSet.link}/users?tab=Users`);
    commonAction.itemVisibility(".vs-btn");
    const userserach = new SearchUsers();
    userserach.searchUsers(globalResultTracker);
  });
  it("Validate the functionality of account Activation and Deactivation ", () => {
    for (let i = 0; i < 2; i++) {
      cy.visit(`${dataSet.link}/users?tab=Users`);
      commonAction.itemVisibility(".vs-btn");
      const acctactvdeactv = new UserActiveDeactive();
      acctactvdeactv.userActiveDeactive(globalResultTracker);
    }
  });
  it("Validate the functionality of search for role change", () => {
    cy.visit(`${dataSet.link}/users?tab=Users`);
    commonAction.itemVisibility(".vs-btn");
    const rolechange = new RoleChange();
    rolechange.roleChange(globalResultTracker);
  });
  it("Validate the functionality of search for when deactivated User try to login", () => {
    cy.visit(`${dataSet.link}/users?tab=Users`);
    commonAction.clickElement(".h-\\[58px\\]");
    commonAction.clickElement(":nth-child(4) > .text-black");
    commonAction.itemVisibility('button[type="submit"]');
    commonAction.clearElement('input[name="username"]')
    commonAction.selectAndType('input[name="username"]', dataSet.deactiveuser);
    commonAction.clearElement('input[name="password"]')
    commonAction.selectAndType('input[name="password"]',dataSet.password);
    commonAction.clickElement('button[type="submit"]');
    const deactivateuser = new DeactivatedUserLogin();
    deactivateuser.deactivatedUserLogin(globalResultTracker);
  });
  after(() => {
    cy.then(() => {
      let totalCases =
        globalResultTracker.successCount + globalResultTracker.errorCount;
      cy.log(`Total Number of Check: ${totalCases}`);
      cy.log(`Total Success: ${globalResultTracker.successCount}`);
      if (globalResultTracker.errorMessages.length > 0) {
        cy.log(`Total Errors: ${globalResultTracker.errorCount}`);
        let formattedErrorMessages = globalResultTracker.errorMessages
          .map(
            (error, index) =>
              `${
                index + 1
              }. ${error} <br> <span style="color:#22228B;">#Step to Reproduce</span>: ${
                globalResultTracker.stepToReproduces[index]
              }`
          )
          .join("<br>");
        let htmlString = `
          <h3>Module Name: Users </h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <p>Total Errors: ${globalResultTracker.errorCount}</p>
          <h3>Error Details</h3>
          <p>${formattedErrorMessages}</p>
        `;
        globalResultTracker.errorMessages.forEach((error, index) => {
          cy.log(`Error ${index + 1}: ${error}`);
          cy.log(
            `Step to Reproduce for Error ${index + 1}: ${
              globalResultTracker.stepToReproduces[index]
            }`
          );
        });
        //cy.task("sendEmail", { emailHtml: htmlString });
      } else {
        cy.log("All checks passed!");
        let htmlString = `
          <h3>Module Name: Users </h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
        //cy.task("sendEmail", { emailHtml: htmlString });
      }
    });
  });
});
