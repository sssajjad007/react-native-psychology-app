import { request } from "../../../library";
import { parseRequest } from "../utils";
import type { IFetchRequestsResult, IRequest } from "../../types";

export async function fetchRequests(): Promise<IFetchRequestsResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/business/requests/provider",
    method: "GET",
    body: undefined,
  });
  if (!success || !Array.isArray(payload)) {
    return {
      error,
      requests: [],
    };
  }
  const parsedRequests: IRequest[] = [];
  for (let index = 0; index < payload.length; index++) {
    const request = payload[index];
    parsedRequests.push(parseRequest(request));
  }
  return {
    error: "",
    requests: parsedRequests,
  };
}
