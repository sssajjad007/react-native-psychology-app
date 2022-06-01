import { fetchUpdateUser } from "../adapters";
import { profileState } from "../entities";

export async function updateUser() {
  const { error, user } = await fetchUpdateUser({
    profilePictureUrl: profileState.profilePictureUrl,
    firstName: profileState.firstName,
    lastName: profileState.lastName,
    description: profileState.description,
  });
  if (error) {
    return;
  }
}
