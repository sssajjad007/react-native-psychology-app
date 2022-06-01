import React, { useState, useEffect, useCallback } from "react";
import { Image, ImageProps } from "react-native";
import { observer } from "mobx-react-lite";
import { secureStorage } from "../storage";

function TaskynImageComponent(props: ImageProps) {
  const { source } = props;
  const [token, setToken] = useState<string>("");
  const init = useCallback(async function init() {
    const jwt = await secureStorage.retrieve("token");
    if (jwt) {
      setToken(jwt);
    }
  }, []);
  useEffect(() => {
    init();
  }, []);

  if (token) {
    const imageSource = Object.assign(source, {
      headers: { authorization: `Bearer ${token}` },
    });
    return <Image {...props} source={imageSource} />;
  }
  return null;
}

export const TaskynImage = observer(TaskynImageComponent);
