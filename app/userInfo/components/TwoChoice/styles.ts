import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingLeft: widthPercentageToDP(5),
  },
  selectButtonContainer: {
    width: "20%",
    marginRight: 8,
  },
  choiceText: {
    color: THEME.COLORS.GREY.DARK,
  },
});
