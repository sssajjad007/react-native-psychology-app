import { request } from "../../../library";
import { parseTestHistory } from "../utils";

export async function fetchGetTestData(customerId: string) {
  const { error, httpStatus, payload, success } = await request({
    endpoint: `/tests/testHistory/${customerId}`,
    method: "GET",
    body: undefined,
  });

  if (!success || !Array.isArray(payload)) {
    return {
      error,
      httpStatus,
      testHistory: [],
    };
  }
  const testHistory = [];
  for (let index = 0; index < payload.length; index++) {
    const item = payload[index];
    testHistory.push(parseTestHistory(item));
  }
  return {
    error: "",
    testHistory,
  };
}
