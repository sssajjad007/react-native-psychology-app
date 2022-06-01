import React, { forwardRef, Ref } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { observer } from "mobx-react-lite";
import { useDoublePress } from "../doublePress";

import { iconStyleGen } from "./styles";

import { IIconButtonProps } from "./types";

function IconButtonComponent(
  props: IIconButtonProps,
  ref: Ref<any> | undefined // TODO: fix this type
) {
  const { Icon, onPress, color, size } = props;
  const { styles, iconColor, iconSize } = iconStyleGen({
    color,
    size,
  });
  const { onTouchablePress } = useDoublePress(onPress);
  return (
    <TouchableWithoutFeedback ref={onTouchablePress}>
      <View style={styles.container}>
        <Icon color={iconColor} size={iconSize} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export const IconButton = observer(forwardRef(IconButtonComponent));
