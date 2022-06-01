import { StyleSheet } from "react-native";
import memoize from "fast-memoize";

function styleGenerator(size: number) {
  return StyleSheet.create({
    container: {
      minWidth: size * 2,
      minHeight: size * 2,
      flexDirection: "row-reverse",
    },
    selectorContainer: {
      width: size + 8,
      height: size * 2,
      alignItems: "flex-end",
      justifyContent: "center",
    },
    labelContainer: {
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "center",
    },
  });
}

export const styleGen = memoize(styleGenerator);
