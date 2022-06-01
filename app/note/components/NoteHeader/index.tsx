import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { Ionicons } from "@expo/vector-icons";
import { IconButton, Button, TaskynIcon } from "../../../library";

import { styles, iconButtonStyle } from "./styles";
import type { INoteHeaderProps } from "../../types";
import { noteListState } from "../../entities";

function NoteHeaderComponent(props: INoteHeaderProps) {
  const { onDeletePress, onUpdateNotePress } = props;
  const navigator = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  async function onUpdateNote() {
    setLoading(true);
    await onUpdateNotePress();
    setLoading(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <IconButton
          color={iconButtonStyle.color}
          size={iconButtonStyle.size}
          Icon={({ size, color }) => {
            return (
              <Ionicons
                name={"ios-arrow-forward"}
                size={size + 2}
                color={color}
              />
            );
          }}
          onPress={navigator.goBack}
        />
      </View>
      <View style={styles.iconButtonContainer}>
        <View style={styles.iconButtonWrapper}>
          <IconButton
            color={iconButtonStyle.color}
            size={iconButtonStyle.size}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"trash"} size={size} color={color} />;
            }}
            onPress={onDeletePress}
          />
        </View>
        {noteListState.currentNote?.edit ? //   size={iconButtonStyle.size} //   color={iconButtonStyle.color} // <IconButton
        //   Icon={({ size, color }) => {
        //     return (
        //       <TaskynIcon name={"paperclip"} size={size} color={color} />
        //     );
        //   }}
        //   onPress={() => {
        //     console.log("attach");
        //   }}
        // />

        null : (
          <IconButton
            color={iconButtonStyle.color}
            size={iconButtonStyle.size}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"pencil"} size={size} color={color} />;
            }}
            onPress={() => {
              noteListState.setEditable(true);
            }}
          />
        )}
      </View>

      <View style={styles.saveContainer}>
        {noteListState.currentNote?.edit ? (
          <Button
            mode={"text"}
            rippleColor={"lightGrey"}
            size={"growWithText"}
            loading={loading}
            onPress={onUpdateNote}
          >
            {"ذخیره"}
          </Button>
        ) : null}
      </View>
    </View>
  );
}

export const NoteHeader = observer(NoteHeaderComponent);
