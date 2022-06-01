import { toString } from "../../../library";
import { ITestResult } from "../../types";

export function parseTestResult(payload: any): ITestResult {
  const label = Object(payload?.label);
  return {
    type: toString(payload?.type),
    faName: toString(label.fa),
    enName: toString(label.en),
    variable: toString(payload?.variable),
    rawScore: parseInt(payload?.rawscore, 10),
    baseRate: parseInt(payload?.baserate, 10),
    interpret: toString(payload?.interpret),
  };
}
