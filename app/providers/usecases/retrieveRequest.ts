import { fetchRequest, fetchProvider } from "../adapters";
import { providerState } from "../entities";
import { logger } from "../../library";
export async function retrieveRequest() {
  const { error: requestError, request } = await fetchRequest();
  if (requestError) {
    logger({
      container: "providers",
      path: { section: "usecases", file: "retrieveRequest" },
      type: "info",
      logMessage: `requestError: ${requestError}`,
    });
    providerState.setRemoveRequest();
    // TODO : handle error
    return;
  }
  if (!request) {
    logger({
      container: "providers",
      path: { section: "usecases", file: "retrieveRequest" },
      type: "error",
      logMessage: `request must be defined: ${request}`,
    });
    return;
  }
  const { providerId, requestConfirmed } = request;

  const { error: userError, provider } = await fetchProvider(providerId);
  if (userError) {
    logger({
      container: "providers",
      path: { section: "usecases", file: "retrieveRequest" },
      type: "info",
      logMessage: `userError: ${userError}`,
    });
    return;
  }
  if (!provider) {
    logger({
      container: "providers",
      path: { section: "usecases", file: "retrieveRequest" },
      type: "debug",
      logMessage: `provider is not defined`,
    });
    return;
  }
  providerState.setRequestConfirmed(requestConfirmed);
  providerState.setMyProvider(provider);
}
