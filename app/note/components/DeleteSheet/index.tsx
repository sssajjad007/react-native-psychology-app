import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Headline, Paragraph, Button } from "../../../library";

import { styles } from "./styles";
import { noteListState } from "../../entities";
import { onRemoveNote } from "../../usecases";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IDeleteSheetComponentProps } from "../../types";

function DeleteSheetComponent(props: IDeleteSheetComponentProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { onClosePress } = props;
  return (
    <View style={styles.container}>
      <Headline>{"حذف یادداشت؟"}</Headline>
      <Paragraph>{"یادداشت برای شما حذف خواهد شد"}</Paragraph>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"grey"}
          size={"medium"}
          onPress={onClosePress}
        >
          {"انصراف"}
        </Button>
        <Button
          mode={"contained-grey"}
          rippleColor={"lightGrey"}
          size={"medium"}
          onPress={async () => {
            console.log("delete note");
            const noteId = noteListState.currentNote?.id;
            if (noteId) {
              await onRemoveNote(noteId);
              navigation.goBack();
            }
          }}
        >
          {"حذف"}
        </Button>
      </View>
    </View>
  );
}

export const DeleteSheet = observer(DeleteSheetComponent);
