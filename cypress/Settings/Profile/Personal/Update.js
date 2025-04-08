import CommonActions from "../../../Common/Actions";
class UpdatePersonalInfo {
  updateInfo(resultTracker) {
    const commonAction = new CommonActions();
    const randomString = Math.random().toString(9);
    const UpdateBio = `Update Bio-${randomString}-Info`;
    const Updatename = `Update-${randomString}-name`;
    const UpdateAddress = `Address-${randomString}-`;
    commonAction.clickElement(".mb-3 > .flex > :nth-child(2) > .font-semibold");
    commonAction.itemVisibility(
      ":nth-child(2) > .flex-1 > .gap-y-3 > :nth-child(1) > .text-base"
    );
    commonAction.clickElement(
      ".w-full.rounded-xl > .w-\\[85px\\] > .text-primaryYellow"
    );
    commonAction.clearElement(":nth-child(2) > .flex > div > .text-base");
    commonAction.selectAndType(
      ":nth-child(2) > .flex > div > .text-base",
      UpdateBio
    );
    commonAction.clickElement(".bg-lightGreen");
    commonAction.itemVisibility(".Toastify__toast-body");
    commonAction.checkToast(
      "Profile updated successfully!",
      "Profile updated successfully!",
      "Unable to update Bio info",
      "Settings->My profile->Try to update Bio",
      resultTracker
    );
    commonAction.clickElement(":nth-child(2) > .w-\\[85px\\] > .text-primaryYellow")
    commonAction.clearElement(":nth-child(2) > .gap-y-4 > .flex > .border-b")
    commonAction.selectAndType(":nth-child(2) > .gap-y-4 > .flex > .border-b", Updatename)
    commonAction.clickElement(".bg-lightGreen");
    commonAction.itemVisibility(".Toastify__toast-body");
    commonAction.checkToast(
      "Profile updated successfully!",
      "Profile updated successfully!",
      "Unable to update personal info",
      "Settings->My profile->Try to update personal info",
      resultTracker
    );
    commonAction.clickElement(":nth-child(3) > .w-\\[85px\\] > .text-primaryYellow")
    commonAction.clearElement(":nth-child(2) > .gap-y-4 > .flex > .border-b")
    commonAction.selectAndType(":nth-child(2) > .gap-y-4 > .flex > .border-b", UpdateAddress)
    commonAction.clickElement(".bg-lightGreen");
    commonAction.itemVisibility(".Toastify__toast-body");
    commonAction.checkToast(
      "Profile updated successfully!",
      "Profile updated successfully!",
      "Unable to update Address info",
      "Settings->My profile->Try to update address info",
      resultTracker
    );
  }
}
export default UpdatePersonalInfo;
