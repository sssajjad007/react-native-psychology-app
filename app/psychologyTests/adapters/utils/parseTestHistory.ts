import { parseDate, toJalaaliDate, toString } from "../../../library";
import type { ITestHistory } from "../../types";
export function parseTestHistory(payload: any): ITestHistory {
  const createdAt = parseDate(payload?.createdAt);
  const title = Object(payload?.title);
  return {
    id: toString(payload?.id),
    faName: toString(payload?.title.fa),
    enName: toString(payload?.title.en),
    createdAt: createdAt ? toJalaaliDate(createdAt) : "",
    shortName: toString(payload?.shortName),
  };
}
