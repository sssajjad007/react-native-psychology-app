import { logger } from "../../library";
import { fetchPatient, fetchUser } from "../adapters";
import { userInfoState } from "../entities";

export async function retrieveUserProfile(customerId: string | undefined) {
  const [patient, user] = await Promise.all([
    fetchPatient(customerId),
    fetchUser(customerId),
  ]);
  const userData = user.user;
  if (!userData || user.error) {
    logger({
      container: "userInfo",
      path: { section: "usecases", file: "retrieveUserProfile" },
      type: "error",
      logMessage: `Error retrieving user profile: ${user.error}`,
    });
    return;
  }

  // console.log(userData);
  userInfoState.setFirstName(userData.firstName);
  userInfoState.setLastName(userData.lastName);
  userInfoState.setAddress(userData.address);
  userInfoState.setTelephone(userData.telephone);
  userInfoState.setBirthday(userData.birthday);
  userInfoState.setGender(userData.gender);
  const patientData = patient.patient;
  if (!patientData || patient.error) {
    // console.log(patientData);
    userInfoState.resetPatient();

    return "error";
  }

  userInfoState.setProblemDescription(patientData.problemDescription);
  userInfoState.setMaritalStatus(patientData.maritalStatus);
  userInfoState.setMaritalState(patientData.maritalState || "");
  userInfoState.setEducation(patientData.education || "");
  userInfoState.setAcademicField(patientData.academicField || "");
  userInfoState.setReligion(patientData.religion || "");
  userInfoState.setJob(patientData.job);
  userInfoState.setBodyDiseases(patientData.bodyDiseases || "");
  userInfoState.setMindDiseases(patientData.mindDiseases || "");
  userInfoState.setDrugUse(patientData.drugUse || "");
  userInfoState.setAddiction(patientData.addiction || "");
  userInfoState.setIsFatherAlive(patientData.isFatherAlive);
  userInfoState.setIsMotherAlive(patientData.isMotherAlive);
  userInfoState.setFatherDeathReason(patientData.fatherDeathReason || "");
  userInfoState.setMotherDeathReason(patientData.motherDeathReason || "");
  userInfoState.setCousinMarriage(patientData.cousinMarriage);
  userInfoState.setSiblingsPosition(patientData.siblingsPosition);
  userInfoState.setSiblings(patientData.siblings);
  userInfoState.setSiblingDiseases(patientData.siblingDiseases || "");
}
