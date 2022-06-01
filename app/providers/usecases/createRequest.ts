import { fetchCreateRequest, fetchProvider } from "../adapters";
import { providerState } from "../entities";

export async function createRequest(providerId: string) {
  const {
    error: createRequestError,
    request,
    nameMustBeDefined,
  } = await fetchCreateRequest(providerId);
  if (nameMustBeDefined) {
    return nameMustBeDefined;
  }
  if (createRequestError || !request) {
    return;
  }
  const { providerId: id } = request;
  const { error: userError, provider } = await fetchProvider(id);
  if (userError || !provider) {
    return;
  }
  providerState.setRequestConfirmed(request.requestConfirmed);
  providerState.setMyProvider(provider);
}
