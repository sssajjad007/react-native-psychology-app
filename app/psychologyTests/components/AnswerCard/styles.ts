import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    marginVertical: 6,
    paddingRight: 16,
  },
  subheading: {
    paddingLeft: 8,
  },
});

export const radioSize = 24;
