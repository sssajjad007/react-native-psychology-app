import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";

import { styles } from "./styles";
import { tTextProps } from "./types";

function HeadlineComponent(props: tTextProps) {
  const { children, style } = props;
  return (
    <Text {...props} style={[styles.headline, style]}>
      {children}
    </Text>
  );
}

export const Headline = observer(HeadlineComponent);
