import { toGregorian } from "jalaali-js";
import { fetchCreatePatient, fetchUpdateUser } from "../adapters";
import { userInfoState } from "../entities";

export async function updateUserProfile(customerId: string) {
  if (!userInfoState.telephone) {
    return "لطفا تلفن خود را وارد کنید";
  }
  if (!userInfoState.firstName) {
    return "لطفا نام خود را وارد کنید";
  }
  if (!userInfoState.lastName) {
    return "لطفا نام خانوادگی خود را وارد کنید";
  }
  if (!userInfoState.address) {
    return "لطفا آدرس خود را وارد کنید";
  }
  if (!userInfoState.telephone) {
    return "لطفا تلفن خود را وارد کنید";
  }
  if (
    !userInfoState.birthday.day ||
    !userInfoState.birthday.month ||
    !userInfoState.birthday.year
  ) {
    return "لطفا تاریخ تولد خود را وارد کنید";
  }
  if (!userInfoState.maritalStatus) {
    return "لطفا وضعیت تاهل خود را وارد کنید";
  }
  if (!userInfoState.education) {
    return "لطفا سطح تحصیلات خود را وارد کنید";
  }
  if (!userInfoState.religion) {
    return "لطفا مذهب خود را وارد کنید";
  }
  if (typeof userInfoState.isFatherAlive === "undefined") {
    return "لطفا در قید حیات بودن پدر خود را وارد کنید";
  }
  if (typeof userInfoState.isMotherAlive === "undefined") {
    return "لطفا در قید حیات بودن مادر خود را وارد کنید";
  }
  if (typeof userInfoState.cousinMarriage === "undefined") {
    return "وضعیت ازدواج فامیلی را مشخص کنید";
  }
  if (!userInfoState.siblingsPosition) {
    return "فرزند چندم بودن خود را مشخص کنید";
  }
  if (!userInfoState.gender) {
    return "لطفا جنسیت خود را مشخص کنید";
  }
  // console.log("update user usecase");
  const { error, patient } = await fetchCreatePatient(
    {
      siblingDiseases: userInfoState.siblingDiseases,
      problemDescription: userInfoState.problemDescription,
      maritalStatus: userInfoState.maritalStatus, //
      maritalState: userInfoState.maritalState,
      education: userInfoState.education, //
      academicField: userInfoState.academicField,
      religion: userInfoState.religion, //
      job: userInfoState.job,
      bodyDiseases: userInfoState.bodyDiseases,
      mindDiseases: userInfoState.mindDiseases,
      drugUse: userInfoState.drugUse,
      addiction: userInfoState.addiction,
      isFatherAlive: userInfoState.isFatherAlive, //
      isMotherAlive: userInfoState.isMotherAlive, //
      fatherDeathReason: userInfoState.fatherDeathReason,
      motherDeathReason: userInfoState.motherDeathReason,
      cousinMarriage: userInfoState.cousinMarriage,
      siblingsPosition: userInfoState.siblingsPosition, //
      siblings: userInfoState.siblings, //
    },
    customerId
  );
  const { year, month, day } = userInfoState.birthday;
  const { gy, gm, gd } = toGregorian(year, month, day);
  const { error: userError, user } = await fetchUpdateUser(
    {
      firstName: userInfoState.firstName, //
      lastName: userInfoState.lastName, //
      address: userInfoState.address, //
      telephone: userInfoState.telephone, //
      birthday: new Date(gy, gm - 1, gd).toISOString(), //
      gender: userInfoState.gender, //
    },
    customerId
  );
  console.log(error, patient);
  console.log(userError, user);
}
