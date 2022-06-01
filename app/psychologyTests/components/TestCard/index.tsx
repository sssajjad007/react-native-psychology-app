import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Touchable, Paragraph, Subheading } from "../../../library";

import { styles } from "./styles";
import { IFormCardProps } from "../../types";

function TestCardComponent(props: IFormCardProps) {
  const { id, Icon, title, subtitle, onPress } = props;
  function onCardPress() {
    if (onPress) {
      onPress(id);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.persianNameContainer}>
          <Subheading>{title}</Subheading>
        </View>
        <View style={styles.englishNameContainer}>
          <Paragraph style={{ textAlign: "right" }}>{subtitle}</Paragraph>
        </View>
      </View>
      <Touchable onPress={onCardPress} rippleColor={"lightGrey"} />
    </View>
  );
}

export const TestCard = observer(TestCardComponent);
