import { request } from "../../../library";
import { parseProvider } from "../utils";

import type { IFetchProvidersResult, IProvider } from "../../types";

export async function fetchProviders(): Promise<IFetchProvidersResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/users/providers",
    body: undefined,
    method: "GET",
  });
  if (!success) {
    return { error, providers: [] };
  }
  if (Array.isArray(payload)) {
    const result: IProvider[] = [];
    for (let index = 0; index < payload.length; index++) {
      const provider = payload[index];
      result.push(parseProvider(provider));
    }
    return {
      error: "",
      providers: result,
    };
  }
  return {
    error: "دکتر یافت نشد!",
    providers: [],
  };
}
