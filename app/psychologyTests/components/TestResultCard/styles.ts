import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
export const errorColor = "#F8485E";
export const warningColor = "#fbc02d";
export const factorColor = "#0CECDD";
export const facetColor = "#F582A7";
export const styles = StyleSheet.create({
  container: {
    minHeight: 140,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  errorAndwarningCard: {
    width: "90%",
    minHeight: 140,
    marginVertical: 16,
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
  card: {
    width: "90%",
    minHeight: 140,
    marginVertical: 16,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    paddingRight: 16,
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  row: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  errorContainer: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: errorColor,
    alignItems: "center",
    justifyContent: "center",
  },
  warningContainer: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: warningColor,
    alignItems: "center",
    justifyContent: "center",
  },
  sideBarColor: {
    width: 8,
    elevation: 1,
    height: "65%",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "red",
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 6,
  },
  titleWithIcon: {
    flexDirection: "row-reverse",
    paddingLeft: 16,
    paddingTop: 16,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  darkGreyColor: {
    color: THEME.COLORS.GREY.DARK,
  },
  errorAndwarningBodyPadding: {
    paddingRight: 70,
    paddingBottom: 16,
    paddingLeft:40,
  },
});
