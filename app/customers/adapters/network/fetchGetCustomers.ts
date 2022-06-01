import { request } from "../../../library";
import { parseCustomer } from "../utils";
import type { ICustomer, IFetchGetRequests } from "../../types";

export async function fetchGetCustomers(): Promise<IFetchGetRequests> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/business/customers",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error,
      customers: [],
    };
  }
  if (Array.isArray(payload)) {
    const result: ICustomer[] = [];
    for (let index = 0; index < payload.length; index++) {
      const customers = payload[index];
      result.push(parseCustomer(customers));
    }
    return {
      error: "",
      customers: result,
    };
  }
  return {
    error: "مریضی یافت نشد!",
    customers: [],
  };
}
