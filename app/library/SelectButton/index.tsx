import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Checkbox } from "../CheckBox";
import { Radio } from "../Radio";
import { Paragraph } from "../Typography";
import { Tap } from "../Tap";
import { styleGen } from "./styles";
import { ISelectButtonProps } from "./types";

function SelectButtonComponent(props: ISelectButtonProps) {
  const { id, mode, children, selected, size, onPress } = props;
  function renderSelector() {
    if (mode === "checkbox") {
      return <Checkbox checked={selected} size={size} />;
    }
    return <Radio checked={selected} size={size} />;
  }
  function onButtonPress() {
    if (onPress) {
      onPress(id || "");
    }
  }
  function renderChild() {
    if (typeof children === "string") {
      return <Paragraph>{children}</Paragraph>;
    }
    return children;
  }
  const styles = styleGen(size);
  return (
    <Tap onPress={onButtonPress}>
      <View style={styles.container}>
        <View style={styles.selectorContainer}>{renderSelector()}</View>
        <View style={styles.labelContainer}>{renderChild()}</View>
      </View>
    </Tap>
  );
}

export const SelectButton = observer(SelectButtonComponent);
