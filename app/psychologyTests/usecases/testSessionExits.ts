import { storage } from "../../library";

export function testSessionExists(testId: string) {
  return storage.has(`${testId}@1`);
}
