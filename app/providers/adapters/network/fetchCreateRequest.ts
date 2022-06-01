import { request } from "../../../library";
import { parseRequest } from "../utils";

import type { IFetchCreateRequestResult } from "../../types";

export async function fetchCreateRequest(
  providerId: string
): Promise<IFetchCreateRequestResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/business/requests",
    method: "POST",
    body: {
      providerId,
    },
  });
  if (!success) {
    return {
      error,
      nameMustBeDefined: httpStatus === 400,
      request: undefined,
    };
  }
  return {
    error: "",
    nameMustBeDefined: false,
    request: parseRequest(payload),
  };
}
