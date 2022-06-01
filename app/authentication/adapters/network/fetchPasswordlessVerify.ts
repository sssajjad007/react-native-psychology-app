import { request, toString, logger } from "../../../library";
import { parsePasswordlessVerify } from "../parsers";
import { adapterTypes } from "../../types";
export async function fetchPasswordlessVerify(
  info: adapterTypes.IFetchPasswordlessVerify
): Promise<adapterTypes.IFetchPasswordlessVerifyResult> {
  const { deviceId, otpCode, otpToken } = info;
  // const deviceId = storage.retrieve("device_id", "string");
  const { success, payload, error, httpStatus } = await request({
    endpoint: "/authnz/passwordless/verify",
    method: "POST",
    body: { otpCode, otpToken, deviceId },
  });

  if (!success) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "adapters", file: "fetchPasswordlessVerify" },
      logMessage: `httpStatus: ${httpStatus}, error: ${error}`,
    });
    return {
      error,
      jwt: "",
      role: "",
      refreshToken: "",
      jwtExpires: 0,
      refreshExpires: 0,
      userId: "",
    };
  }

  return parsePasswordlessVerify(payload);
}
