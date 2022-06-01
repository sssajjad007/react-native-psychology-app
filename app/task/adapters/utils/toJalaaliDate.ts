import { toJalaali } from "jalaali-js";
import { digitsEnToFa } from "@persian-tools/persian-tools";
export function toJalaaliDate(date: Date) {
  const { jd, jm, jy } = toJalaali(date);
  return `${digitsEnToFa(jy)}/${digitsEnToFa(jm)}/${digitsEnToFa(jd)}`;
}
