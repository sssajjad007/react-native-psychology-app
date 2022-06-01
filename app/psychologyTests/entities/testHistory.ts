import { action, makeObservable, observable } from "mobx";
import type { ITestHistory } from "../types";

export class TestHistoryState {
  constructor() {
    makeObservable(this, {
      testHistory: observable,
      setTestHistory: action,
    });
  }
  testHistory: ITestHistory[] = [];
  setTestHistory(testHistory: ITestHistory[]) {
    this.testHistory = testHistory;
  }
}
