import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { RectButton } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withTiming,
} from "react-native-reanimated";
import { Button, TaskynIcon } from "../../../library";
import { styles } from "./styles";

import { ITaskMenuProps } from "../../types";

function TaskMenuComponent(props: ITaskMenuProps) {
  const { show, onHidePress, onEditPress, onRemovePress } = props;
  const [removeLoading, setRemoveLoading] = useState<boolean>(false);
  async function onRemove() {
    setRemoveLoading(true);
    await onRemovePress();
    setRemoveLoading(false);
  }
  const animation = useSharedValue(0);
  useEffect(() => {
    if (show) {
      animation.value = withTiming(1, { duration: 240 });
    } else {
      animation.value = withTiming(0, { duration: 180 });
    }
  }, [show]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            animation.value,
            [0, 1],
            [0.5, 1],
            Extrapolate.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        animation.value,
        [0, 0.5, 1],
        [0, 0.8, 1],
        Extrapolate.CLAMP
      ),
    };
  });
  return (
    <RectButton
      style={styles.container}
      rippleColor={"transparent"}
      onPress={onHidePress}
    >
      <Animated.View style={[styles.taskMenuContainer, animatedStyle]}>
        <Button
          mode={"text"}
          size={"small"}
          rippleColor={"lightGrey"}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"pencil"} color={color} size={size} />;
          }}
          onPress={onEditPress}
        >
          {"ویرایش"}
        </Button>
        <Button
          mode={"text"}
          size={"small"}
          loading={removeLoading}
          rippleColor={"lightGrey"}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"trash"} color={color} size={size} />;
          }}
          onPress={onRemove}
        >
          {"حذف"}
        </Button>
      </Animated.View>
    </RectButton>
  );
}

export const TaskMenu = observer(TaskMenuComponent);
