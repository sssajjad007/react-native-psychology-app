import { fetchRemoveProvider } from "../adapters";
import { providerState } from "../entities";

export async function removeProvider(providerId: string) {
  const { error, payload } = await fetchRemoveProvider(providerId);
  if (error) {
    return error;
  }
  providerState.setRemoveRequest();

  return payload;
}
