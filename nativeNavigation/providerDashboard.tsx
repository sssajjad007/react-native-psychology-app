import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { UserInfo } from "../app/userInfo";
import { Tasks } from "../app/task";
import { Dashboard } from "../app/dashboard";
import { Requests } from "../app/requests";
import { Customers } from "../app/customers";
import { Chart, TestHistory } from "../app/psychologyTests";
// import { } from "../app/"

import { headerOptions } from "./headerOptions";

import { NoteNav } from "./noteNav";
import { TestResultScreen } from "../app/psychologyTests/screens/TestResult";
const DashboardStack = createNativeStackNavigator();

function ProviderDashboardNavigation() {
  return (
    <DashboardStack.Navigator initialRouteName={"customers"}>
      <DashboardStack.Screen
        name={"customers"}
        options={{ headerShown: false }}
        component={Customers}
      />
      <DashboardStack.Screen
        name={"requests"}
        options={{ ...headerOptions, title: "درخواست ها" }}
        component={Requests}
      />

      <DashboardStack.Screen
        name={"dashboard"}
        options={{ headerShown: false }}
        component={Dashboard}
      />
      <DashboardStack.Screen
        name={"userInfo"}
        component={UserInfo}
        options={{ ...headerOptions, title: "پرونده من" }}
      />
      <DashboardStack.Screen
        name={"tasks"}
        component={Tasks}
        options={{ ...headerOptions, title: "تمرینات" }}
      />

      <DashboardStack.Screen
        name={"notes"}
        component={NoteNav}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={"testHistory"}
        component={TestHistory}
        options={{ ...headerOptions, title: "تاریخچه تست ها" }}
      />
      <DashboardStack.Screen
        name={"chart"}
        component={Chart}
        options={{ ...headerOptions, title: "تاریخچه تست ها" }}
      />
      <DashboardStack.Screen
        name={"testResultScreen"}
        component={TestResultScreen}
        options={{ ...headerOptions, title: "نتیجه تست" }}
      />

      
    </DashboardStack.Navigator>
  );
}

export const ProviderDashboardNav = observer(ProviderDashboardNavigation);
