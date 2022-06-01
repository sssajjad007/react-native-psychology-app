import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  requestContainer: {
    width: widthPercentageToDP(90),
    height: 56,
    elevation: 2,
    borderRadius: 12,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    overflow: "hidden",
    alignSelf: "center",
  },

  iconContainer: {
    width: widthPercentageToDP("18"),
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  redCircle: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    backgroundColor: THEME.COLORS.RED.NORMAL,
  },
  numberStyle: {
    textAlign: "center",
    color: "white",
  },
  redCircleContainer: {
    position: "absolute",
    top: 10,
    right: 40,
    zIndex: 1,
  },
  containerContentStyle: {
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 32 / 2,
    backgroundColor: "#EEE5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 10,
  },
  title: {
    flex: 1,
    justifyContent: "center",
  },
});
