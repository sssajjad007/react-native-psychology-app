import { request, toString } from "../../../library";
import { parseRequest } from "../utils";

import type { IFetchRequestResult } from "../../types";

export async function fetchRequest(): Promise<IFetchRequestResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/business/requests/customer",
    method: "GET",
    body: undefined,
  });
  const errorMessage = httpStatus === 404 ? "درخواستی یافت نشد" : error;
  if (!success) {
    return {
      error: errorMessage,
      request: undefined,
    };
  }
  return {
    error: "",
    request: parseRequest(payload),
  };
}
