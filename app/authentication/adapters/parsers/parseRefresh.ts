import { toString } from "../../../library";
import type { tPayload } from "../../../library";
import type { adapterTypes } from "../../types";

export function parseRefresh(
  payload: tPayload
): adapterTypes.IFetchRefreshResult {
  if (!payload) {
    return {
      jwtToken: "",
      refreshToken: "",
      jwtExpires: 0,
      refreshExpires: 0,
      shouldLogout: false,
      error: "",
    };
  }
  return {
    jwtToken: toString(payload.jwtToken),
    refreshToken: toString(payload.refreshToken),
    jwtExpires: Number(payload.jwtTokenExpiresAt),
    refreshExpires: Number(payload.refreshTokenExpiresAt),
    shouldLogout: false,
    error: "",
  };
}
