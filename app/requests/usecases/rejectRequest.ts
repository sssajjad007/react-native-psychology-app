import { fetchRejectRequest } from "../adapters";
import { requestState } from "../entities";

export async function rejectRequest(customerId: string) {
  const { error, removed } = await fetchRejectRequest(customerId);
  if (!removed) {
    // TODO: handle error
    return;
  }
  requestState.removeRequest(customerId);
}
