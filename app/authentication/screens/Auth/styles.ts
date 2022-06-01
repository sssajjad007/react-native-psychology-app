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
    height: heightPercentageToDP(42),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    paddingRight: widthPercentageToDP(4),
  },
  logoContainer: {
    left: widthPercentageToDP("5"),
  },
  title: {
    fontSize: 24,
  },
  authContainer: {
    width: "100%",
    height: heightPercentageToDP(58),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemsContainer: {
    marginTop: 64,
  },
  itemsMargin: {
    marginVertical: 8,
  },
  termsContainer: {
    alignItems: "flex-end",
    paddingTop: 10,
    marginBottom: 16,
  },
  terms: {
    width: widthPercentageToDP("80"),
    alignSelf: "center",
    color: THEME.COLORS.GREY.DARK,
  },
});

export const logoSize = 120;
