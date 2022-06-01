import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    width: widthPercentageToDP(100),
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: widthPercentageToDP("6"),
  },
  title: {
    fontSize: 26,
    color: "white",
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    marginHorizontal: 20,
    lineHeight: 30,
  },

  questionsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
