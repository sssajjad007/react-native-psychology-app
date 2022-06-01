import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { observer } from "mobx-react-lite";
import { useDoublePress } from "../doublePress";
import { ITapProps } from "./types";

function TapComponent(props: ITapProps) {
  const { children, onPress, waitFor } = props;
  const { onTouchablePress } = useDoublePress(onPress);
  return (
    <TouchableWithoutFeedback onPress={onTouchablePress}>
      {
        // there must be a view around children to avoid ref bug
        // that causes crash
      }
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
}

export const Tap = observer(TapComponent);
