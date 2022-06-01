import { StyleSheet } from "react-native";

import { THEME } from "../../../library";

// TODO: fix width and heights based on enabled header

export const styles = StyleSheet.create({
  horizontalLine: {
    width: THEME.WIDTH.WIDE,
    height: StyleSheet.hairlineWidth,
    borderRadius: StyleSheet.hairlineWidth / 2,
    backgroundColor: THEME.COLORS.GREY.NORMAL,
    alignSelf: "center",
  },
  titleInputContainer: {
    width: "100%",
    height: 52,
  },
  noteInputContainer: {
    flex: 1,
  },
  pickImageContainer: {
    width: "100%",
    height: 136,
    flexDirection: "row-reverse",
  },
  imageListContainer: {
    flex: 9,
    bottom: 6,
    paddingBottom: 8,
    paddingRight: "5%",
  },
  attachButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 8,
    paddingLeft: "2.5%",
  },
  submitButtonContainer: {
    width: "100%",
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});
export const footerHeight = 52 + 136;

export const translateYFooter = footerHeight + 16;
