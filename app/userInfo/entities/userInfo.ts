import { observable, action, makeObservable, computed } from "mobx";
import type {
  tMaritalStatus,
  tMaritalState,
  tEducation,
  tReligion,
  IBirthDay,
} from "../types";

export class UserInfoState {
  constructor() {
    makeObservable(this, {
      editable: observable,
      firstName: observable,
      lastName: observable,
      birthday: observable,
      problemDescription: observable,
      gender: observable,
      address: observable,
      telephone: observable,
      maritalStatus: observable,
      maritalState: observable,
      education: observable,
      academicField: observable,
      religion: observable,
      job: observable,
      bodyDiseases: observable,
      mindDiseases: observable,
      drugUse: observable,
      addiction: observable,
      isFatherAlive: observable,
      isMotherAlive: observable,
      fatherDeathReason: observable,
      motherDeathReason: observable,
      cousinMarriage: observable,
      siblingsPosition: observable,
      siblingDiseases: observable,
      siblings: observable,
      resetPatient: action,
      setEditable: action,
      setFirstName: action,
      setLastName: action,
      setBirthday: action,
      setProblemDescription: action,
      setTelephone: action,
      setGender: action,
      setAddress: action,
      setMaritalState: action,
      setMaritalStatus: action,
      setAcademicField: action,
      setEducation: action,
      setReligion: action,
      setJob: action,
      setBodyDiseases: action,
      setMindDiseases: action,
      setDrugUse: action,
      setAddiction: action,
      setIsFatherAlive: action,
      setIsMotherAlive: action,
      setFatherDeathReason: action,
      setMotherDeathReason: action,
      setCousinMarriage: action,
      setSiblingsPosition: action,
      setSiblingDiseases: action,
      setSiblings: action,
      genderPersianText: computed,
      maritalStatusText: computed,
      isFatherAliveText: computed,
      isMotherAliveText: computed,
      cousinMarriageText: computed,
    });
  }
  editable: boolean = false;
  firstName: string = "";
  lastName: string = "";
  birthday: IBirthDay = {
    day: 0,
    month: 0,
    year: 0,
  }; // TODO: birthday should be a Date object
  problemDescription: string = "";
  gender: "male" | "female" | undefined = undefined;
  address: string = "";
  telephone: string = "";
  maritalStatus: tMaritalStatus | undefined = undefined;
  maritalState: tMaritalState | undefined = undefined;
  education: tEducation | undefined = undefined;
  academicField: string = "";
  religion: tReligion | undefined = undefined;
  job: string = "";
  bodyDiseases: string = "";
  mindDiseases: string = "";
  drugUse: string = "";
  addiction: string = "";
  siblingDiseases: string = "";
  isFatherAlive: boolean | undefined = undefined;
  isMotherAlive: boolean | undefined = undefined;
  fatherDeathReason: string = "";
  motherDeathReason: string = "";
  cousinMarriage: boolean | undefined = undefined;
  siblingsPosition: string = "";
  siblings: string = "";

