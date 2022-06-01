export type tLogType =
  | "debug"
  | "network"
  | "state"
  | "info"
  | "warn"
  | "error";
export type tSection =
  | "adapters"
  | "assets"
  | "components"
  | "entities"
  | "screens"
  | "types"
  | "usecases"
  | "library";

export interface ILogger {
  type: tLogType;
  container: string;
  path: {
    section: tSection;
    file: string;
  };
  logMessage: string;
}
