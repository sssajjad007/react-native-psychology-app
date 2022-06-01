import { autorun } from "mobx";

import {
  storage,
  secureStorage,
  toString,
  logger,
  getAppState,
} from "../../library";
import { fetchRefresh } from "../adapters";
import { authState } from "../entities";
import { exit } from "./exit";
let refreshTimer: NodeJS.Timer;
let refreshRetryCount = 0;

const refreshRetryLimit = 3;
const refreshTimeSkew = 60 * 1000; // 60 seconds
const refreshTimeThreshold = 45 * 60 * 1000; // 45 minutes
const refreshRetryTime = 5 * 1000;

function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, refreshRetryTime);
  });
}

export function isTokenExpired() {
  const tokenExpiresAt = storage.retrieve("token_expires_at", "number");
  if (typeof tokenExpiresAt === "number") {
    return tokenExpiresAt < Date.now() + refreshTimeThreshold + refreshTimeSkew;
  }
  return true;
}

export async function refresh(): Promise<void> {
  logger({
    container: "authentication",
    type: "info",
    path: { section: "usecases", file: "silentRefresh" },
    logMessage: "token expired, refreshing",
  });
  const userId = toString(storage.retrieve("user_id", "string"));
  if (!userId) {
    logger({
      container: "authentication",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "user id is not defined",
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  const deviceId = toString(storage.retrieve("device_id", "string"));
  if (!deviceId) {
    logger({
      container: "authentication",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "device id is not defined",
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  const [xToken, xRefreshToken] = await Promise.all([
    secureStorage.retrieve("token"),
    secureStorage.retrieve("refresh_token"),
  ]);
  if (!xToken || !xRefreshToken) {
    // token or refresh token is not defined
    // should exit the app;
    logger({
      container: "authentication",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: `token or refresh token is not defined.
       xToken: ${xToken}, xRefresh token: ${xRefreshToken}`,
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  // console.log({ refreshTokenLength: xRefreshToken.length, xRefreshToken });
  const {
    error,
    shouldLogout,
    jwtToken,
    refreshToken,
    jwtExpires,
    refreshExpires,
  } = await fetchRefresh({
    userId,
    deviceId,
    jwtToken: xToken,
    refreshToken: xRefreshToken,
  });

  if (shouldLogout) {
    logger({
      container: "authnz",
      type: "info",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "refresh invalidated token, logging out",
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  if (error) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "refresh error: " + error,
    });
    if (error.includes("زمان") || error.includes("دسترسی")) {
      return;
    }
    await wait();
    if (refreshRetryCount < refreshRetryLimit) {
      refreshRetryCount++;
      return await refresh();
    }
    // TODO: show error
    clearInterval(refreshTimer);
    return await exit();
  }
  // reset refresh retry count if success full
  refreshRetryCount = 0;
  try {
    await Promise.all([
      secureStorage.add("token", jwtToken),
      secureStorage.add("refresh_token", refreshToken),
    ]);
  } catch (error) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "secure storage add refresh and jwt error: " + error,
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  storage.add("token_expires_at", jwtExpires);
  storage.add("refresh_expires_at", refreshExpires);
  // authState.setToken(jwtToken);
  // authState.setRefreshToken(refreshToken);
  // authState.setTokenExpire(jwtExpires);
  // authState.setRefreshExpire(refreshExpires);
  authState.setCredentials({
    token: jwtToken,
    refreshToken: refreshToken,
    tokenExpiresAt: jwtExpires,
    refreshExpiresAt: refreshExpires,
  });
}

export function registerSilentRefresh() {
  const silentRefreshAutoRunDisposer = autorun(() => {
    const appState = getAppState();
    if (appState !== "active") {
      logger({
        container: "authentication",
        path: { section: "usecases", file: "silentRefresh" },
        type: "info",
        logMessage: `app inactive, state: ${appState}, clearInterval`,
      });
      clearInterval(refreshTimer);
      return;
    }
    if (
      !authState.token ||
      !authState.refreshToken ||
      !authState.tokenExpiresAt
    ) {
      logger({
        container: "authentication",
        path: { section: "usecases", file: "silentRefresh" },
        type: "info",
        logMessage: `token or refresh token is not defined, or token expire time is zero. token: ${authState.token}, refreshToken: ${authState.refreshToken},
        token expires at: ${authState.tokenExpiresAt}`,
      });
      clearInterval(refreshTimer);
      return;
    }

    if (isTokenExpired()) {
      logger({
        container: "authentication",
        path: { section: "usecases", file: "silentRefresh" },
        type: "info",
        logMessage: `token is already expired, tokenExpiresAt: ${
          authState.tokenExpiresAt
        }, now: ${Date.now()}`,
      });
      refresh();
    } else {
      logger({
        container: "authentication",
        path: { section: "usecases", file: "silentRefresh" },
        type: "info",
        logMessage: `token is not expired, setting interval`,
      });
      // time to refresh the token is : time token expires minus now minus four seconds
      // refresh request is going to be done four seconds before token expires
      const timeToRefresh =
        authState.tokenExpiresAt -
        Date.now() +
        refreshTimeThreshold +
        refreshTimeSkew;
      if (timeToRefresh < refreshTimeThreshold) {
        logger({
          container: "authentication",
          path: { section: "usecases", file: "silentRefresh" },
          type: "info",
          logMessage: `before interval, token expires in less than ${
            refreshTimeThreshold / (60 * 1000)
          } minutes, refreshing. time to refresh: ${timeToRefresh}`,
        });
        // if time to refresh is less than 10 seconds, then refresh
        refresh();
        return;
      }
      if (refreshTimer) {
        clearInterval(refreshTimer);
      }
      const oneMinutesInMsc = 60 * 1000;
      const interval =
        timeToRefresh > oneMinutesInMsc ? oneMinutesInMsc : timeToRefresh;

      refreshTimer = setInterval(() => {
        const timeToRefresh =
          authState.tokenExpiresAt -
          Date.now() +
          refreshTimeThreshold +
          refreshTimeSkew;
        if (timeToRefresh < refreshTimeThreshold) {
          // if time to refresh is less than 45 minutes, then refresh
          logger({
            container: "authentication",
            path: { section: "usecases", file: "silentRefresh" },
            type: "info",
            logMessage: `in interval, token expires in less than ${
              refreshTimeThreshold / (60 * 1000)
            } minutes, refreshing. time to refresh: ${timeToRefresh}`,
          });
          refresh();
          return;
        }
        logger({
          container: "authentication",
          path: { section: "usecases", file: "silentRefresh" },
          type: "info",
          logMessage: `interval ran, but token is not refreshed, time to refresh in minutes: ${
            timeToRefresh / (60 * 1000)
          }`,
        });
      }, interval);
    }
  });
  return silentRefreshAutoRunDisposer;
}
