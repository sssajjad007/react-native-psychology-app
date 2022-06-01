import { StyleSheet } from "react-native";
import { material } from "react-native-typography";

import { THEME } from "../theme";

export const styles = StyleSheet.create({
  title: {
    ...material.titleObject,
    fontFamily: THEME.FONTS.BOLD,
  },
  headline: {
    ...material.headlineObject,
    fontFamily: THEME.FONTS.MEDIUM,
  },
  Subheading: {
    ...material.subheadingObject,
    fontFamily: THEME.FONTS.REGULAR,
  },
  paragraph: {
    ...material.body1Object,
    fontFamily: THEME.FONTS.REGULAR,
  },
  caption: {
    ...material.captionObject,
    fontFamily: THEME.FONTS.THIN,
  },
});
