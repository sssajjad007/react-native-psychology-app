import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    right: 16,
    left: 0,
    bottom: 16,
  },
  scrollerContainerView: {
    alignItems: "center",
    paddingTop: 16,
  },
});
