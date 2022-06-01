import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { AnswerCard } from "../AnswerCard";
import { questionnaireState, testDetailState } from "../../entities";
import { onSetAnswer } from "../../usecases";

function ChoicesListComponent() {
  const choices =
    testDetailState.test.fields[`${questionnaireState.currentQuestion}`]
      .choices;
  const answerCards: JSX.Element[] = [];
  function onSetAnswerPress(id: string) {
    onSetAnswer(parseInt(id, 10), testDetailState.test.id);
  }
  const setAnswer = useCallback(onSetAnswerPress, [
    questionnaireState.currentQuestion,
  ]);
  for (let index = 0; index < choices.length; index++) {
    const { label, value } = choices[index];
    answerCards.push(
      <AnswerCard
        key={value}
        id={`${value}`}
        selected={
          questionnaireState.answers[questionnaireState.currentQuestion] ===
          value
        }
        text={label}
        onPress={setAnswer}
      />
    );
  }
  return <>{answerCards}</>;
}

export const ChoicesList = observer(ChoicesListComponent);
