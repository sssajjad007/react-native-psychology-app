import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";

import { styles } from "./styles";
import { tTextProps } from "./types";

function TitleComponent(props: tTextProps) {
  const { children, style } = props;
  return (
    <Text {...props} style={[styles.title, style]}>
      {children}
    </Text>
  );
}

export const Title = observer(TitleComponent);
