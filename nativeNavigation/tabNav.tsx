import React from "react";
import { observer } from "mobx-react-lite";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProviderDashboardNav } from "./providerDashboard";
import { CustomerDashboardNav } from "./customerDashboard";
import { TestNav } from "./testNav";
import { ProfileNav } from "./profileNav";
import { getRole } from "../app/authentication";
import { TaskynIcon, THEME } from "../app/library";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const isProvider = getRole() === "provider";
  return (
    <Tab.Navigator
      initialRouteName={"dashboardTab"}
      backBehavior={"initialRoute"}
      safeAreaInsets={{ top: 0, bottom: 0 }}
      screenOptions={{
        tabBarActiveTintColor: THEME.COLORS.PRIMARY.NORMAL,
        tabBarInactiveTintColor: THEME.COLORS.GREY.NORMAL,
        tabBarStyle: {
          height: 56,
        },
        tabBarLabelStyle: {
          fontFamily: THEME.FONTS.MEDIUM,
          fontSize: 14,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={"profileTab"}
        component={ProfileNav}
        options={{
          tabBarLabel: "پروفایل",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"profile"} size={size} color={color} svg />
          ),
        }}
      />

      <Tab.Screen
        name={"testTab"}
        component={TestNav}
        options={{
          tabBarLabel: "تست",
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"document"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"dashboardTab"}
        component={isProvider ? ProviderDashboardNav : CustomerDashboardNav}
        options={{
          tabBarLabel: isProvider ? "بیماران" : "داشبورد",
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"home"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const TabNav = observer(TabNavigation);
