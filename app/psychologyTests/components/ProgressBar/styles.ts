import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: "center",
  },
  progressBar: {
    marginTop: 10,
    width: widthPercentageToDP(90),
    height: 28,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
    flexDirection: "row",
    overflow: "hidden",
  },
  progressLeft: {
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  progressRight: {
    alignItems: "center",
    justifyContent: "center",
  },
  fullLine: {
    marginTop: 10,
    width: widthPercentageToDP("90"),
    height: 1,
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  titles: {
    width: widthPercentageToDP("90"),
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
