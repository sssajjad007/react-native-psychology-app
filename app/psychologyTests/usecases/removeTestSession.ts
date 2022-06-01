import { storage } from "../../library";
import { questionnaireState } from "../entities";

export function removeTestSession(testId: string, fieldSize: number) {
  for (let index = 1; index <= fieldSize; index++) {
    storage.remove(`${testId}@${index}`);
  }
  questionnaireState.reset();
}
