import { storage } from "../../library";
import { questionnaireState } from "../entities";

export function continueTestSession(testId: string, fieldSize: number) {
  for (let index = 1; index < fieldSize; index++) {
    const key = `${testId}@${index}`;
    const keyExists = storage.has(key);
    if (!keyExists) continue;
    const answer = storage.retrieve(key, "number");
    if (typeof answer === "number") {
      questionnaireState.setAnswer(index, answer);
    }
  }
  const currentQuestionIndex = Object.keys(questionnaireState.answers).length;
  questionnaireState.setCurrentQuestion(
    currentQuestionIndex === fieldSize ? fieldSize : currentQuestionIndex + 1
  );
}
