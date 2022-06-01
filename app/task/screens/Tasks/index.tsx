import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useRoute } from "@react-navigation/native";
import {
  Button,
  Container,
  CustomBackdrop,
  Scroller,
  Subheading,
} from "../../../library";
import { TaskItem } from "../../components/TaskItem";
import { taskState } from "../../entities";
import { retrieveTasks } from "../../usecases";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { EditModal } from "../../components/EditModal";

function TasksScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  // const scrollRef = useRef<tScrollerRef>(null);
  const route = useRoute();
  const snapPoints = useMemo(() => [200, 230], []);
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);

  const close = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  // @ts-expect-error
  const customerId = route.params?.id || "";
  // function onNewTaskPress() {
  //   addEmptyTask();
  //   scrollRef.current?.scrollToEnd({ animated: true });
  // }

  function renderTaskItems() {
    const components: JSX.Element[] = [];
    for (let index = 0; index < taskState.taskList.length; index++) {
      const { id, content, done, createdAt } = taskState.taskList[index];
      components.push(
        <TaskItem
          key={id}
          id={id}
          userId={customerId}
          content={content}
          done={done}
          createdAt={createdAt}
          showEditModal={onCollapsePress}
        />
      );
    }
    return components;
  }
  async function init() {
    await retrieveTasks(customerId);
    //Check if state is empty or not
    if (taskState.taskList.length != 0) {
    }
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <Container loading={loading}>
      {taskState.taskList.length === 0 ? (
        <Subheading style={{ alignSelf: "center", paddingTop: 20 }}>
          {"شما تمرینی ندارید!"}
        </Subheading>
      ) : (
        <Scroller
          contentContainerStyle={styles.containerContentStyle}
          keyboard
          enableOnAndroid
          extraHeight={256}
        >
          {renderTaskItems()}
        </Scroller>
      )}
      <View style={[styles.buttonContainer]}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"FAB"}
          Icon={() => {
            return <Entypo name="plus" size={24} color="white" />;
          }}
          fullRadius
          onPress={() => {
            taskState.setCurrentEditTask(undefined);
            onCollapsePress();
          }}
        >
          {"افزودن تمرین جدید"}
        </Button>
      </View>
      <BottomSheetModal
        ref={BottomSheetModalRef}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        detached={true}
        bottomInset={50}
        style={styles.modal}
        index={1}
        enablePanDownToClose
      >
        <EditModal onClosePress={close} customerId={customerId} />
      </BottomSheetModal>
    </Container>
  );
}

export const Tasks = observer(TasksScreen);
