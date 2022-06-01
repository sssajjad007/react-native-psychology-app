import React from "react";
import { View } from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";
import { exit } from "../../../authentication";
import { Title, Subheading, Button } from "../../../library";

import { styles } from "./styles";
import { IExitSheetProps } from "../../types";
function ExitSheetComponent(props: IExitSheetProps) {
  const { onCancelPress } = props;
  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={{ textAlign: "center" }}>{"خروج از حساب کاربری"}</Title>
        <Subheading style={{ textAlign: "center", top: 10 }}>
          {"آیا میخواهید از حساب خود خارج شوید؟"}
        </Subheading>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingTop: 20,
        }}
      >
        <Button
          mode={"contained"}
          size={"medium"}
          rippleColor={"lightGrey"}
          onPress={onCancelPress}
        >
          {"انصراف"}
        </Button>
        <Button
          mode={"contained-grey"}
          size={"medium"}
          rippleColor={"lightGrey"}
          onPress={exit}
        >
          {"خروج"}
        </Button>
      </View>
    </BottomSheetView>
  );
}

export const ExitSheet = observer(ExitSheetComponent);
