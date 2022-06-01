import {
  tMaritalStatus,
  tMaritalState,
  tEducation,
  tReligion,
  tGender,
  IBirthDay,
} from "./entities";

export interface IPatient {
  problemDescription: string;
  maritalStatus: tMaritalStatus;
  maritalState: tMaritalState | undefined;
  education: tEducation | undefined;
  academicField: string | undefined;
  religion: tReligion | undefined;
  job: string;
  bodyDiseases: string | undefined;
  mindDiseases: string | undefined;
  drugUse: string | undefined;
  addiction: string | undefined;
  isFatherAlive: boolean;
  isMotherAlive: boolean;
  siblingDiseases: string;
  fatherDeathReason: string | undefined;
  motherDeathReason: string | undefined;
  cousinMarriage: boolean;
  siblingsPosition: string;
  siblings: string;
}

export interface IUpdateUser extends Omit<IUser, "birthday"> {
  birthday: string;
}

export interface IFetchCreatePatientResult {
  error: string;
  patient: IPatient;
}

export interface IUser {
  firstName: string;
  lastName: string;
  address: string;
  telephone: string;
  gender: tGender;
  birthday: IBirthDay;
}
