import { request } from "../../../library";
import { parseProvider } from "../utils";

import type { IFetchProviderResult } from "../../types";

export async function fetchProvider(id: string): Promise<IFetchProviderResult> {
  const { success, error, httpStatus, payload } = await request({
    method: "GET",
    endpoint: `/users/${id}`,
    body: undefined,
  });
  if (!success) {
    return {
      error,
      provider: undefined,
    };
  }

  return {
    error: "",
    provider: parseProvider(payload),
  };
}
