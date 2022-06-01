import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(40),
    height: 120,
    backgroundColor: "white",
    borderRadius: 12,
    shadowRadius: 2,
    elevation: 2,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export const iconStyle = {
  color: THEME.COLORS.PRIMARY.NORMAL,
  size: 64,
};
