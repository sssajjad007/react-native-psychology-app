import React from "react";
import { observer } from "mobx-react-lite";
import { Image } from "react-native";
import { TaskynIcon } from "../TaskynIcon";
import { TaskynImage } from "../TaskynImage"
import { borderRadius, color, styleGen } from "./styles";

import type { IAvatarProps } from "./types";

function AvatarComponent(props: IAvatarProps) {
  const { size, imageUri } = props;
  const styles = styleGen(size);
  if (imageUri) {
    return (
      <TaskynImage
        source={{ uri: imageUri }}
        style={styles.image}
        borderRadius={borderRadius}
      />
    );
  }
  return (
    <TaskynIcon
      name={"profile"}
      boxed
      boxSize={size}
      color={color}
      size={size}
    />
  );
}

export const Avatar = observer(AvatarComponent);
