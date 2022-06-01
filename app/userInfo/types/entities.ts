export type tEducation =
  | "uneducated"
  | "underAged"
  | "preSchool"
  | "school"
  | "preHighSchool"
  | "highSchool"
  | "dropoutPreSchool"
  | "dropoutSchool"
  | "dropoutHighSchool"
  | "student"
  | "graduate"
  | "diploma"
  | "clergyman";
export type tGender = "male" | "female";

export type tMaritalStatus = "engaged" | "single";
export type tMaritalState =
  | "namzad"
  | "aghed"
  | "aghedDayem"
  | "movaghat"
  | "wives"
  | "motarekeh"
  | "motalagheh"
  | "widow";

export type tReligion =
  | "islamShia"
  | "islamSunny"
  | "zoroastrianism" // zartoshti
  | "christianity"
  | "other";

export interface IBirthDay {
  day: number;
  month: number;
  year: number;
}
export interface IUserInfo {
  firstName: string | undefined;
  lastName: string | undefined;
  description: string | undefined;
  gender: tGender | undefined;
  birthday: IBirthDay;
  address: string | undefined;
  telephone: string | undefined;
  problemDescription: string | undefined;
  maritalStatus: tMaritalStatus | undefined;
  maritalState: tMaritalState | undefined;
  education: tEducation | undefined;
  academicField: string | undefined;
  religion: tReligion | undefined;
  job: string | undefined;
  bodyDiseases: string | undefined;
  mindDiseases: string | undefined;
  drugUse: string | undefined;
  addiction: string | undefined;
  isFatherAlive: boolean | undefined;
  isMotherAlive: boolean | undefined;
  fatherDeathReason: string | undefined;
  motherDeathReason: string | undefined;
  cousinMarriage: boolean | undefined;
  siblingsPosition: number | undefined;
  siblings: string | undefined;
}
