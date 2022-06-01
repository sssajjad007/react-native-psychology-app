import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  taskMenuContainer: {
    width: THEME.WIDTH.SMALL,
    backgroundColor: "white",
    height: 36 * 2 + 2,
    top: 24,
    left: THEME.WIDTH.WIDE - THEME.WIDTH.SMALL - 30,
    borderRadius: 12,
    elevation: 3,
  },
  horizontalLine: {
    width: THEME.WIDTH.SMALL,
    height: StyleSheet.hairlineWidth,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
  },
});
