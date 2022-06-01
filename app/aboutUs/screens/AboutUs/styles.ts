import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  logoContainer: {
    flex: 2,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: widthPercentageToDP("6"),
  },
  title: {
    fontSize: 26,
    color: "white",
  },
  bodyContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    marginHorizontal: 20,
    lineHeight: 30,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 24,
  },
});

export const buttonIconSize = 36;

export const iconColors = {
  web: THEME.COLORS.GREY.NORMAL,
  telegram: "#34AAE5",
  linkedin: "#0A66C2",
  instagram: "#E82683",
};
