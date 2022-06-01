import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  titleInputContainer: {
    width: "100%",
    height: 52,
    marginTop: 2,
  },
  noteInputContainer: {
    width: "100%",
    minHeight: 128,
  },
  horizontalLine: {
    width: THEME.WIDTH.WIDE,
    height: StyleSheet.hairlineWidth,
    borderRadius: StyleSheet.hairlineWidth / 2,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
    alignSelf: "center",
    // top: -heightPercentageToDP(2),
  },
  imageContainer: {
    width: "98%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    minHeight: 40,
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
});
