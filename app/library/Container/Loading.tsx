import React from "react";
import { View, ActivityIndicator } from "react-native";
import { observer } from "mobx-react-lite";

import { activityColor, styles } from "./styles";

function LoadingComponent() {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={"large"} color={activityColor} />
    </View>
  );
}

export const Loading = observer(LoadingComponent);
