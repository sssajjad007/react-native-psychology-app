import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  NoteImageContainer: {
    width: THEME.WIDTH.MEDIUM,
    // pick image container in create note screen height is 20 percent
    height: heightPercentageToDP(18),
    marginLeft: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  controlContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    height: 36,
    backgroundColor: THEME.COLORS.TRANSPARENT.WHITE,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 6,
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});

export const iconButtonStyle = {
  size: 24,
  color: THEME.COLORS.BLACK.NORMAL,
};
