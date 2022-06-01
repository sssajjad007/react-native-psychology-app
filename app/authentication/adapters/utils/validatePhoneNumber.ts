import { parsePhoneNumberFromString } from "libphonenumber-js/max";

export function validatePhoneNumber(phoneNumber: string): boolean {
  try {
    const parsedNum = parsePhoneNumberFromString(phoneNumber, "IR");
    if (!parsedNum) {
      return false;
    }
    return parsedNum?.isValid() && parsedNum.getType() === "MOBILE";
  } catch (error) {
    return false;
  }
}