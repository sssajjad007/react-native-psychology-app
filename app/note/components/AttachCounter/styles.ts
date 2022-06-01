import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

const size = 16
export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    left: widthPercentageToDP(3),
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: THEME.COLORS.SECONDARY.NORMAL,
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    color: "white",
  },
});
