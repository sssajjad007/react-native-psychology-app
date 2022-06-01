import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginTop: 10,
  },
  cardConttainerForMBTIResult: {
    width: "100%",
    height: 70,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  MBTIResultCard: {
    width: "90%",
    minHeight: 70,
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
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  sideBarColor: {
    width: 8,
    elevation: 1,
    height: 46,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
});
