import { action, makeObservable, observable } from "mobx";
import { ITestResult } from "../types";

export class TestResultState {
  constructor() {
    makeObservable(this, {
      testResult: observable,
      setTestResult: action,
    });
  }
  testResult: ITestResult[] = [];
  setTestResult(testResult: ITestResult[]) {
    this.testResult = testResult;
  }
}
