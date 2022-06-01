import { fetchRemoveRequest } from "../adapters";
import { providerState } from "../entities";

export async function removeRequest() {
  const { error, payload } = await fetchRemoveRequest();
  if (error) {
    return error;
  }
  providerState.setRemoveRequest();
  
  return payload;
}
