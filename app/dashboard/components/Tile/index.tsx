import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Subheading, Touchable } from "../../../library";
import { styles, iconStyle } from "./styles";
import { ITileProps } from "../../types";
function TileComponent(props: ITileProps) {
  const { Icon,onPress, title } = props;
  const { color, size } = iconStyle;
  return (
    <View style={styles.container}>
      <Icon size={size} color={color} />
      <Subheading>{title}</Subheading>
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}

export const Tile = observer(TileComponent);
