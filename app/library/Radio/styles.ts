import { StyleSheet } from "react-native";
import memoize from "fast-memoize";
import { THEME } from "../theme";
import { IRadioButtonStyles } from "./types";
function styleGenerator(args: IRadioButtonStyles) {
  const { checked, size } = args;
  const buttonSize = size - 2;
  const styles = StyleSheet.create({
    container: {
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize / 2,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
    },
    activeContainer: {
      borderColor: THEME.COLORS.PRIMARY.NORMAL,
    },
    deActiveContainer: {
      borderColor: THEME.COLORS.GREY.LIGHT,
    },
    dot: {
      width: buttonSize - Math.floor(buttonSize / 2),
      height: buttonSize - Math.floor(buttonSize / 2),
      borderRadius: (buttonSize - Math.floor(buttonSize / 2)) / 2,
    },
    activeDot: {
      backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    },
    deActiveDot: {
      backgroundColor: THEME.COLORS.GREY.NORMAL,
    },
  });
  const containerStyle = [
    styles.container,
    checked ? styles.activeContainer : styles.deActiveContainer,
  ];
  const dotStyle = [
    styles.dot,
    checked ? styles.activeDot : styles.deActiveDot,
  ];
  return {
    containerStyle,
    dotStyle,
  };
}

export const styleGen = memoize(styleGenerator);
