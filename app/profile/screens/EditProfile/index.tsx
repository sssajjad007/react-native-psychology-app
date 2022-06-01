import React, { useCallback, useMemo, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";
import {
  Button,
  Input,
  Container,
  Scroller,
  CustomBackdrop,
  THEME,
} from "../../../library";

import { Avatar, PickImageSheet } from "../../components";
import { profileState } from "../../entities";
import { updateUser } from "../../usecases";

import { styles } from "./styles";
import { SuccessAlert } from "../../../library/SuccessAlert";

function EditProfileScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [updateUserLoading, setUpdateUserLoading] = useState(false);
  const snapPoints = useMemo(() => ["30%", "30%"], []);
  const snapPointsModal = useMemo(() => [150, 180], []);
  const [title, setTitle] = useState<"error" | "success">();
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const close = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const closeModal = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePressModal = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  async function onPress() {
    setUpdateUserLoading(true);
    await updateUser(); // TODO: handle error
    if (
      profileState.firstName === "" ||
      profileState.lastName === "" ||
      profileState.description === ""
    ) {
      setTitle("error");
    } else {
      setTitle("success");
    }
    setUpdateUserLoading(false);
    onCollapsePressModal();
    return;
  }
  function uploadImageLoading() {
    if (profileState.uploadLoadingImage) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.loading]}>
          <ActivityIndicator
            color={THEME.COLORS.PRIMARY.NORMAL}
            size={"large"}
          />
        </View>
      );
    }
    return null;
  }
  return (
    <>
      <Container>
        <Scroller gestureScroll>
          <View style={styles.profileImageContainer}>
            {uploadImageLoading()}
            <Avatar
              uri={profileState.profilePictureUrl}
              size={120}
              edit
              onEditPress={onCollapsePress}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              mode={"outlined"}
              textAlign={"right"}
              title={"نام"}
              value={profileState.firstName}
              onChangeText={(text) => {
                profileState.setFirstName(text);
              }}
            />
            <Input
              mode={"outlined"}
              textAlign={"right"}
              title={"نام خانوادگی"}
              value={profileState.lastName}
              onChangeText={(text) => {
                profileState.setLastName(text);
              }}
            />
            <Input
              mode={"outlined"}
              textAlign={"right"}
              title={"درباره خود"}
              value={profileState.description}
              onChangeText={(text) => {
                profileState.setDescription(text);
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode={"contained"}
              size={"wide"}
              rippleColor={"lightGrey"}
              onPress={onPress}
              loading={updateUserLoading}
            >
              {"ذخیره"}
            </Button>
          </View>
        </Scroller>
      </Container>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        enablePanDownToClose
      >
        <PickImageSheet onClosePress={close} />
      </BottomSheet>
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
        <SuccessAlert
          onPress={closeModal}
          buttonText={"متوجه شدم"}
          title={
            title === "error"
              ? "یکی از فیلدها خالی می باشد!"
              : "اطلاعات با موفقیت ذخیره شد."
          }
        />
      </BottomSheetModal>
    </>
  );
}

export const EditProfile = observer(EditProfileScreen);
