import InviteUserPermissions from "../Roles_&_permissions/Host_Permissions/Users/Invite_User";
import CommonActions from "../Common/Actions";
import AddAccountPermissions from "../Roles_&_permissions/Host_Permissions/Livescope/Add_Livescope";
import AccountDeletePermissions from "../Roles_&_permissions/Host_Permissions/Livescope/Delete_Account";
import AccountTrackingPermissions from "../Roles_&_permissions/Host_Permissions/Livescope/Tracking_Account";
import ExportDataPermissions from "../Roles_&_permissions/Host_Permissions/Livescope/Export_Data";
import RoSAddPermissions from "../Roles_&_permissions/Host_Permissions/Livescope/Add_Livescope";
import RoSEditPermissions from "../Roles_&_permissions/Host_Permissions/RoS/Edit";
import RoSCopyPermissions from "../Roles_&_permissions/Host_Permissions/RoS/Copy";
import RoSDeletePermissions from "../Roles_&_permissions/Host_Permissions/RoS/Delete";
describe("Automation test for Auth", () => {
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
  commonAction.HostLoginSession();
  it("check host permissions for invite user page", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const invitepermission = new InviteUserPermissions();
    invitepermission.invitePermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Livescope Add account", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const livescopeaddpermission = new AddAccountPermissions();
    livescopeaddpermission.addPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Livescope delete account", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const accountdeletepermission = new AccountDeletePermissions();
    accountdeletepermission.deletePermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Livescope tracking account", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const trackingpermission = new AccountTrackingPermissions();
    trackingpermission.TrakingPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for export Livescope data", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const exportpermission = new ExportDataPermissions();
    exportpermission.exportPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for add new RoS", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const addpermission = new RoSAddPermissions();
    addpermission.addPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Edit RoS", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const editpermission = new RoSEditPermissions();
    editpermission.editPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for copy RoS", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const copypermission = new RoSCopyPermissions();
    copypermission.copyPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for delete RoS", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const deletepermission = new RoSDeletePermissions();
    deletepermission.deletePermissions(globalResultTracker, dataSet);
  });
  after(() => {
    cy.then(() => {
      let totalCases =
        globalResultTracker.successCount + globalResultTracker.errorCount;
      cy.log(`Total Number of Cases: ${totalCases}`);
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
          <h3>Module Name: Host Permissions </h3>
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
          <h3>Module Name: Host Permissions </h3>
          <p>Total Number of Cases: ${totalCases}</p>
          <p>Total Success: ${globalResultTracker.successCount}</p>
          <h3><span style="color:#228B22;">All checks passed!</span></h3>
        `;
        //cy.task("sendEmail", { emailHtml: htmlString });
      }
    });
  });
});
