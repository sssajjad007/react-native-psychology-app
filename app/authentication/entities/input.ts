import { action, makeObservable, observable, computed } from "mobx";

export class InputState {
  constructor() {
    makeObservable(this, {
      phoneNumber: observable,
      otpNumber: observable,
      phoneValidation: observable,
      otpValidation: observable,
      setPhoneValidationErrorReset: action,
      setPhoneNumber: action,
      setOtpNumber: action,
      setPhoneValidation: action,
      setOtpValidation: action,
      reset: action,
      isPhoneValid: computed,
    });
  }
  phoneNumber: string = "";
  otpNumber: string = "";
  phoneValidation: string[] = [];
  otpValidation: string[] = [];
  setPhoneValidationErrorReset() {
    this.phoneValidation = [];
  }
  setPhoneNumber(phone: string) {
    this.phoneNumber = phone;
  }
  setOtpNumber(otp: string) {
    this.otpNumber = otp;
  }
  setPhoneValidation(validation: string[]) {
    this.phoneValidation = validation;
  }
  setOtpValidation(validation: string[]) {
    this.otpValidation = validation;
  }
  reset() {
    this.phoneNumber = "";
    this.otpNumber = "";
    this.phoneValidation = [];
    this.otpValidation = [];
  }
  get isPhoneValid(): boolean {
    return this.phoneValidation.length === 0;
  }
}
