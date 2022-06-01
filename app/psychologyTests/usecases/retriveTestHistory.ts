import { logger } from "../../library";
import { fetchGetTestData } from "../adapters";
import { testHistoryState } from "../entities";

export async function retiriveTestHistory(customerId: string) {
  const { error, testHistory, httpStatus } = await fetchGetTestData(customerId);
  if (error) {
    logger({
      container: "psychologyTests",
      path: { section: "usecases", file: "retriveTestHistory" },
      type: "error",
      logMessage: `Error in retriveTestHistory: ${error}`,
    });
    if (httpStatus === 404) {
      testHistoryState.setTestHistory([]);
    }
    return error;
  }
  testHistoryState.setTestHistory(testHistory);
}
