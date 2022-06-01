import { logger } from "../../library";
import { fetchGetTestResultById } from "../adapters";
import { testResultState } from "../entities";

export async function retrieveTestResult(testId: string, customerId: string) {
  const { error, testResult, resultSummary } = await fetchGetTestResultById(
    testId,
    customerId
  );
  if (error) {
    logger({
      container: "psychologyTests",
      path: { section: "usecases", file: "retrieveTestResult" },
      type: "error",
      logMessage: `Error retrieving test result: ${error}`,
    });
    return {
      error,
      testResult: [],
    };
  }
  logger({
    container: "psychologyTests",
    path: { section: "usecases", file: "retrieveTestResult" },
    type: "info",
    logMessage: `Test result retrieved for testId: ${testId}`,
  });
  testResultState.setTestResult(testResult);
  return resultSummary;
}
