import { AppState as rnAppState } from "react-native";
import type { AppStateStatus } from "react-native";
import { observable, action, makeObservable } from "mobx";

export class AppState {
  constructor() {
    makeObservable(this, {
      status: observable,
      setStatus: action,
    });
  }
  status: AppStateStatus = rnAppState.currentState;
  setStatus(status: AppStateStatus) {
    this.status = status;
  }
}
