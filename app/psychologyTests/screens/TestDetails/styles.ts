import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 220,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    width: "100%",
    height: 110,
    padding: 16,
  },
  enTitle: {
    textAlign: "right",
    marginTop: 12,
  },
  descriptionContainer: {
    width: "100%",
    minHeight: 260,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  formDetails: {
    width: "100%",
    height: 30,
    flexDirection: "row",
  },
  formDetailsBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: widthPercentageToDP(2),
  },
  timeNeeded: {
    color: THEME.COLORS.GREY.NORMAL,
    paddingRight: 8,
  },
  testCount: {
    color: THEME.COLORS.GREY.NORMAL,
    paddingRight: 8,
  },
  startTestContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    zIndex: 0,
    marginBottom: 12,
  },
});

export const iconStyle = {
  color: THEME.COLORS.RED.NORMAL,
  size: 24,
};
