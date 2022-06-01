import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    height: 84,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  dayInput: {
    width: "20%",
    height: 56,
  },
  monthInput: {
    width: "20%",
    height: 56,
  },
  yearInput: {
    width: "40%",
    height: 56,
  },
  activeBorder: {
    borderWidth: 1,
    borderRadius: 6,
    // paddingTop: 16,
    borderColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  deActiveBorder: {
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLORS.GREY.LIGHT,
  },
});
