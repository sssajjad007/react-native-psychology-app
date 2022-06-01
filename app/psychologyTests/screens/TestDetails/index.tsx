import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  Button,
  Paragraph,
  Subheading,
  Title,
  TaskynIcon,
  CustomBackdrop,
  Container,
  Scroller,
} from "../../../library";

import { TestHistorySheet } from "../../components";
import { testDetailState } from "../../entities";
import { retrieveTestDetail, testSessionExists } from "../../usecases";

import { styles, iconStyle } from "./styles";
import { digitsEnToFa } from "@persian-tools/persian-tools";
type TestStackParamList = {
  testList: undefined;
  testDetails: { id: string };
  questionnaire: undefined;
  mbtiResult: undefined;
};
type RouteParams = RouteProp<TestStackParamList, "testDetails">;
//TODO: refactor styles
export function TestDetailsScreen() {
  const route = useRoute<RouteParams>();
  const [loading, setLoading] = useState(true);
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["40%", "40%"], []);
  const close = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  function navigateToQuestionnaire() {
    navigator.push("questionnaire", { id: route.params.id });
  }
  function onStartTestPress() {
    if (testSessionExists(testDetailState.test.id)) {
      onCollapsePress();
      return;
    }
    navigateToQuestionnaire();
  }
  async function init() {
    await retrieveTestDetail(route.params.id);
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <Container loading={loading}>
      <View style={styles.detailsContainer}>
        <Title>{testDetailState.test.title.fa}</Title>
        <Subheading style={styles.enTitle}>
          {testDetailState.test.title.en}
        </Subheading>
      </View>
      <Scroller>
        <View style={styles.descriptionContainer}>
          <Paragraph style={{ lineHeight: 24 }}>
            {testDetailState.test.description}
          </Paragraph>
        </View>
      </Scroller>

      <View style={styles.formDetails}>
        <View style={styles.formDetailsBody}>
          <Paragraph style={styles.timeNeeded}>
            {"زمان لازم: "}
            <Paragraph>{`${digitsEnToFa(
              testDetailState.test.minutesToFill
            )} دقیقه`}</Paragraph>
          </Paragraph>
          <TaskynIcon
            name={"timer"}
            size={iconStyle.size}
            color={iconStyle.color}
          />
        </View>
        <View style={styles.formDetailsBody}>
          <Paragraph style={styles.testCount}>
            {"تعداد تست ها: "}
            <Paragraph>
              {digitsEnToFa(Object.keys(testDetailState.test.fields).length)}
            </Paragraph>
          </Paragraph>
          <TaskynIcon
            name={"task"}
            size={iconStyle.size}
            color={iconStyle.color}
          />
        </View>
      </View>
      <View style={styles.startTestContainer}>
        <Button
          mode={"contained"}
          size={"wide"}
          rippleColor={"lightGrey"}
          onPress={onStartTestPress}
        >
          {"شروع تست"}
        </Button>
      </View>
      <BottomSheetModal
        ref={BottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        enablePanDownToClose={true}
      >
        <TestHistorySheet
          navigateToQuestionnaire={navigateToQuestionnaire}
          onClosePress={close}
        />
      </BottomSheetModal>
    </Container>
  );
}

export const TestDetails = observer(TestDetailsScreen);
