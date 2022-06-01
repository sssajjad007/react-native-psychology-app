import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { observer } from "mobx-react-lite";
import { THEME } from "../theme";
import { ISvgIconProps } from "./types";
function SvgForm(props: ISvgIconProps) {
  const { size } = props;
  const primaryColor = "#9D3FE8";
  const secondaryColor = THEME.COLORS.SECONDARY.NORMAL;
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
        d="M13.11 5.27v51.61h38.1V12.94l-7.67-7.67H13.11Zm34.7 7.09h-3.7v-3.7l3.7 3.7ZM15.1 7.26h27.03v7.09h7.09v40.54H15.1V7.26Z"
        fill="url(#form_svg__a)"
      />
      <Path d="M44.77 23.86H19.51v1.99h25.26v-1.99Z" fill="url(#form_svg__b)" />
      <Path d="M44.77 27.84H19.51v1.99h25.26v-1.99Z" fill="url(#form_svg__c)" />
      <Path d="M44.79 31.81H19.53v1.99h25.26v-1.99Z" fill="url(#form_svg__d)" />
      <Path d="M44.77 35.79H19.51v1.99h25.26v-1.99Z" fill="url(#form_svg__e)" />
      <Defs>
        <LinearGradient
          id="form_svg__a"
          x1={32.16}
          y1={5.27}
          x2={32.16}
          y2={56.88}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="form_svg__b"
          x1={32.16}
          y1={5.27}
          x2={32.16}
          y2={56.88}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="form_svg__c"
          x1={32.16}
          y1={5.27}
          x2={32.16}
          y2={56.88}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="form_svg__d"
          x1={32.16}
          y1={5.27}
          x2={32.16}
          y2={56.88}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="form_svg__e"
          x1={32.16}
          y1={5.27}
          x2={32.16}
          y2={56.88}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export const Form = observer(SvgForm);
