import React from "react";
import { observer } from "mobx-react-lite";
import { BottomSheetView } from "@gorhom/bottom-sheet";

import { Button, TaskynIcon, Title } from "../../../library";

import { uploadProfilePicture } from "../../usecases";

import { styles } from "./styles";

function PickImageSheetComponent(props: any) {
  const { onClosePress } = props;

  return (
    <BottomSheetView style={styles.container}>
      <Title>{"انتخاب عکس پروفایل"}</Title>
      <Button
        mode={"text"}
        size={"growWithText"}
        rippleColor={"lightGrey"}
        Icon={({ size, color }) => {
          return <TaskynIcon name={"camera"} size={size} color={color} />;
        }}
        onPress={async () => {
          await uploadProfilePicture("camera", onClosePress);
        }}
      >
        {"عکس از دوربین"}
      </Button>
      <Button
        mode={"text"}
        size={"growWithText"}
        rippleColor={"lightGrey"}
        Icon={({ size, color }) => {
          return <TaskynIcon name={"image"} size={size} color={color} />;
        }}
        onPress={() => {
          uploadProfilePicture("gallery", onClosePress);
        }}
      >
        {"عکس از گالری"}
      </Button>
    </BottomSheetView>
  );
}

export const PickImageSheet = observer(PickImageSheetComponent);
