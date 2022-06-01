import { request, toString } from "../../../library";
import { IFetchGetTestResultById } from "../../types";
import { parseTestResult } from "../utils";

export async function fetchGetTestResultById(
  testId: string,
  customerId: string
): Promise<IFetchGetTestResultById> {
  const { error, httpStatus, payload, success } = await request({
    endpoint: `/tests/testResult/${testId}/${customerId}`,
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      testResult: [],
      resultSummary: "",
    };
  }
  const testResult = [];

  //TODO: refactor
  const length = Array.isArray(payload?.results) ? payload?.results.length : 0;
  const results = Array.isArray(payload?.results) ? payload?.results : [];
  for (let index = 0; index < length; index++) {
    const element = results[index];
    testResult.push(parseTestResult(element));
  }

  return {
    error,
    testResult,
    resultSummary: toString(payload.resultSummary),
  };
}
