import { request } from "../../../library";
import { IFetchCustomersInfo } from "../../types";
import { parseCustomer } from "../utils";

export async function fetchGetUser(
  userId: string
): Promise<IFetchCustomersInfo> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/users/${userId}`,
    method: "GET",
    body: undefined,
  });

  if (!success) {
    return {
      error,
      customer: undefined,
    };
  }

  return {
    error: "",
    customer: parseCustomer(payload),
  };
}
