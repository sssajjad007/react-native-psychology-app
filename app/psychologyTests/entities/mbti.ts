import { action, makeObservable, observable } from "mobx";
import { tMbtiAnswers } from "../types";

export class MbtiState {
  constructor() {
    makeObservable(this, {
      mbtiResult: observable,
      setMbtiResult: action,
    });
  }
  mbtiResult: tMbtiAnswers = undefined;
  setMbtiResult(mbtiResult: tMbtiAnswers) {
    this.mbtiResult = mbtiResult;
  }
}
