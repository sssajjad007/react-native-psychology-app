import { observable, action, makeObservable } from "mobx";

export class QuestionnaireState {
  constructor() {
    makeObservable(this, {
      currentQuestion: observable,
      answers: observable,
      setCurrentQuestion: action,
      setAnswer: action,
      reset: action,
    });
  }
  currentQuestion: number = 1;
  answers: Record<string, number> = {};
  setCurrentQuestion(currentQuestion: number) {
    this.currentQuestion = currentQuestion;
  }
  setAnswer(question: number, answer: number) {
    this.answers[`${question}`] = answer;
  }
  reset() {
    this.answers = {};
    this.currentQuestion = 1;
  }
}
