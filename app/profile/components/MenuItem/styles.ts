import { StyleSheet } from "react-native";
import memoize from "fast-memoize";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

function styleGenerator(logout: boolean | undefined) {
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP(100),
      backgroundColor: "white",
      height: 60,
      paddingHorizontal: widthPercentageToDP(5),
    },
    menuContainer: {
      flex: 1,
      flexDirection: "row-reverse",
      alignItems: "center",
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 16,
      backgroundColor: logout
        ? THEME.COLORS.TRANSPARENT.RED
        : THEME.COLORS.TRANSPARENT.PRIMARY,
      alignItems: "center",
      justifyContent: "center",
    },
    itemText: {
      paddingRight: 16,
    },
    line: {
      width: widthPercentageToDP("90"),
      height: StyleSheet.hairlineWidth,
      backgroundColor: THEME.COLORS.GREY.LIGHT,
      alignSelf: "center",
    },
  });
  const iconStyle = {
    color: logout ? THEME.COLORS.RED.NORMAL : THEME.COLORS.PRIMARY.NORMAL,
    size: 24,
  };
  return {
    styles,
    iconStyle,
  };
}

export const styleGen = memoize(styleGenerator);
