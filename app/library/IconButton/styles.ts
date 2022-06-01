import { StyleSheet } from "react-native";
import colorConvertor from "color";
import memoize from "fast-memoize";
import { THEME } from "../theme";
import { IIconStyleGen } from "./types";

function iconStyleGenFunc(args: IIconStyleGen) {
  const { color, size } = args;
  const iconColor = color ? color : THEME.COLORS.PRIMARY.NORMAL;
  const iconSize = size ? size : 24;
  const rippleColor = colorConvertor(iconColor).alpha(0.32).rgb().string();
  const styles = StyleSheet.create({
    container: {
      width: size ? size + 4 : 24,
      height: size ? size + 4 : 24,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return {
    styles,
    iconColor,
    iconSize,
    rippleColor,
  };
}

export const iconStyleGen = memoize(iconStyleGenFunc);
