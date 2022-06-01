import { MMKV } from "react-native-mmkv";
import type { tStorageType, tStorageResult } from "./types";
const mmkv = new MMKV();
function remove(key: string) {
  try {
    mmkv.delete(key);
  } catch (error) {
    // send error to sentry
  }
}

function retrieve<T extends tStorageType>(key: string, type: T): tStorageResult<T> {
  try {
    if (type === "string") {
      return mmkv.getString(key) as tStorageResult<T>;
    }
    if (type === "number") {
      return mmkv.getNumber(key) as tStorageResult<T>;
    }
    if (type === "boolean") {
      return mmkv.getBoolean(key) as tStorageResult<T>;
    }
    return undefined as tStorageResult<T>
  } catch (error) {
    return undefined as tStorageResult<T>
    // send error to sentry
    // return undefined;
  }
}

function add(key: string, value: string | number | boolean) {
  try {
    mmkv.set(key, value);
  } catch (error) {
    // send error to sentry
  }
}

function has(key: string) {
  try {
    return mmkv.contains(key);
  } catch (error) {
    return false;
  }
}

export const storage = {
  remove,
  retrieve,
  add,
  has,
};
