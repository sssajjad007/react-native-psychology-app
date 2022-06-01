import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rtlScrollView: {
    transform: [{ scaleX: -1 }],
  },
  rtlView: {
    transform: [{ scaleX: -1 }],
  },
});
