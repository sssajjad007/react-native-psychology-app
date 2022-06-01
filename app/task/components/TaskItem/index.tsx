import React, { useCallback, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Caption,
  Button,
  Paragraph,
  CustomBackdrop,
  logger,
} from "../../../library";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { taskState } from "../../entities";
import { taskDone, removeTask } from "../../usecases";

import { styles } from "./styles";
import { ITaskItemProps } from "../../types";
import { ConfirmSheet } from "../ConfirmSheet";

function TaskItemComponent(props: ITaskItemProps) {
  const { id, userId, content, done, createdAt, showEditModal } = props;

  // const [showMenu, setShowMenu] = useState(false);
  const snapPointsModal = useMemo(() => [150, 180], []);
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [doneLoading, setDoneLoading] = useState<boolean>(false);
  function onEditPress() {
    // setShowMenu(false);
    taskState.setCurrentEditTask(id);
    // show edit modal
    showEditModal();
  }
  async function onRemovePress() {
    await removeTask(id, userId || "");
    closeModal();
  }
  const closeModal = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePressModal = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  async function onDone() {
    try {
      setDoneLoading(true);
      //@ts-expect-error
      await taskDone(id, userId);
      setDoneLoading(false);
    } catch (error) {
      logger({
        container: "task",
        path: { section: "components", file: "TaskItem" },
        type: "error",
        logMessage: `error in onDone: ${error}`,
      });
    }
  }

  function renderFooter() {
    if (done) {
      return <Paragraph style={styles.doneParagraph}>{"انجام دادم"}</Paragraph>;
    }
    return (
      <View style={styles.makeDoneContainer}>
        <Button
          mode={"text"}
          size={"growWithText"}
          loading={doneLoading}
          rippleColor={"lightGrey"}
          onPress={onCollapsePressModal}
        >
          {"حذف"}
        </Button>
        <Button
          mode={"text"}
          size={"growWithText"}
          loading={doneLoading}
          rippleColor={"lightGrey"}
          onPress={onEditPress}
        >
          {"ویرایش"}
        </Button>
        <Button
          mode={"text"}
          size={"growWithText"}
          loading={doneLoading}
          rippleColor={"lightGrey"}
          onPress={onDone}
        >
          {"اتمام"}
        </Button>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Caption>{createdAt}</Caption>
        </View>
        <View style={styles.textContainer}>
          <Paragraph>{content}</Paragraph>
        </View>
        <View style={styles.footer}>{renderFooter()}</View>
      </View>
      <BottomSheetModal
        ref={BottomSheetModalRef}
        snapPoints={snapPointsModal}
        backdropComponent={CustomBackdrop}
        detached={true}
        bottomInset={250}
        style={styles.modal}
        index={1}
        enablePanDownToClose
      >
        <ConfirmSheet
          onRemovePress={onRemovePress}
          onCancelPress={closeModal}
        />
      </BottomSheetModal>
    </>
  );
}

export const TaskItem = observer(TaskItemComponent);
