import { toString } from "../../../library";
import type { tPayload } from "../../../library";
import type { adapterTypes } from "../../types";

export function parsePasswordlessVerify(
  payload: tPayload
): adapterTypes.IFetchPasswordlessVerifyResult {
  if (!payload) {
    return {
      error: "خطا دریافت داده از سرور.",
      jwt: "",
      role: "",
      refreshToken: "",
      jwtExpires: 0,
      refreshExpires: 0,
      userId: "",
    };
  }
  return {
    error: "",
    jwt: toString(payload.jwtToken),
    refreshToken: toString(payload.refreshToken),
    refreshExpires: Number(payload.refreshTokenExpiresAt),
    jwtExpires: Number(payload.jwtTokenExpiresAt),
    role: toString(payload.role),
    userId: toString(payload.userId),
  };
}
