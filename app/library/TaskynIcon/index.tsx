import React from "react";
import { View } from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";

import { File } from "./File";
import { FileHistory } from "./FileHistory";
import { Form } from "./Form";
import { Google } from "./Google";
import { Instagram } from "./Instagram";
import { Note } from "./Note";
import { Practice } from "./Practice";

import { styleGen } from "./styles";

import { ITaskynIconProps } from "./types";
const Icon = createIconSetFromIcoMoon(
  require("./selection.json"),
  "TaskynIcon",
  "iconmoon.ttf"
);
function TaskynIconComponent(props: ITaskynIconProps) {
  const { style, name, size, color, svg, boxed, boxColor, boxSize } = props;
  if (name === "google") {
    return <Google size={size} />;
  }
  if (svg) {
    if (name === "file") {
      return <File size={size} />;
    }
    if (name === "file-history") {
      return <FileHistory size={size} />;
    }
    if (name === "form") {
      return <Form size={size} />;
    }

    if (name === "instagram") {
      return <Instagram size={size} />;
    }
    if (name === "note") {
      return <Note size={size} />;
    }
    if (name === "practice") {
      return <Practice />;
    }
    return <Icon style={style} name={name} size={size} color={color} />;
  }
  if (boxed) {
    const { styles, iconSize } = styleGen(boxSize, boxColor);
    return (
      <View style={[styles.container, style]}>
        <Icon name={name} size={iconSize} color={color} />
      </View>
    );
  }
  return (
    <Icon
      style={style}
      name={name === "note" ? "ph_note" : name}
      size={size}
      color={color}
    />
  );
}

export const TaskynIcon = observer(TaskynIconComponent);
