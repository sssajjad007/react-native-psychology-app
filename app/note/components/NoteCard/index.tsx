import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import {
  Caption,
  Paragraph,
  Subheading,
  TaskynIcon,
  THEME,
  Touchable,
} from "../../../library";

import { styles } from "./styles";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { INoteProps } from "../../types";
import { noteListState } from "../../entities";

function NoteCardComponent(props: INoteProps) {
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  const { id, title, createdAt, description } = props;
  function onNotePress() {
    noteListState.setCurrentNote(id);
    navigator.push("note", { id });
  }
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TaskynIcon
          name={"notes"}
          size={24}
          color={THEME.COLORS.PRIMARY.NORMAL}
          boxed
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Subheading>{title}</Subheading>
          <Caption>{createdAt}</Caption>
        </View>
        <View style={styles.descriptionContainer}>
          <Paragraph
            numberOfLines={1}
            style={{ color: THEME.COLORS.GREY.DARK, textAlign: "right" }}
          >
            {description}
          </Paragraph>
        </View>
      </View>

      <Touchable onPress={onNotePress} rippleColor={"lightGrey"} />
    </View>
  );
}

export const NoteCard = observer(NoteCardComponent);
