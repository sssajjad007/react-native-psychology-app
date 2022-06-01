import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  menuContainer: {
    flex: 5,
  },
  body: {
    borderRadius: 20,
    alignSelf: "center",
    //elevation: 10,
    height: hp("60%"),
    width: wp("100%"),
  },
});
