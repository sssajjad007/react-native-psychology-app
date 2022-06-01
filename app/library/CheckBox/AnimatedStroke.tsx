import React, { useRef, useState } from "react";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { Path } from "react-native-svg";
import { observer } from "mobx-react-lite";
import { IAnimatedStrokeProps } from "./types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function AnimatedStrokeComponent(props: IAnimatedStrokeProps) {
  const { progress } = props;
  const [length, setLength] = useState(0);
  const ref = useRef<typeof AnimatedPath>(null);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: Math.max(0, length - length * progress.value - 0.1),
  }));
  function onLayout() {
    // @ts-ignore
    setLength(ref.current?.getTotalLength());
  }
  return (
    <AnimatedPath
      // @ts-ignore
      ref={ref}
      animatedProps={animatedProps}
      onLayout={onLayout}
      strokeDasharray={length}
      {...props}
    />
  );
}

export const AnimatedStroke = observer(AnimatedStrokeComponent);
