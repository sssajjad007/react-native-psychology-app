import { fetchOnSubmitTest } from "../adapters";
import { testResultState } from "../entities";

export async function onTestSubmit(
  testId: string,
  fields: Record<string, number>
) {
  const { error, testResult } = await fetchOnSubmitTest(testId, fields);
  if (error) {
    return {
      error,
      testResult: [],
    };
  }
  // console.log(testResult)
  testResultState.setTestResult(testResult);
  return {
    error: "",
    testResult,
  };
}
