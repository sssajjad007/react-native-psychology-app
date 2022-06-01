import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { headerOptions } from "./headerOptions";
import {
  TestList,
  Questionnaire,
  TestDetails,
  MbtiResult,
  TestHistory,
  Chart,
} from "../app/psychologyTests";
import { TestResultScreen } from "../app/psychologyTests/screens/TestResult";
type TestStackParamList = {
  testList: undefined;
  testHistory: { id: string } | undefined;
  testDetails: { id: string };
  questionnaire: { id: string };
  mbtiResult: undefined; //TODO: remove this screen from stack
  testResultScreen: { id: string }; //TODO: what's id?
  chart: { id: string }; //TODO: what's id?
};

const TestStack = createNativeStackNavigator<TestStackParamList>();

function TestNavigator() {
  return (
    <TestStack.Navigator>
      <TestStack.Screen
        name={"testList"}
        component={TestList}
        options={{ headerShown: false }}
      />
      <TestStack.Screen
        name={"testResultScreen"}
        component={TestResultScreen}
        options={{ ...headerOptions, title: "نتیجه تست" }}
      />
      <TestStack.Screen
        name={"chart"}
        component={Chart}
        options={{ ...headerOptions, title: "نمودار تست" }}
      />

      <TestStack.Screen
        name={"testDetails"}
        component={TestDetails}
        options={({ route }) => ({
          ...headerOptions,
          title: `تست ${route.params.id?.toUpperCase()}`,
        })}
      />
      <TestStack.Screen
        name={"testHistory"}
        component={TestHistory}
        options={{ ...headerOptions, title: "تاریخچه تست ها" }}
      />
      <TestStack.Screen
        name={"questionnaire"}
        component={Questionnaire}
        options={({ route }) => ({
          ...headerOptions,
          title: `تست ${route.params.id?.toUpperCase()}`,
        })}
      />
      <TestStack.Screen
        name={"mbtiResult"}
        component={MbtiResult}
        options={{ ...headerOptions, title: "نتیجه تست" }}
      />
    </TestStack.Navigator>
  );
}

export const TestNav = observer(TestNavigator);