  setEditable(editable: boolean) {
    this.editable = editable;
  }
  setSiblingDiseases(siblingDiseases: string) {
    this.siblingDiseases = siblingDiseases;
  }
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  setBirthday(birthday: IBirthDay) {
    this.birthday = birthday;
  }
  setProblemDescription(problemDescription: string) {
    this.problemDescription = problemDescription;
  }
  setGender(gender: "male" | "female") {
    this.gender = gender;
  }
  setAddress(address: string) {
    this.address = address;
  }
  setTelephone(telephone: string) {
    this.telephone = telephone;
  }
  setMaritalStatus(status: tMaritalStatus) {
    this.maritalStatus = status;
  }
  setMaritalState(state: string) {
    if (state === "namzad") {
      this.maritalState = "namzad";
      return;
    }
    if (state === "aghed") {
      this.maritalState = "aghed";
      return;
    }
    if (state === "aghedDayem") {
      this.maritalState = "aghedDayem";
      return;
    }
    if (state === "movaghat") {
      this.maritalState = "movaghat";
      return;
    }
    if (state === "wives") {
      this.maritalState = "wives";
      return;
    }
    if (state === "motarekeh") {
      this.maritalState = "motarekeh";
      return;
    }
    if (state === "motalagheh") {
      this.maritalState = "motalagheh";
      return;
    }
    if (state === "widow") {
      this.maritalState = "widow";
      return;
    }
    this.maritalState = undefined;
  }
  setEducation(education: string) {
    if (education === "uneducated") {
      this.education = "uneducated";
      return;
    }
    if (education === "underAged") {
      this.education = "underAged";
      return;
    }
    if (education === "preSchool") {
      this.education = "preSchool";
      return;
    }
    if (education === "school") {
      this.education = "school";
      return;
    }
    if (education === "preHighSchool") {
      this.education = "preHighSchool";
      return;
    }
    if (education === "highSchool") {
      this.education = "highSchool";
      return;
    }
    if (education === "dropoutPreSchool") {
      this.education = "dropoutPreSchool";
      return;
    }
    if (education === "dropoutSchool") {
      this.education = "dropoutSchool";
      return;
    }
    if (education === "dropoutHighSchool") {
      this.education = "dropoutHighSchool";
      return;
    }
    if (education === "student") {
      this.education = "student";
      return;
    }
    if (education === "graduate") {
      this.education = "graduate";
      return;
    }
    if (education === "diploma") {
      this.education = "diploma";
      return;
    }
    if (education === "clergyman") {
      this.education = "clergyman";
      return;
    }
    this.education = undefined;
  }
  setAcademicField(academicField: string) {
    this.academicField = academicField;
  }
  setReligion(religion: string) {
    if (religion === "islamShia") {
      this.religion = "islamShia";
      return;
    }
    if (religion === "islamSunny") {
      this.religion = "islamSunny";
      return;
    }
    if (religion === "zoroastrianism") {
      this.religion = "zoroastrianism";
      return;
    }
    if (religion === "christianity") {
      this.religion = "christianity";
      return;
    }
    if (religion === "other") {
      this.religion = "other";
      return;
    }
    this.religion = undefined;
  }
  setJob(job: string) {
    this.job = job;
  }
  setBodyDiseases(bodyDiseases: string) {
    this.bodyDiseases = bodyDiseases;
  }
  setMindDiseases(mindDiseases: string) {
    this.mindDiseases = mindDiseases;
  }
  setDrugUse(drugUse: string) {
    this.drugUse = drugUse;
  }
  setAddiction(addiction: string) {
    this.addiction = addiction;
  }
  setIsFatherAlive(alive: boolean) {
    this.isFatherAlive = alive;
  }
  setIsMotherAlive(alive: boolean) {
    this.isMotherAlive = alive;
  }
  setFatherDeathReason(reason: string) {
    this.fatherDeathReason = reason;
  }
  setMotherDeathReason(reason: string) {
    this.motherDeathReason = reason;
  }
  setCousinMarriage(marriage: boolean) {
    this.cousinMarriage = marriage;
  }
  setSiblingsPosition(position: string) {
    this.siblingsPosition = position;
  }
  setSiblings(siblings: string) {
    this.siblings = siblings;
  }
  get genderPersianText(): string | undefined {
    if (typeof this.gender === "undefined") {
      return undefined;
    }
    if (this.gender === "male") {
      return "مرد";
    }
    return "زن";
  }
  get maritalStatusText(): string | undefined {
    if (typeof this.maritalStatus === "undefined") {
      return undefined;
    }
    if (this.maritalStatus === "engaged") {
      return "متاهل";
    }
    return "مجرد";
  }
  get isFatherAliveText(): string | undefined {
    if (typeof this.isFatherAlive === "undefined") {
      return undefined;
    }
    if (this.isFatherAlive) {
      return "بله";
    }
    return "خیر";
  }
  get isMotherAliveText(): string | undefined {
    if (typeof this.isMotherAlive === "undefined") {
      return undefined;
    }
    if (this.isMotherAlive) {
      return "بله";
    }
    return "خیر";
  }
  get cousinMarriageText(): string | undefined {
    if (typeof this.cousinMarriage === "undefined") {
      return undefined;
    }
    if (this.cousinMarriage) {
      return "بله";
    }
    return "خیر";
  }
  resetPatient() {
    this.editable = false;
    this.problemDescription = "";
    this.maritalStatus = undefined;
    this.maritalState = undefined;
    this.education = undefined;
    this.academicField = "";
    this.religion = undefined;
    this.job = "";
    this.bodyDiseases = "";
    this.mindDiseases = "";
    this.drugUse = "";
    this.addiction = "";
    this.isFatherAlive = undefined;
    this.isMotherAlive = undefined;
    this.fatherDeathReason = "";
    this.motherDeathReason = "";
    this.cousinMarriage = undefined;
    this.siblingsPosition = "";
    this.siblingDiseases = "";
    this.siblings = "";
  }
}
