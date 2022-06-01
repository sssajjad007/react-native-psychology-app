import React from "react";
import { styles } from "./styles";
import { observer } from "mobx-react-lite";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import type { ISuccessAlertProps } from "./types";
import { Button } from "../Button";
import { Title } from "../Typography";
function SuccessAlertComponent(props: ISuccessAlertProps) {
  const { onPress, title, buttonText } = props;
  return (
    <BottomSheetView style={styles.container}>
      <Title style={{ textAlign: "center" }}>
        {title ? title : "عملیات با موفقیت انجام شد!"}
      </Title>
      <Button
        mode={"contained"}
        size={"medium"}
        rippleColor={"lightGrey"}
        onPress={onPress}
      >
        {buttonText}
      </Button>
    </BottomSheetView>
  );
}

export const SuccessAlert = observer(SuccessAlertComponent);
