import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  noCustomersFound: {
    width: "100%",
    marginTop: 64,
    textAlign: "center",
  },
  searchBarContainer: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row-reverse",
  },
  line: {
    width: widthPercentageToDP(90),
    alignSelf: "center",
    marginTop: 16,
    height: 1,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
  },
});
