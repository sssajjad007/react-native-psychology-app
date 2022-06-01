import { toString, parseDate } from "../../../library";
import { toJalaali } from "jalaali-js";
import { IUser } from "../../types";

export function parseUser(payload: Record<string, unknown>): IUser {
  const gender = toString(payload.gender) === "male" ? "male" : "female";
  function parseBirthday() {
    const date = parseDate(toString(payload?.birthday));
    if (!date) {
      return {
        day: 0,
        month: 0,
        year: 0,
      };
    }
    const { jy, jm, jd } = toJalaali(date);
    return {
      day: jd,
      month: jm,
      year: jy,
    };
  }
  return {
    firstName: toString(payload.firstName),
    lastName: toString(payload.lastName),
    address: toString(payload.address),
    telephone: toString(payload.telephone),
    birthday: parseBirthday(),
    gender,
  };
}
