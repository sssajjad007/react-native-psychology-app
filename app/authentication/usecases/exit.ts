import { secureStorage, storage } from "../../library";
import { authState } from "../entities";

export async function exit() {
  await Promise.all([
    secureStorage.remove("refresh_token"),
    secureStorage.remove("token"),
  ]);
  storage.remove("token_expires_at");
  storage.remove("refresh_expires_at");
  storage.remove("role");
  // authState.setRefreshToken("");
  // authState.setToken("");
  // authState.setTokenExpire(0);
  // authState.setRefreshExpire(0);
  authState.resetCredentials();
}
