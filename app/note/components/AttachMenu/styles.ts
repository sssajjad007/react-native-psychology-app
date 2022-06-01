import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: widthPercentageToDP(12),
    bottom: 16,
    width: THEME.WIDTH.SMALL,
    height: 76,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
  },
});
