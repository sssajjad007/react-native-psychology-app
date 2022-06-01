import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  questionNumber: {
    color: THEME.COLORS.PRIMARY.NORMAL,
  },
});
