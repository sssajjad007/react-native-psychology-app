import React from "react";
import { View } from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";
import { Title, Subheading, Button } from "../../../library";

import { styles } from "./styles";
import { IRemoveSheetProps } from "../../types";
function RemoveSheetComponent(props: IRemoveSheetProps) {
  const { onCancelPress, onRemoveProvider } = props;
  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={{ textAlign: "center" }}>{" لغو اتصال با دکتر"}</Title>
        <Subheading style={{ textAlign: "center", top: 10 }}>
          {"آیا میخواهید دکتر خود را حذف کنید؟"}
        </Subheading>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-evenly",
          top: 30,
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
          onPress={onRemoveProvider}
        >
          {"حذفش کن"}
        </Button>
      </View>
    </BottomSheetView>
  );
}

export const RemoveSheet = observer(RemoveSheetComponent);
