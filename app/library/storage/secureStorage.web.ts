import { MMKV } from "react-native-mmkv";

const secureStorageWeb = new MMKV();

async function remove(key: string): Promise<void> {
  try {
    secureStorageWeb.delete(key);
  } catch (error) {
    // send this error to sentry or some where
    return undefined;
  }
}

async function retrieve(key: string): Promise<string | undefined> {
  try {
    const result = secureStorageWeb.getString(key);
    return result;
  } catch (error) {
    // send this error to sentry or some where
    return undefined;
  }
}

async function add(key: string, value: string): Promise<void> {
  try {
    secureStorageWeb.set(key, value);
  } catch (error) {
    // send this error to sentry or some where
  }
}

export const secureStorage = {
  remove,
  retrieve,
  add,
};
