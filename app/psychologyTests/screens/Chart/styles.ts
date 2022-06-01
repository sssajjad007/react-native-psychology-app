import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  chartStyles: {
    transform: [{ rotate: "90deg" }],
    borderRadius: 16,
  },

  chartcontainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(170),
  },
});
