import { StyleSheet } from "react-native";
import { THEME } from "../theme";
import memoize from "fast-memoize";

function styleGenerator(boxSize?: number, boxColor?: string) {
  const radiusRatio = 16 / 40;
  const iconSizeRatio = 24 / 40;
  const size = boxSize ? boxSize : 40;
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      backgroundColor: boxColor ? boxColor : THEME.COLORS.PRIMARY.WHITEN_LIGHT,
      borderRadius: size * radiusRatio,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const iconSize = size * iconSizeRatio;
  return {
    styles,
    iconSize,
  };
}

export const styleGen = memoize(styleGenerator);
