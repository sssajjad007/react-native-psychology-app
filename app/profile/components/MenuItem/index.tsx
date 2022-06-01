import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Paragraph, Touchable } from "../../../library";

import { styleGen } from "./styles";
import { IMenuItemProps } from "../../types";

function MenuItemComponent(props: IMenuItemProps) {
  const { title, onPress, Icon, line, logout } = props;
  const { styles, iconStyle } = styleGen(logout);
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.iconContainer}>
          <Icon size={iconStyle.size} color={iconStyle.color} />
        </View>
        <Paragraph style={styles.itemText}>{title}</Paragraph>
      </View>

      {line ? <View style={styles.line} /> : undefined}
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}

export const MenuItem = observer(MenuItemComponent);
