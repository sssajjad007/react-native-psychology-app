import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.WIDE,
    height: 56,
    backgroundColor: "white",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 16,
    borderRadius: 12,
    elevation: 2,
    overflow: "hidden",
  },
});

export const iconColor = THEME.COLORS.PRIMARY.NORMAL;
