import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { Note, NoteList, CreateNote, NoteGallery } from "../app/note";
import { headerOptions } from "./headerOptions";

const NoteStack = createNativeStackNavigator();

function NoteNavigation() {
  const params = useRoute().params;
  return (
    <NoteStack.Navigator
      initialRouteName={"noteList"}
      screenOptions={({ route }) => ({ ...headerOptions })}
    >
      <NoteStack.Screen
        name={"noteList"}
        component={NoteList}
        options={{ title: "یادداشت ها" }}
        initialParams={params}
      />
      <NoteStack.Screen
        name={"createNote"}
        component={CreateNote}
        options={{ title: "ایجاد یادداشت" }}
      />
      <NoteStack.Screen
        name={"note"}
        component={Note}
        options={{ headerShown: false }}
      />
      <NoteStack.Screen
        name={"noteGallery"}
        component={NoteGallery}
        options={{ headerShown: false }}
      />
    </NoteStack.Navigator>
  );
}

export const NoteNav = observer(NoteNavigation);
