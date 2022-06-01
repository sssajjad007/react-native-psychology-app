import memoize from "fast-memoize";
import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

function styleGenerator(labelColor?: string) {
  const size = 64;
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: 16,
      backgroundColor: THEME.COLORS.GREY.WHITEN_LIGHT,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 4,
    },
    label: {
      fontSize: 14,
      color: labelColor ? labelColor : THEME.COLORS.BLACK.NORMAL,
    },
  });
  return {
    styles,
  };
}

export const styleGen = memoize(styleGenerator);
