import { logger as rnLogger, consoleTransport } from "react-native-logs";

import type { ILogger } from "./types";

const log = rnLogger.createLogger({
  levels: {
    debug: 0,
    network: 1,
    state: 2,
    info: 3,
    warn: 4,
    error: 5,
  },
  transport: consoleTransport,
  enabled: true,
  printDate: true,
  printLevel: true,
  severity: "debug",
  transportOptions: {
    colors: {
      debug: "magentaBright",
      network: "blueBright",
      state: "greenBright",
      info: "cyanBright",
      warn: "yellowBright",
      error: "redBright",
    },
  },
});

function startWithCapitalLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function logger(logInfo: ILogger) {
  if (!__DEV__) return;
  const { container, type, path, logMessage } = logInfo;
  const { section, file } = path;
  const message = `${startWithCapitalLetter(
    container
  )} -> ${startWithCapitalLetter(section)} -> ${startWithCapitalLetter(
    file
  )}: ${logMessage}`;
  switch (type) {
    case "debug":
      log.debug(message);
      break;
    case "network":
      log.network(message);
      break;
    case "state":
      log.state(message);
      break;
    case "info":
      log.info(message);
      break;
    case "warn":
      log.warn(message);
      break;
    case "error":
      log.error(message);
      break;
    default:
      log.debug(message);
      break;
  }
}
