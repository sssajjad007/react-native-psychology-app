import { StyleSheet } from "react-native";
import memoize from "fast-memoize";
import { THEME } from "../../../library";

function styleGenerator(size: number) {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: THEME.COLORS.GREY.LIGHT,
      borderRadius: size / 2,
    },
    image: {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
    cameraContainer: {
      position: "absolute",
      bottom: -size / 40,
      right: -size / 40,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: THEME.COLORS.PRIMARY.WHITEN_LIGHT,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const profileIconStyle = {
    size: size * 0.8,
    color: THEME.COLORS.GREY.NORMAL,
  };
  const cameraIconStyle = {
    size: 24,
    color: THEME.COLORS.PRIMARY.NORMAL,
  };
  return {
    styles,
    profileIconStyle,
    cameraIconStyle,
  };
}

export const styleGen = memoize(styleGenerator);
