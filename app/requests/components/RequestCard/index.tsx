import React, { useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Button,
  Caption,
  Paragraph,
  TaskynIcon,
  TaskynImage,
} from "../../../library";
import { rejectRequest, confirmRequest } from "../../usecases";

import { styles, iconColor } from "./styles";
import type { IRequestCardProps } from "../../types";

function RequestCardComponent(props: IRequestCardProps) {
  const { id, fullName, profileImageUrl, description } = props;
  const [rejectLoading, setRejectLoading] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  async function onRejectRequest() {
    setRejectLoading(true);
    await rejectRequest(id);
    setRejectLoading(false);
  }
  async function onConfirmRequest() {
    setConfirmLoading(true);
    await confirmRequest(id);
    setConfirmLoading(false);
  }
  function renderAvatar() {
    if (profileImageUrl) {
      return (
        <TaskynImage
          style={styles.profileImage}
          source={{ uri: profileImageUrl }}
        />
      );
    }
    return <TaskynIcon name={"profile"} color={iconColor} size={24} boxed />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>{renderAvatar()}</View>
        <View style={styles.infoContainer}>
          <Paragraph>{fullName}</Paragraph>
          <Caption>{description}</Caption>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"text"}
          rippleColor={"lightGrey"}
          size={"extra-small"}
          fullRadius
          loading={rejectLoading}
          onPress={onRejectRequest}
        >
          {"رد کردن"}
        </Button>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"extra-small"}
          fullRadius
          loading={confirmLoading}
          onPress={onConfirmRequest}
        >
          {"قبول کردن"}
        </Button>
      </View>
    </View>
  );
}

export const RequestCard = observer(RequestCardComponent);
