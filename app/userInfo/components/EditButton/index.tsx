import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Button, logger, SuccessAlert } from "../../../library";

import { userInfoState } from "../../entities";
import { updateUserProfile } from "../../usecases";

function EditButtonComponent(props: {
  tintColor?: string;
  onCollapsePress: () => void;
  userId: string;
  errorRenderer: (error: string | undefined) => void;
}) {
  const { tintColor, onCollapsePress, userId, errorRenderer } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const save = "ذخیره";
  const edit = "ویرایش";

  async function onPress() {
    if (userInfoState.editable) {
      setLoading(true);
      const error = await updateUserProfile(userId); // TODO: handle error
      logger({
        container: "userInfo",
        path: { section: "components", file: "EditButtonComponent" },
        type: "error",
        logMessage: `error in updateUserProfile ${error}`,
      });
      setLoading(false);
      // remove these lines and refactor
      if (error === undefined) {
        errorRenderer(error);
      } else {
        return errorRenderer(error);
      }

      userInfoState.setEditable(false);
      return;
    }
    userInfoState.setEditable(true);
  }
  return (
    <Button
      mode={"text"}
      size={"growWithText"}
      rippleColor={"lightGrey"}
      textColor={"white"}
      onPress={onPress}
      loading={loading}
    >
      {userInfoState.editable ? save : edit}
    </Button>
  );
}

export const EditButton = observer(EditButtonComponent);
