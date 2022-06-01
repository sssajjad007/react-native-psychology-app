import React, { Ref, forwardRef } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { observer } from "mobx-react-lite";
import { Touchable } from "../Touchable";
import { Paragraph } from "../Typography";
import { Loading } from "./Loading";
import { styleGen } from "./styles";
import { IButtonProps } from "./types";
function ButtonComponent(props: IButtonProps, ref: Ref<RectButton>) {
  const {
    mode,
    bold,
    size,
    Icon,
    loading,
    dark,
    onPress,
    rippleColor,
    disabled,
    children,
    fullRadius,
    textColor,
    backgroundColor,
  } = props;
  const { styles, iconStyle } = styleGen({
    dark,
    bold,
    disabled,
    mode,
    size,
    fullRadius,
    textColor,
    backgroundColor,
  });

  return (
    <View style={[styles.container]}>
      {Icon && !loading && (
        <View style={styles.icon}>
          <Icon size={iconStyle.size} color={iconStyle.color} />
        </View>
      )}
      {loading ? (
        <Loading mode={mode} size={size} activityColor={textColor} />
      ) : (
        <Paragraph numberOfLines={1} style={styles.text}>
          {children}
        </Paragraph>
      )}

      {disabled || loading ? null : (
        <Touchable ref={ref} onPress={onPress} rippleColor={rippleColor} />
      )}
    </View>
  );
}

export const Button = observer(forwardRef(ButtonComponent));
