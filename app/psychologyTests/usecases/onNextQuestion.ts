import { questionnaireState, testDetailState } from "../entities";

export function onNextQuestion() {
  if (questionnaireState.currentQuestion === testDetailState.fieldSize) {
    return;
  }
  questionnaireState.setCurrentQuestion(questionnaireState.currentQuestion + 1);
}
