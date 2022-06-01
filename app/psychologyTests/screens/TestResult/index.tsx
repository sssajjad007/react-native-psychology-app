import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Button,
  Container,
  Headline,
  logger,
  Scroller,
  Title,
} from "../../../library";
import { styles } from "./styles";
import { TestResultCard } from "../../components";
import { testResultState } from "../../entities";
import { retrieveTestResult } from "../../usecases";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";

export function TestResultScreen() {
  const route = useRoute();
  //@ts-ignore
  const mode = route.params?.mode || "";
  const [resultSummary, setResultSummary] = useState<string>("");
  const isTestHistory = mode === "testHistory";
  const [loading, setLoading] = useState(isTestHistory);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  //@ts-ignore
  const testId = route.params?.testId || "";
  //@ts-ignore
  const customerId = route.params?.customerId || "";
  navigation.setOptions({
    headerRight: () => (
      <Button
        mode={"text"}
        size={"growWithText"}
        rippleColor={"lightGrey"}
        textColor={"white"}
        onPress={() => {
          console.log("chart");
          navigation.push("chart");
        }}
      >
        {"نمودار"}
      </Button>
    ),
  });
  async function init() {
    // console.log(id);
    logger({
      container: "psychologyTests",
      path: { section: "screens", file: "TestResult" },
      type: "debug",
      logMessage: `test id is : ${testId}`,
    });
    const resultSummaryForMBTI = await retrieveTestResult(testId, customerId);
    if (resultSummaryForMBTI) {
      //@ts-expect-error
      setResultSummary(resultSummaryForMBTI);
    } else {
      setResultSummary("");
    }
    setLoading(false);
  }
  function renderResultSummaryForMBTI() {
    return resultSummary ? (
      <View style={styles.cardConttainerForMBTIResult}>
        <View style={styles.sideBarColor} />
        <View style={styles.MBTIResultCard}>
          <View style={styles.textContainer}>
            <Headline>{`نتیجه نهایی: ${resultSummary}`}</Headline>
          </View>
        </View>
      </View>
    ) : null;
  }
  function renderTestResult() {
    //@ts-expect-error
    const result: JSX.Element[] = [renderResultSummaryForMBTI()];
    const length = testResultState.testResult.length;
    for (let index = 0; index < length; index++) {
      const element = testResultState.testResult[index];
      result.push(
        <TestResultCard
          key={element.variable}
          faName={element.faName}
          enName={element.enName}
          variable={element.variable}
          rawScore={element.rawScore}
          baseRate={element.baseRate}
          //@ts-ignore
          type={element.type}
          interpret={element.interpret}
        />
      );
    }
    // console.log("result", result);
    return result;
  }

  useEffect(() => {
    if (isTestHistory) {
      init();
    }
  }, []);

  return (
    <Container loading={loading}>
      <Scroller
        style={styles.cardContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {renderTestResult()}
      </Scroller>
    </Container>
  );
}

export const TestResult = observer(TestResultScreen);
