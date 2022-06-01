import {
  secureStorage,
  toString,
  storage,
  logger,
  resetNetworkCredentialsEvent,
} from "../../library";
import { fetchPasswordlessVerify } from "../adapters";
import { inputState, authState } from "../entities";

export async function passwordlessVerify() {
  if (!inputState.otpNumber) {
    inputState.setOtpValidation(["کد تایید را وارد کنید"]);
    return;
  }
  const deviceId = toString(storage.retrieve("device_id", "string"));
  if (!deviceId) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "usecases", file: "passwordlessVerify" },
      logMessage: "deviceId must be defined in this step, it's not defined",
    });
    return;
  }
  if (!authState.otpToken) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "usecases", file: "passwordlessVerify" },
      logMessage: "otpToken must be defined in this step, it's not defined",
    });
    return;
  }
  const { error, jwt, jwtExpires, refreshExpires, refreshToken, role, userId } =
    await fetchPasswordlessVerify({
      otpCode: inputState.otpNumber,
      deviceId,
      otpToken: authState.otpToken,
    });
  if (error) {
    inputState.setOtpValidation([error]);
    inputState.setOtpNumber("");
    return;
  }
  if (
    !jwt ||
    !refreshToken ||
    !refreshExpires ||
    !jwtExpires ||
    !role ||
    !userId
  ) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "usecases", file: "passwordlessVerify" },
      logMessage: `jwt: ${typeof jwt}, refreshToken: ${typeof refreshToken}, refreshExpires: ${typeof refreshExpires},
       jwtExpires: ${typeof jwtExpires}, role: ${typeof role}, userId: ${typeof userId}`,
    });
    return;
  }
  try {
    await Promise.all([
      secureStorage.add("refresh_token", refreshToken),
      secureStorage.add("token", jwt),
    ]);
  } catch (error) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "usecases", file: "passwordlessVerify" },
      logMessage: `secure storage add refresh and jwt error: ${error}`,
    });
    return;
  }

  storage.add("token_expires_at", jwtExpires);
  storage.add("refresh_expires_at", refreshExpires);
  storage.add("role", role);
  storage.add("user_id", userId);
  if (role === "customer" || role === "provider") {
    authState.setRole(role);
  } else {
    logger({
      container: "authnz",
      type: "warn",
      path: { section: "usecases", file: "passwordlessVerify" },
      logMessage: `role not defined properly: ${role}`,
    });
    authState.setRole("customer");
  }
  // authState.setRefreshToken(refreshToken);
  // authState.setToken(jwt);
  // authState.setRefreshExpire(refreshExpires);
  // authState.setTokenExpire(jwtExpires);
  authState.setCredentials({
    token: jwt,
    refreshToken: refreshToken,
    tokenExpiresAt: jwtExpires,
    refreshExpiresAt: refreshExpires,
  });
  authState.setOtpToken("");
  inputState.reset();
  resetNetworkCredentialsEvent();
}
