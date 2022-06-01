import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const iconButtonColor = THEME.COLORS.PRIMARY.NORMAL;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  historyCardScroller: {
    alignItems: "center",
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
  },
  imageSize: {
    width: 250,
    height: 250,
  },
});
