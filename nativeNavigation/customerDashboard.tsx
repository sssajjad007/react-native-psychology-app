import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { Providers } from "../app/providers";
import { UserInfo } from "../app/userInfo";
import { Tasks } from "../app/task";
import { Dashboard } from "../app/dashboard";

import { headerOptions } from "./headerOptions";
import { EditProfile } from "../app/profile";

const DashboardStack = createNativeStackNavigator();

function CustomerDashboardNavigation() {
  return (
    <DashboardStack.Navigator initialRouteName={"dashboard"}>
      <DashboardStack.Screen
        name={"dashboard"}
        options={{ headerShown: false }}
        component={Dashboard}
      />
      <DashboardStack.Screen
        name={"providers"}
        component={Providers}
        options={{ ...headerOptions, title: "دکتر ها" }}
      />
      <DashboardStack.Screen
        name={"userInfo"}
        component={UserInfo}
        options={{ ...headerOptions, title: "پرونده بیمار" }}
      />
      <DashboardStack.Screen
        name={"tasks"}
        component={Tasks}
        options={{ ...headerOptions, title: "تمرینات" }}
      />
      <DashboardStack.Screen
        name={"EditProfile"}
        component={EditProfile}
        options={{ ...headerOptions, title: "تمرینات" }}
      />
    </DashboardStack.Navigator>
  );
}

export const CustomerDashboardNav = observer(CustomerDashboardNavigation);
