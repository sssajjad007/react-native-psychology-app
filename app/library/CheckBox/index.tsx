import React, { useEffect } from "react";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import Svg, { Path, Defs, ClipPath, G } from "react-native-svg";
import { observer } from "mobx-react-lite";
import { THEME } from "../theme";
import { AnimatedStroke } from "./AnimatedStroke";
import { checkMarkPath, outlineBoxPath, viewBox } from "./styles";
import { ICheckBoxProps } from "./types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

function AnimatedCheckbox(props: ICheckBoxProps) {
  const { checked, size } = props;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(checked ? 1 : 0, {
      duration: checked ? 300 : 150,
      easing: Easing.linear,
    });
  }, [checked]);

  const animatedBoxProps = useAnimatedProps(
    () => ({
      stroke: interpolateColor(
        progress.value,
        [0, 1],
        [THEME.COLORS.GREY.LIGHT, THEME.COLORS.PRIMARY.NORMAL],
        "RGB"
      ),
      fill: interpolateColor(
        progress.value,
        [0, 1],
        ["#00000000", "#00000000"],
        "RGB"
      ),
    }),
    [THEME.COLORS.PRIMARY.NORMAL, THEME.COLORS.GREY.LIGHT]
  );
  return (
    <Svg viewBox={viewBox} width={size} height={size}>
      <Defs>
        <ClipPath id={"clipPath"}>
          <Path
            fill={"white"}
            stroke={"gray"}
            strokeLinejoin={"round"}
            strokeLinecap={"round"}
            d={outlineBoxPath}
          />
        </ClipPath>
      </Defs>
      <AnimatedStroke
        progress={progress}
        d={checkMarkPath}
        stroke={THEME.COLORS.PRIMARY.NORMAL}
        strokeWidth={10}
        strokeLinejoin={"round"}
        strokeLinecap={"round"}
        strokeOpacity={checked || false ? 1 : 0}
      />
      <AnimatedPath
        d={outlineBoxPath}
        strokeWidth={7}
        strokeLinejoin={"round"}
        strokeLinecap={"round"}
        animatedProps={animatedBoxProps}
      />
      <G clipPath="url(#clipPath)">
        <AnimatedStroke
          progress={progress}
          d={checkMarkPath}
          stroke={THEME.COLORS.PRIMARY.NORMAL}
          strokeWidth={10}
          strokeLinejoin={"round"}
          strokeLinecap={"round"}
          strokeOpacity={checked || false ? 1 : 0}
        />
      </G>
    </Svg>
  );
}

export const Checkbox = observer(AnimatedCheckbox);
