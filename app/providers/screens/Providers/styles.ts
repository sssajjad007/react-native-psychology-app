import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalLine: {
    width: THEME.WIDTH.WIDE,
    height: 1,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
    alignSelf: "center",
  },
  doctorListContainer: {
    flex: 1,
  },
  requestContainer: {
    width: "100%",
    height: 128,
    justifyContent: "space-around",
  },
  myDoctorTitle: {
    paddingRight: widthPercentageToDP(6),
  },
});
