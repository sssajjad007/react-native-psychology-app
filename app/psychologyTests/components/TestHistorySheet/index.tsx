import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Button, Subheading, Title } from "../../../library";

import { testDetailState } from "../../entities";
import { removeTestSession, continueTestSession } from "../../usecases";

import { styles } from "./styles";
import { ITestHistorySheet } from "../../types";

function TestHistorySheetComponent(props: ITestHistorySheet) {
  const { navigateToQuestionnaire, onClosePress } = props;
  function onStartFromBeginningPress() {
    removeTestSession(testDetailState.test.id, testDetailState.fieldSize);
    navigateToQuestionnaire();
  }
  function onContinuePress() {
    continueTestSession(testDetailState.test.id, testDetailState.fieldSize);
    navigateToQuestionnaire();
  }
  return (
    <BottomSheetView style={styles.container}>
      <Title style={styles.title}>{"شروع تست"}</Title>
      <Subheading style={styles.subheading}>
        {
          "آیا میخواهید از جایی که قبلا خارج شدید ادامه دهید یا از اول شروع میکنید؟"
        }
      </Subheading>

      <View style={styles.buttonContainer}>
        <Button
          mode={"contained-grey"}
          size={"medium"}
          rippleColor={"lightGrey"}
          onPress={() => {
            onStartFromBeginningPress();
            onClosePress();
          }}
        >
          {"شروع از اول"}
        </Button>
        <Button
          mode={"contained"}
          size={"medium"}
          rippleColor={"lightGrey"}
          onPress={() => {
            onContinuePress();
            onClosePress();
          }}
        >
          {"ادامه میدهم"}
        </Button>
      </View>
    </BottomSheetView>
  );
}

export const TestHistorySheet = observer(TestHistorySheetComponent);
