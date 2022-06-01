import { request } from "../../../library";

export async function fetchRemoveCustomers(customerId: String) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/business/customers/${customerId}`,
    method: "DELETE",
    body: undefined,
  });
  if (!success) {
    error;
  }
  return {
    error: "",
    payload,
  };
}
