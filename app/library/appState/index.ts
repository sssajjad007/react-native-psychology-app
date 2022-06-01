import { AppState as rnAppState, Platform } from "react-native";
import { updateNetInfo } from "../netInfo";
import { AppState } from "./state";

const appState = new AppState();

export function getAppState() {
  return appState.status;
}

export function removeAppStateListeners() {
  rnAppState.removeEventListener("change", (event) => {
    if (event === "active") {
      updateNetInfo();
    }
    // logger({
    //   container: "app",
    //   type: "info",
    //   path: { section: "library", file: "appState/index" },
    //   logMessage: "app state change listener removed",
    // });
  });
  if (Platform.OS === "android") {
    rnAppState.removeEventListener("blur", () => {
      // logger({
      //   container: "app",
      //   type: "info",
      //   path: { section: "library", file: "appState/index" },
      //   logMessage: "app state blur listener removed",
      // });
    });
    rnAppState.removeEventListener("focus", () => {
      // logger({
      //   container: "app",
      //   type: "info",
      //   path: { section: "library", file: "appState/index" },
      //   logMessage: "app state focus listener removed",
      // });
    });
  }
  rnAppState.removeEventListener("memoryWarning", () => {
    // logger({
    //   container: "app",
    //   type: "info",
    //   path: { section: "library", file: "appState/index" },
    //   logMessage: "app state memory warning listener removed",
    // });
  });
}

export function registerAppState() {
  rnAppState.addEventListener("change", (event) => {
    // logger({
    //   container: "app",
    //   type: "info",
    //   path: { section: "library", file: "appState/index" },
    //   logMessage: "app state change, event: " + event,
    // });
    appState.setStatus(event);
  });
  if (Platform.OS === "android") {
    rnAppState.addEventListener("blur", (event) => {
      // logger({
      //   container: "app",
      //   type: "info",
      //   path: { section: "library", file: "appState/index" },
      //   logMessage: "app state blur, event: " + event,
      // });
    });
    rnAppState.addEventListener("focus", (event) => {
      // logger({
      //   container: "app",
      //   type: "info",
      //   path: { section: "library", file: "appState/index" },
      //   logMessage: "app state focus, event: " + event,
      // });
    });
  }

  rnAppState.addEventListener("memoryWarning", (event) => {
    // logger({
    //   container: "app",
    //   type: "warn",
    //   path: { section: "library", file: "appState/index" },
    //   logMessage: "memory leak in app state, event: " + event,
    // });
  });
}
