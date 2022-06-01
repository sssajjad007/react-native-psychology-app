import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Headline,
  Scroller,
  TaskynIcon,
  CustomBackdrop,
} from "../../../library";

import { MenuItem, Avatar, ExitSheet } from "../../components";
import { profileState } from "../../entities";
import { retrieveUser } from "../../usecases";

import { styles } from "./styles";

function ProfileScreen() {
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const snapPoints = useMemo(() => ["30%", "30%"], []);
  const isFocused = useIsFocused();

  async function init() {
    await retrieveUser();
    setLoading(false);
  }
  const close = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  useEffect(() => {
    init();
  }, [isFocused]);
  return (
    <Container loading={loading}>
      <View style={styles.header}>
        <Headline>{"پروفایل"}</Headline>
        <Avatar size={96} uri={profileState.profilePictureUrl} />
        {/* {nameRenderer()} */}
        <Headline>{`${profileState.firstName} ${profileState.lastName}`}</Headline>
      </View>
      <View style={styles.menuContainer}>
        <Scroller gestureScroll>
          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"profile"} size={size} color={color} />;
            }}
            title="ویرایش پروفایل"
            onPress={() => navigation.push("EditProfile")}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return (
                <TaskynIcon name={"headphones"} size={size} color={color} />
              );
            }}
            title="پشتیبانی"
            onPress={() => navigation.push("Support")}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"info"} size={size} color={color} />;
            }}
            title="درباره ما"
            onPress={() => {
              navigation.push("AboutUs");
            }}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return (
                <TaskynIcon name={"help-circle"} size={size} color={color} />
              );
            }}
            title="سوالات متداول"
            onPress={() => navigation.push("FAQ")}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"law"} size={size} color={color} />;
            }}
            title="شرایط و قوانین"
            onPress={() => navigation.push("Terms")}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"document"} size={size} color={color} />;
            }}
            title="حریم خصوصی"
            onPress={() => navigation.push("Privacy")}
            line
          />

          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"logout"} size={size} color={color} />;
            }}
            title="خروج از حساب کاربری"
            onPress={onCollapsePress}
            // line
            logout
          />
        </Scroller>
      </View>
      <BottomSheetModal
        ref={BottomSheetModalRef}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        index={1}
        enablePanDownToClose
      >
        <ExitSheet onCancelPress={close} />
      </BottomSheetModal>
    </Container>
  );
}

export const Profile = observer(ProfileScreen);
