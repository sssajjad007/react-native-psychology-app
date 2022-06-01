import { StyleSheet } from "react-native";
import { THEME } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.WIDE,
    height: 38,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 2,
  },
  iconContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 11,
    paddingRight: 16,
  },
  input: {
    flex: 1,
    fontFamily: THEME.FONTS.REGULAR,
  },
});

export const iconStyle = {
  size: 26,
  color: THEME.COLORS.GREY.NORMAL,
  selectionColor: THEME.COLORS.PRIMARY.DARK,
};
