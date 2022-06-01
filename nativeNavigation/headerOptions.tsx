import React from "react";
import { HeaderTitleProps } from "@react-navigation/elements";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { THEME, Title } from "../app/library";

export const headerOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: THEME.COLORS.PRIMARY.NORMAL },
  headerTitleAlign: "center",
  headerTitle: (props: HeaderTitleProps) => (
    <Title style={{ paddingTop: 6, color: props.tintColor }}>
      {props.children}
    </Title>
  ),
  headerTintColor: "white",
};
