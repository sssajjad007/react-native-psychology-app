import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { observer } from "mobx-react-lite";
import { ISvgIconProps } from "./types";
function SvgPractice(props: ISvgIconProps) {
  const { size } = props;
  const scale = size ? size / 64 : 1;
  return (
    <Svg
      width={64}
      height={64}
      fill="none"
      style={{ transform: [{ scale }] }}
      {...props}
    >
      <Path
        d="M32.42 3c-2.7 0-4.98 2.14-5.92 4.5H8.84v52.45H56V7.5H38C37.06 5.14 35.12 3 32.42 3Zm0 3.8c1.18 0 2.14.96 2.14 2.13v2.13h6.94v4.44L23 15.31v-4.25h7.28V8.92c0-1.17.96-2.12 2.14-2.12ZM11.5 10.75H19.56V18h25.72v-7.25H53.5V57h-42V10.75Zm5.91 15.18v3.27h4.29v-3.27h-4.29Zm8.58 0v2.75h21.43v-2.75H25.99Zm-8.58 8.51v2.96h4.29v-2.96h-4.29Zm8.58 0v2.96h21.43v-2.96H25.99Zm-8.58 8.51v3.17h4.29v-3.17h-4.29Zm8.58 0v2.66h21.43v-2.66H25.99Z"
        fill="url(#prac_svg__a)"
      />
      <Defs>
        <LinearGradient
          id="prac_svg__a"
          x1={34}
          y1={3}
          x2={33.5}
          y2={60}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8E01FE" />
          <Stop offset={1} stopColor="#35A7E6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export const Practice = observer(SvgPractice);
