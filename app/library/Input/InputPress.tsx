import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { observer } from "mobx-react-lite";
import type { IInputPress } from "./types";

function InputPressComponent(props: IInputPress) {
  const { children, onPress } = props;
  const tap = Gesture.Tap().onEnd(onPress);
  return <GestureDetector gesture={tap}>{children}</GestureDetector>;
}

export const InputPress = observer(InputPressComponent);
