import React from "react";
import { observer } from "mobx-react-lite";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { THEME } from "../theme";

import { ISvgIconProps } from "./types";
function SvgFile(props: ISvgIconProps) {
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
        d="M24.23 57.42H8.54V9.69h15.69v47.73Zm-13.77-1.93h11.85V11.61H10.46v43.88Z"
        fill="url(#file_svg__a)"
      />
      <Path
        d="M21.01 33.79h-9.26V13.17h9.26v20.62Zm-7.98-1.28h6.7V14.46h-6.7v18.05Z"
        fill="url(#file_svg__b)"
      />
      <Path
        d="M16.38 52.27c-1.34 0-2.44-1.09-2.44-2.44 0-1.34 1.09-2.44 2.44-2.44 1.34 0 2.44 1.09 2.44 2.44 0 1.35-1.09 2.44-2.44 2.44Zm0-3.59a1.16 1.16 0 1 0 .002 2.322 1.16 1.16 0 0 0-.002-2.322Z"
        fill="url(#file_svg__c)"
      />
      <Path
        d="M30.15 52.27c-1.34 0-2.44-1.09-2.44-2.44 0-1.34 1.09-2.44 2.44-2.44 1.34 0 2.44 1.09 2.44 2.44 0 1.35-1.09 2.44-2.44 2.44Zm0-3.59a1.16 1.16 0 1 0 .002 2.322 1.16 1.16 0 0 0-.002-2.322Z"
        fill="url(#file_svg__d)"
      />
      <Path
        d="M38 57.42H22.31V9.69H38v47.73Zm-13.77-1.93h11.85V11.61H24.23v43.88Z"
        fill="url(#file_svg__e)"
      />
      <Path
        d="M34.78 33.79h-9.26V13.17h9.26v20.62Zm-7.98-1.28h6.7V14.46h-6.7v18.05Z"
        fill="url(#file_svg__f)"
      />
      <Path
        d="M52.1 50.86c-1.15 0-2.16-.82-2.39-1.96a2.444 2.444 0 0 1 2.39-2.92c1.15 0 2.16.82 2.39 1.95.26 1.32-.59 2.6-1.91 2.87-.16.04-.32.06-.48.06Zm0-3.59c-.08 0-.15.01-.23.02-.62.13-1.03.74-.9 1.36.12.61.73 1.03 1.36.9.62-.13 1.03-.74.9-1.36-.11-.53-.58-.92-1.13-.92Z"
        fill="url(#file_svg__g)"
      />
      <Path
        d="m45.91 57.41-9.43-46.78 15.38-3.1 9.43 46.78-15.38 3.1Zm-7.17-45.29 8.67 43.02 11.61-2.34-8.66-43.02-11.62 2.34Z"
        fill="url(#file_svg__h)"
      />
      <Path
        d="M44.39 33.61 40.32 13.4l9.08-1.83 4.07 20.21-9.08 1.83ZM41.83 14.4l3.57 17.7 6.57-1.32-3.57-17.7-6.57 1.32Z"
        fill="url(#file_svg__i)"
      />
      <Defs>
        <LinearGradient
          id="file_svg__a"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file_svg__b"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file_svg__c"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file_svg__d"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file_svg__e"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file_svg__f"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file_svg__g"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file_svg__h"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
        <LinearGradient
          id="file_svg__i"
          x1={34.915}
          y1={7.53}
          x2={34.915}
          y2={57.42}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={primaryColor} />
          <Stop offset={1} stopColor={secondaryColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export const File = observer(SvgFile);
