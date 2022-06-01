import { toString } from "../../../library";
import { IPatient } from "../../types";

function parseMaritalState(maritalState: string) {
  if (maritalState === "namzad") {
    return "namzad";
  }
  if (maritalState === "aghed") {
    return "aghed";
  }
  if (maritalState === "aghedDayem") {
    return "aghedDayem";
  }
  if (maritalState === "movaghat") {
    return "movaghat";
  }
  if (maritalState === "wives") {
    return "wives";
  }
  if (maritalState === "motarekeh") {
    return "motarekeh";
  }
  if (maritalState === "motalagheh") {
    return "motalagheh";
  }
  if (maritalState === "widow") {
    return "widow";
  }
  return "namzad";
}

function parseEducation(education: string) {
  if (education === "uneducated") {
    return "uneducated";
  }
  if (education === "underAged") {
    return "underAged";
  }
  if (education === "preSchool") {
    return "preSchool";
  }
  if (education === "school") {
    return "school";
  }
  if (education === "preHighSchool") {
    return "preHighSchool";
  }
  if (education === "highSchool") {
    return "highSchool";
  }
  if (education === "dropoutPreSchool") {
    return "dropoutPreSchool";
  }
  if (education === "dropoutSchool") {
    return "dropoutSchool";
  }
  if (education === "dropoutHighSchool") {
    return "dropoutHighSchool";
  }
  if (education === "student") {
    return "student";
  }
  if (education === "graduate") {
    return "graduate";
  }
  if (education === "diploma") {
    return "diploma";
  }
  if (education === "clergyman") {
    return "clergyman";
  }
  return undefined;
}

export function parseReligion(religion: string) {
  if (religion === "islamShia") {
    return "islamShia";
  }
  if (religion === "islamSunny") {
    return "islamSunny";
  }
  if (religion === "zoroastrianism") {
    return "zoroastrianism";
  }
  if (religion === "christianity") {
    return "christianity";
  }
  if (religion === "other") {
    return "other";
  }
  return undefined;
}

export function parsePatient(payload: Record<string, unknown>): IPatient {
  const maritalStatus =
    toString(payload.maritalStatus) === "engaged" ? "engaged" : "single";
  const maritalState = parseMaritalState(toString(payload.maritalState));
  const education = parseEducation(toString(payload.education));
  return {
    problemDescription: toString(payload.problemDescription),
    maritalStatus,
    maritalState,
    education,
    siblingDiseases: toString(payload.siblingDiseases),
    academicField: toString(payload.academicField),
    religion: parseReligion(toString(payload.religion)),
    job: toString(payload.job),
    bodyDiseases: toString(payload.bodyDiseases),
    mindDiseases: toString(payload.mindDiseases),
    drugUse: toString(payload.drugUse),
    addiction: toString(payload.addiction),
    isFatherAlive: Boolean(payload.isFatherAlive),
    isMotherAlive: Boolean(payload.isMotherAlive),
    fatherDeathReason: toString(payload.fatherDeathReason),
    motherDeathReason: toString(payload.motherDeathReason),
    cousinMarriage: Boolean(payload.cousinMarriage),
    siblingsPosition: toString(payload.siblingsPosition),
    siblings: toString(payload.siblings),
  };
}
