import CommonActions from "../../Common/Actions";
class UserListPage {
  userListPage(resultTracker) {
    const elements = [
      {
        selector: ".\\32xl\\:w-\\[20\\%\\] > .relative",
        text: "First Name",
        description: "First Name not found in User page header",
      },
      {
        selector: ":nth-child(2) > .relative",
        text: "Last Name",
        description: "Last Name not found in User page header",
      },
      {
        selector: ".\\w-\\[13\\%\\] > .relative",
        text: "Role",
        description: "Role not found in User page header",
      },
      {
        selector: ".\\w-\\[22\\%\\] > .relative",
        text: "Email",
        description: "Email not found in User page header",
      },
      {
        selector: ":nth-child(5) > .relative",
        text: "Phone",
        description: "Phone not found in User page header",
      },
      {
        selector: ".\\w-\\[7\\%\\] > .relative",
        text: "Active",
        description: "Active not found in User page header",
      },
      {
        selector: ".\\w-\\[8\\%\\] > .relative> .false",
        text: "Action",
        description: "Action not found in User page header",
      }
    ];
    elements.forEach((element) => {
      const commonAction = new CommonActions();
      commonAction.checkElementVisibility(
        element.selector,
        element.text,
        element.description,
        `Error: ${element.text} not found in users list page header section.`,
        "Users->User list page header",
        resultTracker
      );
    });
  }
}
export default UserListPage;
