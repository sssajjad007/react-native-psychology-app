import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    width: "100%",
    height: 100,
    paddingVertical: 16,
    justifyContent: "space-around",
  },
  descriptionContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 40,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});
