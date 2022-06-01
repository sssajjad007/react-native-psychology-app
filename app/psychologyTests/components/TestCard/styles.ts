import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.WIDE,
    height: 86,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 2,
    marginVertical: 8,
    overflow:"hidden",
  },
  iconContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 10,
  },
  persianNameContainer: {
    flex: 2,
    justifyContent: "center",
  },
  englishNameContainer: {
    flex: 2,
    justifyContent: "center",
  },
 
});
