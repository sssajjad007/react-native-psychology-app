import React, { forwardRef, Ref } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { BorderlessButton } from "react-native-gesture-handler";
import { useDoublePress } from "../doublePress";

import { iconStyleGen } from "./styles";

import { IIconButtonProps } from "./types";

function IconButtonComponent(
  props: IIconButtonProps,
  ref: Ref<any> | undefined // TODO: fix this type
) {
  const { Icon, onPress, color, size } = props;
  const { styles, iconColor, iconSize, rippleColor } = iconStyleGen({
    color,
    size,
  });
  const { onTouchablePress } = useDoublePress(onPress);
  return (
    <BorderlessButton
      ref={ref}
      onPress={onTouchablePress}
      rippleColor={rippleColor}
      borderless
    >
      <View style={styles.container}>
        <Icon color={iconColor} size={iconSize} />
      </View>
    </BorderlessButton>
  );
}

export const IconButton = observer(forwardRef(IconButtonComponent));
