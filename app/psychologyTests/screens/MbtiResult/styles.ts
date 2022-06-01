import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  progressBarGroupContainer: {
    width: widthPercentageToDP(100),
    minHeight: 700,
  },
  imageContainer: {
    width: widthPercentageToDP(100),
    height: 180,
    padding: 16,
  },
  avatar: {
    width: 140,
    height: 140,
    alignSelf: "center",
  },
  line: {
    width: widthPercentageToDP("90"),
    height: 1,
    top: 16,
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  answerContainer: {
    width: widthPercentageToDP(100),
    height: 62,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  descriptionContainer: {
    width: widthPercentageToDP(100),
    minHeight: 50,
    paddingHorizontal: widthPercentageToDP("5"),
  },
  title: {
    width: widthPercentageToDP(100),
    height: 30,
    paddingHorizontal: widthPercentageToDP("5"),
  },
  titleBar: {
    width: widthPercentageToDP(100),
    height: 70,
    paddingTop: 24,
    paddingHorizontal: widthPercentageToDP("5"),
  },
  buttonContainer: {
    width: widthPercentageToDP(100),
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  dataOfInterpret: {
    width: widthPercentageToDP(90),
    alignItems: "flex-start",
  },
  titleOfInterpret: {
    width: widthPercentageToDP(90),
    alignItems: "flex-start",
    paddingVertical:10,
  },
});
