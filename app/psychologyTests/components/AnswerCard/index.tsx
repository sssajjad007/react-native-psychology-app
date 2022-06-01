import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Subheading, SelectButton } from "../../../library";

import { styles, radioSize } from "./styles";

import { IAnswerCardProps } from "../../types";

function AnswerCardComponent(props: IAnswerCardProps) {
  const { id, selected, onPress, text } = props;
  return (
    <View style={styles.container}>
      <SelectButton
        id={id}
        size={radioSize}
        mode={"radio"}
        selected={selected}
        onPress={onPress}
      >
        <Subheading  style={styles.subheading}>{text}</Subheading>
      </SelectButton>
    </View>
  );
}

export const AnswerCard = observer(AnswerCardComponent);
