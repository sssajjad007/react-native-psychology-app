import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Touchable, Paragraph, Subheading, Caption } from "../../../library";
import { ITestResultHistoryCardProps } from "../../types";
import { styles } from "./styles";
function TestResultHistoryCardComponent(props: ITestResultHistoryCardProps) {
  const { Icon, createdAt, enName, onPress, faName, id } = props;
  function onCardPress() {
    if (onPress) {
      onPress(id);
    }
  }
  //TODO: refactor styles
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.testDetailsContainer}>
          <View style={styles.faNameContainer}>
            <Subheading style={styles.textAlignRight}>{faName}</Subheading>
          </View>
          <View style={styles.enNameContainer}>
            <Paragraph style={styles.description}>{enName}</Paragraph>
          </View>
        </View>
        <View style={styles.createdAtContainer}>
          <Caption numberOfLines={1}>{createdAt}</Caption>
        </View>
      </View>
      <Touchable onPress={onCardPress} rippleColor={"grey"} />
    </View>
  );
}

export const TestResultHistoryCard = observer(TestResultHistoryCardComponent);
