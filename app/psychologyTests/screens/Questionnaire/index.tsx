import React, { useEffect } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container, Paragraph, Scroller, Title } from "../../../library";
import { ChoicesList, QuestionNavigator } from "../../components";
import { testDetailState, questionnaireState } from "../../entities";

import { styles } from "./styles";
function QuestionnaireScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const choices =
    testDetailState.test.fields[`${questionnaireState.currentQuestion}`].choices
      .length;
  function formatTitle() {
    return (
      digitsEnToFa(questionnaireState.currentQuestion) +
      "- " +
      testDetailState.test.fields[`${questionnaireState.currentQuestion}`]
        .question
    );
  }
  useEffect(() => {
    return () => {
      questionnaireState.reset();
    };
  }, []);
  return (
    <Container>
      <View style={styles.questionContainer}>
        <Title>{formatTitle()}</Title>
        <Paragraph
          style={{ paddingTop: 10 }}
        >{`تعداد گزینه ها: ${choices}`}</Paragraph>
      </View>
      <View style={styles.answerCardsScrollView}>
        <Scroller>
          <ChoicesList />
        </Scroller>
      </View>
      <QuestionNavigator />
    </Container>
  );
}

export const Questionnaire = observer(QuestionnaireScreen);
