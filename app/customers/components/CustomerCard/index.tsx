import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  Button,
  Caption,
  Paragraph,
  Touchable,
  TaskynIcon,
  CustomBackdrop,
  Avatar,
} from "../../../library";
import { styles, iconColor } from "./styles";
import { ICustomerCardProps } from "../../types";
import { removeCustomers } from "../../usecases";
import { RemoveCustomerSheet } from "../RemoveCustomerSheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

function CustomerCardComponent(props: ICustomerCardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { id, fullName, profileImageUrl, description, date } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["40%", "40%"], []);

  const close = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  async function onRemoveCustomer() {
    setLoading(true);
    await removeCustomers(id);
    setLoading(false);
    // TODO: remove customer
  }
  const onCustomerPress = useCallback(
    function onCustomer() {
      // TODO: navigation to dashboard screen
      navigation.push("dashboard", { id: id });
    },
    [id]
  );
 

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <Avatar imageUri={profileImageUrl} size={52} />
        </View>
        <View style={styles.infoContainer}>
          <Paragraph>{fullName}</Paragraph>
          <Caption>{description}</Caption>
        </View>
        <Touchable onPress={onCustomerPress} rippleColor={"lightGrey"} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained-grey"}
          rippleColor={"darkGrey"}
          size={"extra-small"}
          fullRadius
          loading={loading}
          onPress={onCollapsePress}
        >
          {"لغو اتصال"}
        </Button>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        index={1}
        enablePanDownToClose
      >
        <RemoveCustomerSheet
          onCancelPress={close}
          onRemoveCustomerPress={onRemoveCustomer}
        />
      </BottomSheetModal>
    </View>
  );
}

export const CustomerCard = observer(CustomerCardComponent);
