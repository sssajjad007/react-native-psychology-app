import React from "react";
import { observer } from "mobx-react-lite";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, EditProfile } from "../app/profile";
import { Support } from "../app/support";
import { AboutUs } from "../app/aboutUs";
import { FAQ } from "../app/FAQ";

import { headerOptions } from "./headerOptions";
import { Terms } from "../app/terms";
import { Privacy } from "../app/privacy";

const ProfileStack = createNativeStackNavigator();

function ProfileNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName={"Profile"}>
      <ProfileStack.Screen
        name={"Profile"}
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name={"EditProfile"}
        component={EditProfile}
        options={{ ...headerOptions, title: "ویرایش پروفایل" }}
      />
      <ProfileStack.Screen
        name={"Support"}
        component={Support}
        options={{ ...headerOptions, title: "پشتیبانی" }}
      />
      <ProfileStack.Screen
        name={"AboutUs"}
        component={AboutUs}
        options={{ ...headerOptions, title: "درباره ما" }}
      />
      <ProfileStack.Screen
        name={"FAQ"}
        component={FAQ}
        options={{ ...headerOptions, title: "سوالات متداول" }}
      />
      <ProfileStack.Screen
        name={"Terms"}
        component={Terms}
        options={{ ...headerOptions, title: "شرایط و قوانین" }}
      />

      <ProfileStack.Screen
        name={"Privacy"}
        component={Privacy}
        options={{ ...headerOptions, title: "حریم خصوصی" }}
      />
    </ProfileStack.Navigator>
  );
}
export const ProfileNav = observer(ProfileNavigation);
