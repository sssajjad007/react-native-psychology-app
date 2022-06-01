import { request, logger } from "../../../library";
import { parseRefresh } from "../parsers";
import type { adapterTypes } from "../../types";

export async function fetchRefresh(
  args: adapterTypes.IFetchRefresh
): Promise<adapterTypes.IFetchRefreshResult> {
  const { userId, deviceId, jwtToken, refreshToken } = args;
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/authnz/refresh",
    method: "POST",
    body: {
      userId,
      xJwtToken: jwtToken,
      xRefreshToken: refreshToken,
      deviceId,
    },
  });
  if (!success) {
    const shouldLogout = httpStatus === 403 || httpStatus === 404;
    logger({
      container: "authentication",
      type: "error",
      path: { section: "adapters", file: "fetchRefresh" },
      logMessage: `httpStatus: ${httpStatus}, error: ${error}, should logout: ${shouldLogout}`,
    });
    return {
      jwtToken: "",
      refreshToken: "",
      jwtExpires: 0,
      refreshExpires: 0,
      shouldLogout,
      error: error,
    };
  }

  return parseRefresh(payload);
}
