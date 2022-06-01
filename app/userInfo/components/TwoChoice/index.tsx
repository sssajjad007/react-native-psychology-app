import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { SelectButton, Subheading } from "../../../library";

import { styles } from "./styles";
import { ITwoChoiceProps } from "../../types";

function TwoChoiceComponent(props: ITwoChoiceProps) {
  const {
    title,
    choiceState,
    firstChoice,
    secondChoice,
    onFirstChoicePress,
    onSecondChoicePress,
    editable,
  } = props;
  return (
    <View style={styles.container} pointerEvents={editable ? "auto" : "none"}>
      <Subheading>{title}</Subheading>
      <View style={styles.selectButtonContainer}>
        <SelectButton
          mode={"radio"}
          selected={choiceState === firstChoice}
          size={24}
          onPress={onFirstChoicePress}
        >
          <Subheading style={styles.choiceText}>{firstChoice}</Subheading>
        </SelectButton>
      </View>
      <View style={styles.selectButtonContainer}>
        <SelectButton
          mode={"radio"}
          selected={choiceState === secondChoice}
          size={24}
          onPress={onSecondChoicePress}
        >
          <Subheading style={styles.choiceText}>{secondChoice}</Subheading>
        </SelectButton>
      </View>
    </View>
  );
}

export const TwoChoice = observer(TwoChoiceComponent);
