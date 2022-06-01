import { fetchProviders } from "../adapters";
import { providerState } from "../entities";

export async function retrieveProviders() {
  const { error, providers } = await fetchProviders();
  if (error) {
    providerState.setProviders([]);
    return;
  }
  providerState.setProviders(providers);
}
