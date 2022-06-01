import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react-lite";
import { NetInfo } from "./NetInfo";
import { Loading } from "./Loading";
import { styles } from "./styles";
import { IContainerProps } from "./types";

function ContainerComponent(props: IContainerProps) {
  const { children, style, loading } = props;

  return (
    <SafeAreaView
      {...props}
      style={[styles.container, style]}
      edges={["top", "left", "right"]}
    >
      {loading ? <Loading /> : children}
      <NetInfo />
    </SafeAreaView>
  );
}

export const Container = observer(ContainerComponent);
