import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { observer } from "mobx-react-lite";
import { ISvgIconProps } from "./types";
function SvgGoogle(props: ISvgIconProps) {
  const { size } = props;
  const scale = size ? size / 24 : 1;
  return (
    <Svg
      width={24}
      height={24}
      style={{ transform: [{ scale }] }}
      fill="none"
      {...props}
    >
      <G clipPath="url(#google_svg__a)">
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path
          d="M23.984 12.225c0-.984-.082-1.701-.259-2.445H12.24v4.438h6.742c-.136 1.103-.87 2.764-2.5 3.88l-.024.148 3.632 2.75.252.025c2.31-2.086 3.643-5.156 3.643-8.796"
          fill="#4285F4"
        />
        <Path
          d="M12.239 23.917c3.303 0 6.076-1.063 8.102-2.896l-3.861-2.924c-1.033.705-2.42 1.196-4.241 1.196a7.35 7.35 0 0 1-6.96-4.97l-.143.013-3.777 2.856-.05.135c2.013 3.906 6.145 6.59 10.93 6.59Z"
          fill="#34A853"
        />
        <Path
          d="M5.28 14.324a7.213 7.213 0 0 1-.409-2.365c0-.824.15-1.621.394-2.366l-.006-.158-3.824-2.903-.125.058A11.751 11.751 0 0 0 .005 11.96c0 1.926.476 3.747 1.305 5.368l3.97-3.003"
          fill="#FBBC05"
        />
        <Path
          d="M12.239 4.624c2.297 0 3.847.97 4.73 1.78l3.453-3.295C18.302 1.183 15.542 0 12.24 0 7.454 0 3.322 2.684 1.309 6.59l3.956 3.004a7.38 7.38 0 0 1 6.974-4.97"
          fill="#EB4335"
        />
      </G>
      <Defs>
        <ClipPath id="google_svg__a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export const Google = observer(SvgGoogle);
