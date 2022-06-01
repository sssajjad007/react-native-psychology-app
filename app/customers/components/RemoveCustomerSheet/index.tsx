import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { styles } from "./styles";
import { Button, Subheading, Title } from "../../../library";
import { IRemoveCustomerSheetComponentProps } from "../../types";

export function RemoveCustomerSheetComponent(
  props: IRemoveCustomerSheetComponentProps
) {
  const { onCancelPress, onRemoveCustomerPress } = props;

  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={styles.textAlignCenter}>{"لغو اتصال بیمار"}</Title>
        <Subheading style={styles.textAlignCenter}>
          {"آیا میخواهید بیمار خود را حذف کنید؟"}
        </Subheading>
      </View>
      <View style={styles.descriptionContainer}>
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
          onPress={onRemoveCustomerPress}
        >
          {"حذفش کن"}
        </Button>
      </View>
    </BottomSheetView>
  );
}
export const RemoveCustomerSheet = observer(RemoveCustomerSheetComponent);
