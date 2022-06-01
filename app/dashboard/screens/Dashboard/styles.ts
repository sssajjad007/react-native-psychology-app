import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  titleContainer: {
    flex: 1.4,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: widthPercentageToDP(8),
    borderBottomRightRadius: widthPercentageToDP(8),
    zIndex:4
  },

  buttonContainer: {
    flex: 6,
  },
  row: {
    width: widthPercentageToDP("100"),
    height: 140,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 154,
    height: 154,
    backgroundColor: "white",
    borderRadius: 8,
    shadowRadius: 2,
    shadowColor: "black",
    elevation: 2,
    overflow: "hidden",
  },
  scrollViewContainer: {
    flex: 1,
  },
  containerContentStyle: {
    alignItems: "center",
    paddingTop: heightPercentageToDP("10"),
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  iconTitleContainer: {},
});
