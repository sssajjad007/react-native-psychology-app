import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    height: 82,
    paddingRight: 16,
    marginBottom: 16,
  },
  titleContainer: {
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "center",
    paddingRight: 8,
  },
  buttonMargin: {
    marginHorizontal: 8,
  },
  pickerContainer: {
    flex: 1,
  },
});
