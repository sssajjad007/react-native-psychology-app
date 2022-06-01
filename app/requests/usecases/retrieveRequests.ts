import { fetchRequests } from "../adapters";
import { requestState } from "../entities";

export async function retrieveRequests() {
  const { error, requests } = await fetchRequests();
  if (error) {
    // TODO: handle error
  }
  requestState.setRequests(requests);
}
