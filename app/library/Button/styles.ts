import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import memoize from "fast-memoize";
import { THEME } from "../theme";
import { tMode, IButtonStyles, tSize } from "./types";

export const activityStyles = StyleSheet.create({
  container: {
    transform: [{ scale: 0.8 }],
  },
});

export function activityStyleGen(mode: tMode, size: tSize) {
  const activityColor =
    mode === "contained" ? "white" : THEME.COLORS.PRIMARY.NORMAL;
  const activityStyles = StyleSheet.create({
    container: {
      transform: [{ scale: size === "FAB" ? 1 : 0.8 }],
    },
  });
  return { activityColor, styles: activityStyles };
}

function buttonHeightCalc(size: tSize) {
  switch (size) {
    case "extra-small":
      return 28;
    case "FAB":
      return 48;
    default:
      return 36;
  }
}

function buttonMinWidthCalc(size: tSize) {
  switch (size) {
    case "growWithText":
      return 64;
    case "extra-small":
      return widthPercentageToDP(25); //91
    case "small":
      return widthPercentageToDP(35); //128
    case "medium":
      return widthPercentageToDP(43); //156
    case "big":
      return widthPercentageToDP(82); //296
    case "wide":
      return widthPercentageToDP(90); //328
    case "FAB":
      return widthPercentageToDP(48); //172
    default:
      return widthPercentageToDP(25);
  }
}

function buttonTextColor(
  dark: boolean | undefined,
  mode: tMode,
  textColor: string | undefined,
  disabled: boolean | undefined
) {
  if (disabled) {
    return THEME.COLORS.DISABLED.TEXT;
  }
  if (textColor) {
    return textColor;
  }
  if (mode === "contained" || mode === "contained-secondary") {
    return "#FFF";
  }
  if (mode === "contained-grey") {
    if (dark) {
      return THEME.COLORS.PRIMARY.DARK;
    }
    return THEME.COLORS.PRIMARY.NORMAL;
  }

  return THEME.COLORS.PRIMARY.NORMAL;
}

function buttonBackgroundColor(
  mode: tMode,
  disabled: boolean | undefined,
  backgroundColor: string | undefined
) {
  if (disabled) {
    return THEME.COLORS.DISABLED.BACKGROUND;
  }
  if (mode === "contained") {
    if (backgroundColor) {
      return backgroundColor;
    }
    return THEME.COLORS.PRIMARY.NORMAL;
  }
  if (mode === "contained-grey") {
    return THEME.COLORS.GREY.LIGHT;
  }
  if (mode === "contained-secondary") {
    if (backgroundColor) {
      return backgroundColor;
    }
    return THEME.COLORS.SECONDARY.NORMAL;
  }
  return "transparent";
}
function buttonBorderColor(mode: tMode) {
  if (mode === "outlined") {
    return THEME.COLORS.GREY.NORMAL;
  }
  return "transparent";
}
function buttonElevation(mode: tMode, disabled: boolean | undefined) {
  if (disabled) {
    return {};
  }
  if (
    mode === "contained" ||
    mode === "contained-grey" ||
    mode === "contained-secondary"
  ) {
    if (Platform.OS === "android") {
      return {
        elevation: 2,
      };
    }
    if (Platform.OS === "ios") {
      return {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      };
    }
  }
}
function buttonStyle(args: IButtonStyles) {
  const {
    mode,
    bold,
    size,
    dark,
    disabled,
    textColor,
    backgroundColor,
    fullRadius,
  } = args;
  const buttonHeight = buttonHeightCalc(size);
  const styles = StyleSheet.create({
    container: {
      minWidth: buttonMinWidthCalc(size),
      maxWidth: widthPercentageToDP("90"),
      height: buttonHeight,
      borderWidth: mode === "outlined" ? StyleSheet.hairlineWidth : 0,
      backgroundColor: buttonBackgroundColor(mode, disabled, backgroundColor),
      borderColor: buttonBorderColor(mode),
      borderRadius: fullRadius ? buttonHeight / 2 : 12,
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 4,
      overflow: "hidden",
      ...buttonElevation(mode, disabled),
    },
    text: {
      fontSize: 14,
      fontFamily: bold ? THEME.FONTS.BOLD : THEME.FONTS.REGULAR,
      color: buttonTextColor(dark, mode, textColor, disabled),
      marginHorizontal: 4,
    },
    icon: {
      marginHorizontal: 1,
    },
  });
  const iconStyle = {
    size: size === "FAB" ? 24 : 18,
    color: buttonTextColor(dark, mode, textColor, disabled),
  };
  return { styles, iconStyle };
}

export const styleGen = memoize(buttonStyle);
