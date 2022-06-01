import { request } from "../../../library";
import { parseTestResult } from "../utils";

export async function fetchOnSubmitTest(
  testId: string,
  fields: Record<string, number>
) {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "/tests",
    method: "POST",
    body: { testId, fields, gender: "male" },
  });
  if (!success || !payload) {
    return {
      error,
      testResult: [],
    };
  }
  const testResult = [];
  // console.log("payload", payload.results);
  const length = Array.isArray(payload?.results) ? payload?.results.length : 0;
  const results = Array.isArray(payload?.results) ? payload?.results : [];
  for (let index = 0; index < length; index++) {
    const element = results[index];
    testResult.push(parseTestResult(element));
  }

  return {
    error: "",
    testResult,
  };
}
