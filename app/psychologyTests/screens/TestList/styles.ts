import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  searchBarContainer: {
    width: widthPercentageToDP(100),
    height: 86,
    alignItems: "center",
    justifyContent: "center",
  },
  formHistoryContainer: {
    width: widthPercentageToDP(100),
    height: 86,
    alignItems: "center",
    justifyContent: "center",
  },
  formCardContainer: {
    width: "100%",
    height: heightPercentageToDP(63),
  },
  containerContentStyle: {
    alignItems: "center",
    paddingBottom: 64,
  },

  line: {
    width: THEME.WIDTH.WIDE,
    height: 1,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
    marginTop: 16,
  },
  title: {
    width: "100%",
    height: 42,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 16,
  },
});
