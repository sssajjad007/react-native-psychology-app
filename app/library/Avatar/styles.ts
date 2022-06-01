import { StyleSheet } from "react-native";
import memoize from "fast-memoize";
import { THEME } from "../theme";

function styleGenerator(size: number) {
  return StyleSheet.create({
    image: {
      width: size,
      height: size,
    },
  });
}

export const borderRadius = 16;
export const color = THEME.COLORS.PRIMARY.NORMAL;

export const styleGen = memoize(styleGenerator);
