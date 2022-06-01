import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../theme";

const HEIGHT = 72;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  netInfoContainer: {
    position: "absolute",
    top: 0,
    width: widthPercentageToDP(100),
    height: HEIGHT,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    elevation: 2,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
    width: 40,
    height: 40,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 5,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  infoText: {
    paddingLeft: 32,
  },
  activityContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export const iconStyle = {
  size: 20,
  color: THEME.COLORS.PRIMARY.NORMAL,
};
export const statusBarBackgroundColor = THEME.COLORS.PRIMARY.NORMAL;
export const translateNetInfoStart = -HEIGHT;
export const activityColor = THEME.COLORS.PRIMARY.NORMAL;
