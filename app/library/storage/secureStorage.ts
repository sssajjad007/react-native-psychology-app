import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

async function remove(key: string): Promise<void> {
  try {
    await deleteItemAsync(key);
  } catch (error) {
    // send this error to sentry or some where
    return undefined;
  }
}

async function retrieve(key: string): Promise<string | undefined> {
  try {
    const result = await getItemAsync(key);
    return result ? result : undefined;
  } catch (error) {
    // send this error to sentry or some where
    return undefined;
  }
}

async function add(key: string, value: string): Promise<void> {
  try {
    await setItemAsync(key, value);
  } catch (error) {
    // send this error to sentry or some where
  }
}

export const secureStorage = {
  remove,
  retrieve,
  add,
};
