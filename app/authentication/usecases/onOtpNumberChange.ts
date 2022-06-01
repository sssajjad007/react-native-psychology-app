import { inputState } from "../entities";

export function onOtpNumberChange(otpNumber: string) {
  // validate
  inputState.setOtpNumber(otpNumber);
}
