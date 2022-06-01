import React, { useState } from "react";
import { View } from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Button, Input } from "../../../library";

import { taskState } from "../../entities";
import { updateTask, createTask } from "../../usecases";

import { styles } from "./styles";
import { IEditModalProps } from "../../types";

function EditModalComponent(props: IEditModalProps) {
  const { onClosePress, customerId } = props; // TODO: on close press is right
  const currentEditTask = toJS(taskState.currentEditTask);
  const [upsertTaskLoading, setUpsertTaskLoading] = useState<boolean>(false);
  const [tempContent, setTempContent] = useState(
    currentEditTask ? currentEditTask.content : ""
  );

  async function onCreatePress() {
    if (currentEditTask) {
      const { id } = currentEditTask;
      setUpsertTaskLoading(true);
      await updateTask({
        taskId: id,
        content: tempContent,
        userId: customerId,
      });
      // setUpsertTaskLoading(false);
      onClosePress();
      return;
    }
    setUpsertTaskLoading(true);
    const created = await createTask(tempContent, customerId || "");
    if (created) {
      // setEdit(false);
      // TODO: handle error state here
    }
    setUpsertTaskLoading(false);
    onClosePress();
  }
  return (
    <BottomSheetView style={styles.container}>
      <Input
        value={tempContent}
        mode={"no-style"}
        style={{ paddingRight: 10 }}
        placeholder={"موضوع تمرین را بنویسید ..."}
        multiline={true}
        onChangeText={(text) => setTempContent(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained-grey"}
          size={"small"}
          rippleColor={"lightGrey"}
          onPress={onClosePress}
        >
          {"لغو"}
        </Button>
        <Button
          mode={"contained"}
          size={"small"}
          rippleColor={"lightGrey"}
          onPress={onCreatePress}
          loading={upsertTaskLoading}
        >
          {"ذخیره"}
        </Button>
      </View>
    </BottomSheetView>
  );
}

export const EditModal = observer(EditModalComponent);
