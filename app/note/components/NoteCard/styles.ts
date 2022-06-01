import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.WIDE,
    height: 68,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: "white",
    flexDirection: "row-reverse",
    overflow: "hidden",
    marginVertical: 8,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 4,
    paddingLeft: 10,
    flexDirection: "column",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bodyContainer: {
    flex: 3,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
  },

  dateContainer: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 8,
  },
});
