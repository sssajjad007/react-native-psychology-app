import { fetchProviderInfo } from "../adapters";
import { dashboardState } from "../entities";

export async function retrieveProvider() {
  const { error, id, name, profilePictureUrl, description } =
    await fetchProviderInfo();
  if (error) {
    dashboardState.setProvider({
      id: "",
      name: "",
      profilePictureUrl: "",
      description: "",
    });
  }
  dashboardState.setProvider({
    id,
    name,
    profilePictureUrl,
    description,
  });
}
