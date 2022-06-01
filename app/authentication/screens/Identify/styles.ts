import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  logoContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(32),
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: widthPercentageToDP(6),
  },
  logo: {
    // left: widthPercentageToDP("5"),
  },
  confirmationTextContainer: {
    paddingRight: 16,
  },
  phoneNumber: {
    color: THEME.COLORS.PRIMARY.NORMAL,
  },
  enterCodeText: {
    paddingTop: 12,
  },
  editNumberButtonContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(8),
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 16,
  },
  codeConfirmationContainer: {
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(12),
    alignSelf: "center",
    marginTop: heightPercentageToDP(6),
  },
  codeFieldRoot: {
    flex: 1,
  },

  line: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: THEME.COLORS.GREY.NORMAL,
    borderRadius: 0,
  },
  focusCell: {
    borderColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  timerContainer: {
    width: "100%",
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonContainer: {
    width: "100%",
    height: heightPercentageToDP(22),
    alignItems: "center",
    top: 40,
    justifyContent: "center",
  },
});
export const logoSize = 120;
