import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { styles } from "./styles";
import { IRTLView } from "./types";
function RTLViewComponent(props: IRTLView) {
  const { children } = props;
  return (
    <View {...props} style={styles.rtlView}>
      {children}
    </View>
  );
}

export const RTLView = observer(RTLViewComponent);
