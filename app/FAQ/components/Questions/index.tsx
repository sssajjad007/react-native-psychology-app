import React from "react";
import { View, Text } from "react-native";
import { Caption, Subheading, Title } from "../../../library";
import { styles } from "./styles";
import { IQuestionsProps } from "./types";
export function Questions(props: IQuestionsProps) {
  const { question, answer, line } = props;
  return (
    <View style={styles.container}>
      <Subheading>{question}</Subheading>
      <Caption>{answer}</Caption>
      {line ? <View style={styles.line}></View> : undefined}
    </View>
  );
}
