import { secureStorage, storage } from "../../library";
import { authState } from "../entities";
export async function initToken() {
  const [token, refreshToken] = await Promise.all([
    secureStorage.retrieve("refresh_token"),
    secureStorage.retrieve("token"),
  ]);
  const tokenExpiresAt = storage.retrieve("token_expires_at", "number");
  const refreshExpiresAt = storage.retrieve("refresh_expires_at", "number");
  const role = storage.retrieve("role", "string");
  // authState.setRefreshToken(refreshToken || "");
  // authState.setToken(token || "");
  // authState.setTokenExpire(
  //   typeof tokenExpiresAt === "number" ? tokenExpiresAt : 0
  // );
  // authState.setRefreshExpire(
  //   typeof refreshExpiresAt === "number" ? refreshExpiresAt : 0
  // );
  if (role === "provider" || role === "customer") {
    authState.setRole(role);
  } else {
    authState.setRole("customer");
  }
  authState.setCredentials({
    token: token || "",
    refreshToken: refreshToken || "",
    tokenExpiresAt: typeof tokenExpiresAt === "number" ? tokenExpiresAt : 0,
    refreshExpiresAt:
      typeof refreshExpiresAt === "number" ? refreshExpiresAt : 0,
  });
 
}
