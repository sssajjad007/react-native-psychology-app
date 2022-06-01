import React from "react";
import { Image } from "react-native";

import { ILogoProps } from "./types";
const LogoPrimary = require("./logoPrimary.png");
const LogoWhite = require("./logoWhite.png");
export function Logo(props: ILogoProps) {
  const { size, color } = props;
  return (
    <Image
      source={color === "primary" ? LogoPrimary : LogoWhite}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}
