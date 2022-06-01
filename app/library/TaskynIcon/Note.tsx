import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { observer } from "mobx-react-lite";
import { THEME } from "../theme";
import { ISvgIconProps } from "./types";
function SvgNote(props: ISvgIconProps) {
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
        d="M43.92 57.98H7.5V6.66h36.42v51.32ZM9.48 55.99h32.45V8.65H9.48v47.34Z"
        fill="url(#note_svg__a)"
      />
      <Path d="M38.51 18.76H13.74v1.99h24.77v-1.99Z" fill="url(#note_svg__b)" />
      <Path d="M38.5 13.79h-6.62v1.32h6.62v-1.32Z" fill="url(#note_svg__c)" />
      <Path d="M38.51 22.78H13.74v1.99h24.77v-1.99Z" fill="url(#note_svg__d)" />
      <Path d="M38.51 26.8H13.74v1.99h24.77V26.8Z" fill="url(#note_svg__e)" />
      <Path d="M38.51 30.82H13.74v1.99h24.77v-1.99Z" fill="url(#note_svg__f)" />
      <Path d="M38.51 34.84H13.74v1.99h24.77v-1.99Z" fill="url(#note_svg__g)" />
      <Path d="M38.51 38.86H13.74v1.99h24.77v-1.99Z" fill="url(#note_svg__h)" />
      <Path
        d="M52.38 11.43v-.02h-.03c-.15-1.58-1.41-2.83-2.95-2.83-1.54 0-2.8 1.24-2.95 2.83h-.03v35.66l2.32 5.84v2.16h1.32v-2.16l2.32-5.84V13.43c.97.19 1.71 1.05 1.71 2.08v12.56h1.99V15.51c0-2.12-1.63-3.88-3.7-4.08Zm-2.98-.86c.45 0 .83.36.95.84h-1.9c.12-.49.5-.84.95-.84Zm.99 2.82v32.88H48.4V13.39h1.99ZM48.77 47.6h1.26l-.63 1.59-.63-1.59Z"
        fill="url(#note_svg__i)"
      />
      <Defs>
        <LinearGradient
          id="note_svg__a"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="note_svg__b"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="note_svg__c"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="note_svg__d"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="note_svg__e"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="note_svg__f"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="note_svg__g"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="note_svg__h"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="note_svg__i"
          x1={31.79}
          y1={6.66}
          x2={31.79}
          y2={57.98}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export const Note = observer(SvgNote);
