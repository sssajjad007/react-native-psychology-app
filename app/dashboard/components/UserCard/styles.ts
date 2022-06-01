import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(68),
    height: 80,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 4,
    marginTop: heightPercentageToDP(16),
  },
  textAlignRight: {
    textAlign: "right",
  },
  imageContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 8,
    paddingRight: 8,
  },
  titleContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});

export const iconColor = THEME.COLORS.PRIMARY.NORMAL;
