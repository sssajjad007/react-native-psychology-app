import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
import { material } from "react-native-typography";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.WIDE,
    minHeight: 110,
    backgroundColor: "white",
    borderRadius: 6,
    elevation: 2,
    marginVertical: 12,
  },
  textContainer: {
    width: "100%",
    minHeight: 88,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  footer: {
    height: 46,
  },
  doneParagraph: {
    color: THEME.COLORS.GREEN,
    alignSelf: "flex-start",
    marginLeft: 12,
    marginTop: 10,
  },
  makeDoneContainer: {
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },
  makeDoneParagraph: {
    color: THEME.COLORS.SECONDARY.NORMAL,
  },
  textInput: {
    ...material.body1Object,
    fontFamily: THEME.FONTS.REGULAR,
    padding: 0,
    margin: 0,
    lineHeight: 24,
  },
  dateContainer: {
    position: "absolute",
    left: 12,
    top: 6,
  },
  modal: {
    marginHorizontal: "5%",
  },
});

export const selectionColor = THEME.COLORS.PRIMARY.DARK;
export const menuColor = THEME.COLORS.GREY.DARK;
