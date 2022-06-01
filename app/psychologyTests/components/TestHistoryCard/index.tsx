import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { TaskynIcon, Paragraph, Touchable } from "../../../library";

import { styles, iconColor } from "./styles";
import { ITestHistoryCardProps } from "../../types";
function TestHistoryCardComponent(props: ITestHistoryCardProps) {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <TaskynIcon
        style={{ marginLeft: 16 }}
        name={"folder"}
        size={40}
        color={iconColor}
        boxed
      />
      <Paragraph>{"تاریخچه تست های شما"}</Paragraph>
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}

export const TestHistoryCard = observer(TestHistoryCardComponent);
