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
    commonAction.logResults(globalResultTracker, "Roles & Permissions");
  });
});