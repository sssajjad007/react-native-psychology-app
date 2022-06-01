import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { observer } from "mobx-react-lite";
import { ISvgIconProps } from "./types";
import { THEME } from "../theme";
function SvgFileHistory(props: ISvgIconProps) {
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
        d="M43.83 21.06H18.71v1.98h25.12v-1.98Z"
        fill="url(#file-history_svg__a)"
      />
      <Path
        d="M43.83 17.32H18.71v1.98h25.12v-1.98Z"
        fill="url(#file-history_svg__b)"
      />
      <Path
        d="M43.83 25.01H18.71v1.98h25.12v-1.98Z"
        fill="url(#file-history_svg__c)"
      />
      <Path
        d="M42.58 3.74H12.33v27.38h1.98V5.71h26.88v7.05h7.05v18.35h1.98V11.37l-7.64-7.63Zm.58 3.37 3.68 3.68h-3.68V7.11Z"
        fill="url(#file-history_svg__d)"
      />
      <Path
        d="M52.23 59.97H10.17V30.13h13.11l3.03 5.44h9.92l3.03-5.44h12.97v29.84ZM12.15 58h38.1V32.11h-9.84l-3.03 5.44H25.15l-3.03-5.44h-9.97V58Z"
        fill="url(#file-history_svg__e)"
      />
      <Path
        d="M38.19 52H24.35v-9.71h13.84V52Zm-11.86-1.98h9.88v-5.75h-9.88v5.75Z"
        fill="url(#file-history_svg__f)"
      />
      <Defs>
        <LinearGradient
          id="file-history_svg__a"
          x1={31}
          y1={4}
          x2={31.2}
          y2={59.97}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file-history_svg__b"
          x1={31}
          y1={4}
          x2={31.2}
          y2={59.97}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file-history_svg__c"
          x1={31}
          y1={4}
          x2={31.2}
          y2={59.97}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file-history_svg__d"
          x1={31}
          y1={4}
          x2={31.2}
          y2={59.97}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file-history_svg__e"
          x1={31}
          y1={4}
          x2={31.2}
          y2={59.97}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file-history_svg__f"
          x1={31}
          y1={4}
          x2={31.2}
          y2={59.97}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export const FileHistory = observer(SvgFileHistory);
