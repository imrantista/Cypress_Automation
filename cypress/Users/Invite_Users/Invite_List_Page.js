import CommonActions from "../../Common/Actions";
class InviteUserList {
  inviteListPage(resultTracker) {
    const elements = [
      {
        selector: ".w-\\[40\\%\\] > .relative",
        text: "Email",
        description: "Email found in invite Users list page header"
      },
      {
        selector: ".min-w-\\[140px\\] > .relative",
        text: "Role",
        description: "Role found in invite Users list page header"
      },
      {
        selector: ".w-\\[20\\%\\] > .relative",
        text: "Status",
        description: "Status found in invite Users list page header"
      },
      {
        selector: ".min-w-\\[130px\\] > .relative",
        text: "Invited On",
        description: "Invited On found in invite Users list page header"
      },
      {
        selector: ".w-\\[10\\%\\] > .relative > .false",
        text: "Action",
        description: "Action found in invite Users list page header"
      }
    ];
    elements.forEach((element) => {
      const commonAction = new CommonActions();
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in invite Users list page header.`,
        "Users-> Users List page-> check page header ",
        resultTracker
      );
    });
  }
}
export default InviteUserList;
