import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Title } from "../../../library";

import { styleGen } from "./styles";
import { ITextIconProps } from "../../types";
function TextIconComponent(props: ITextIconProps) {
  const { label, labelColor } = props;
  const { styles } = styleGen(labelColor);
  return (
    <View style={styles.container}>
      <Title numberOfLines={1} style={styles.label}>{label.toUpperCase()}</Title>
    </View>
  );
}

export const TextIcon = observer(TextIconComponent);
