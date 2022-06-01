import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Avatar,
  Button,
  Caption,
  CustomBackdrop,
  Paragraph,
} from "../../../library";
import { createRequest, removeProvider, removeRequest } from "../../usecases";

import { styles, iconColor } from "./styles";
import { IProviderCardProps } from "../../types";
import { providerState } from "../../entities";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SuccessAlert } from "../../../library/SuccessAlert";
import { RemoveSheet } from "../RemoveSheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

function ProviderCardComponent(props: IProviderCardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { id, fullName, profileImageUrl, description, myDoctor } = props;
  const snapPointsModal = useMemo(() => [150, 180], []);
  const [modalType, setModalType] = useState<
    "submitName" | "confirmRemoveConnection"
  >("submitName");
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const close = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePressModal = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  function buttonMode() {
    if (myDoctor === false) {
      return requestText;
    }
    if (myDoctor && providerState.requestConfirmed === false) {
      return cancelRequestText;
    }
    if (myDoctor && providerState.requestConfirmed) {
      return cancelConnectionText;
    }
    return "";
  }
  const requestText = "درخواست اتصال";
  const cancelRequestText = "لغو درخواست";
  const cancelConnectionText = "لغو اتصال";

  // const providerConnection = providerState.requestConfirmed
  //   ? cancelConnectionText
  //   : cancelRequestText;
  const [loading, setLoading] = useState<boolean>(false);
  async function onRemoveProvider() {
    await removeProvider(id);
  }
  async function onPress() {
    const mode = buttonMode();
    setLoading(true);
    if (mode === requestText) {
      const nameMustBeDefined = await createRequest(id);
      if (nameMustBeDefined) {
        setModalType("submitName");
        onCollapsePressModal();
      }
    } else if (mode === cancelRequestText) {
      await removeRequest();
    } else if (mode === cancelConnectionText) {
      setModalType("confirmRemoveConnection");
      onCollapsePressModal();
      // await removeProvider(id);
    }
    // myDoctor ? await removeRequest() : await createRequest(id);
    setLoading(false);
  }
  // function renderAvatar() {
  //   if (profileImageUrl) {
  //     return;
  //   }
  //   return <TaskynIcon name={"profile"} color={iconColor} size={24} boxed />;
  // }
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <Avatar size={52} imageUri={profileImageUrl} />
        </View>
        <View style={styles.infoContainer}>
          <Paragraph>{fullName}</Paragraph>
          <Caption>{description}</Caption>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {
          <Button
            mode={"contained"}
            rippleColor={"lightGrey"}
            size={"extra-small"}
            disabled={providerState.requestConfirmed && myDoctor === false}
            fullRadius
            loading={loading}
            onPress={onPress}
          >
            {buttonMode()}
          </Button>
        }
      </View>
      <BottomSheetModal
        ref={BottomSheetModalRef}
        snapPoints={snapPointsModal}
        backdropComponent={CustomBackdrop}
        detached={true}
        bottomInset={250}
        style={styles.modal}
        index={1}
        enablePanDownToClose
      >
        {modalType === "confirmRemoveConnection" ? (
          <RemoveSheet
            onCancelPress={close}
            onRemoveProvider={onRemoveProvider}
          />
        ) : (
          <SuccessAlert
            onPress={() => {
              navigation.push("EditProfile");
              close();
            }}
            buttonText={"برو به پروفایل"}
            title={"در بخش پروفایل و یا پرونده بیمار، اسم خود را وارد کنید"}
          />
        )}
      </BottomSheetModal>
    </View>
  );
}

export const ProviderCard = observer(ProviderCardComponent);
