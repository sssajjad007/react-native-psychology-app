import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: 110,
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  line: {
    width: widthPercentageToDP(90),
    height: 1,
    backgroundColor: "#C4C4C4",
    top: 4,
  },
});
