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
import RoSCreatePagePermissions from "../Roles_&_permissions/Host_Permissions/RoS/RoS_Create_Page";
import RoSUpadtePermissions from "../Roles_&_permissions/Host_Permissions/RoS/Update_RoS";
import ProductAddPermissions from "../Roles_&_permissions/Host_Permissions/Products/Add";
import ProductEditPermissions from "../Roles_&_permissions/Host_Permissions/Products/Edit";
import ProductCopyPermissions from "../Roles_&_permissions/Host_Permissions/Products/Copy";
import ProductDeletePermissions from "../Roles_&_permissions/Host_Permissions/Products/Delete";
import AiPermissions from "../Roles_&_permissions/Host_Permissions/Products/Ai_Scripts";
import AssetAddPermissions from "../Roles_&_permissions/Host_Permissions/Assets/Add";
import AssetEditPermissions from "../Roles_&_permissions/Host_Permissions/Assets/Edit";
import AssetCopyPermissions from "../Roles_&_permissions/Host_Permissions/Assets/Copy";
import AssetDeletePermissions from "../Roles_&_permissions/Host_Permissions/Assets/Delete";
import LivestreamAddPermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Livestreams/Add";
import LivestreamEditPermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Livestreams/Edit";
import LivestreamCopyPermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Livestreams/Copy";
import LivestreamDeletePermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Livestreams/Delete";
import LivestreamExportDataPermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Livestreams/Data_Export";
import CampaignAddPermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Camapigns/Add";
import CampaignEditPermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Camapigns/Edit";
import CampaignExportDataPermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Camapigns/Export";
import CampaignDeletePermissions from "../Roles_&_permissions/Host_Permissions/Live_Campaigns/Camapigns/Delete";
import LivestreamsAddPermissions from "../Roles_&_permissions/Host_Permissions/Dashboard/Add_Livestream";
import ProductsAddPermissions from "../Roles_&_permissions/Host_Permissions/Dashboard/Add_Product";
import LivescopesAddPermissions from "../Roles_&_permissions/Host_Permissions/Dashboard/Add_Livescope";
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
  it("check host permissions for Add product", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const addpermission = new ProductAddPermissions();
    addpermission.addPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Edit product", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const editpermission = new ProductEditPermissions();
    editpermission.editPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Copy product", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const copypermission = new ProductCopyPermissions();
    copypermission.copyPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for delete product", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const deletepermission = new ProductDeletePermissions();
    deletepermission.deletePermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Ai script generate", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const scriptpermission = new AiPermissions();
    scriptpermission.aiPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Add new Asset", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const addpermission = new AssetAddPermissions();
    addpermission.addPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Edit Asset", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const editpermission = new AssetEditPermissions();
    editpermission.editPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Copy Asset", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const copypermission = new AssetCopyPermissions();
    copypermission.copyPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for delete Asset", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const deletepermission = new AssetDeletePermissions();
    deletepermission.deletePermissions(globalResultTracker, dataSet);
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
  it.skip("check host permissions for visit RoS create page using URL", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const createpagepermission = new RoSCreatePagePermissions();
    createpagepermission.createPagePermissions(globalResultTracker, dataSet);
  });
  it.skip("check host permissions for visit RoS Edit page using URL", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const editpagepermission = new RoSUpadtePermissions();
    editpagepermission.updatePermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for delete RoS", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const deletepermission = new RoSDeletePermissions();
    deletepermission.deletePermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Add new Livestream", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const addpermission = new LivestreamAddPermissions();
    addpermission.addPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for edit Livestream", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const editpermission = new LivestreamEditPermissions();
    editpermission.editPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for copy Livestream", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const copypermission = new LivestreamCopyPermissions();
    copypermission.copyPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for delete Livestream", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const deletepermission = new LivestreamDeletePermissions();
    deletepermission.deletePermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for export Livestream data", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const exportpermission = new LivestreamExportDataPermissions();
    exportpermission.exportPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Add new Campaign", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const addpermission = new CampaignAddPermissions();
    addpermission.addPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for edit Campaign", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const editpermission = new CampaignEditPermissions();
    editpermission.editPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for delete Campaign", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const deletepermission = new CampaignDeletePermissions();
    deletepermission.deletePermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for export Campaign data", () => {
    cy.visit(`${dataSet.link}/auth/login`);
    const exportpermission = new CampaignExportDataPermissions();
    exportpermission.exportPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Add livestream from home dashboard", () => {
    const livestreamaddpermission = new LivestreamsAddPermissions();
    livestreamaddpermission.addPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Add product from home dashboard", () => {
    const productaddpermission = new ProductsAddPermissions();
    productaddpermission.addPermissions(globalResultTracker, dataSet);
  });
  it("check host permissions for Add livescope account from home dashboard", () => {
    const livescopeaddpermission = new LivescopesAddPermissions();
    livescopeaddpermission.addPermissions(globalResultTracker, dataSet);
  });
  after(() => {
    commonAction.logResults(globalResultTracker, "Roles & Permissions");
  });
});