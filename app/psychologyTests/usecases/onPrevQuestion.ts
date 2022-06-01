import { questionnaireState } from "../entities";

export function onPrevQuestion() {
  if (questionnaireState.currentQuestion === 1) {
    return;
  }
  questionnaireState.setCurrentQuestion(questionnaireState.currentQuestion - 1);
}
