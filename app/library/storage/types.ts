export type tStorageType = "string" | "number" | "boolean";

export type tStorageResult<T> = T extends "string"
  ? string | undefined
  : T extends "number"
  ? number | undefined
  : T extends "boolean"
  ? boolean | undefined
  : never;
