import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useDoublePress } from "../doublePress";
import { ITapProps } from "./types";

function TapComponent(props: ITapProps) {
  const { children, onPress, waitFor } = props;
  function onTapPress() {
    // WHY: after adding useDoublePress, state does not activate
    if (onPress) {
      onPress();
    }
  }
  const { onTouchablePress } = useDoublePress(onTapPress);

  const tap = Gesture.Tap().onStart(onTouchablePress);
  return (
    <GestureDetector gesture={tap}>
      {
        // there must be a view around children to avoid ref bug
        // that causes crash
      }
      <View>{children}</View>
    </GestureDetector>
  );
}

export const Tap = observer(TapComponent);
