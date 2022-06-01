import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Caption } from "../../../library";
import { createNoteState } from "../../entities";
import { styles } from "./styles";
function AttachCounterComponent() {
  if (createNoteState.images.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Caption style={styles.caption}>
        {digitsEnToFa(createNoteState.images.length)}
      </Caption>
    </View>
  );
}

export const AttachCounter = observer(AttachCounterComponent);
