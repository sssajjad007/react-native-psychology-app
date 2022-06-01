import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginTop: 34,
    marginBottom: 16,
    alignSelf: "center",
  },
  galleryContainer: StyleSheet.absoluteFillObject,
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    overflow: "hidden",
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    top: -34,
  },
});

export const iconButtonStyle = {
  color: THEME.COLORS.RED.NORMAL,
  size: 24,
};
