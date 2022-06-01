import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withTiming,
} from "react-native-reanimated";
import { Button, TaskynIcon } from "../../../library";
import { createNoteState } from "../../entities";
import { onCameraPress, onGalleryPress } from "../../usecases";
import { styles } from "./styles";
function AttachMenuComponent() {
  const animation = useSharedValue(0);
  useEffect(() => {
    const disposer = autorun(() => {
      if (createNoteState.showMenu) {
        animation.value = withTiming(1, { duration: 240 });
      } else {
        animation.value = withTiming(0, { duration: 180 });
      }
    });
    return () => {
      disposer();
    };
  }, []);
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
    <Animated.View
      style={[styles.container, animatedStyle]}
      pointerEvents={animation.value === 1 ? "none" : "auto"}
    >
      <Button
        mode={"text"}
        size={"small"}
        rippleColor={"lightGrey"}
        Icon={({ size, color }) => {
          return <TaskynIcon name={"camera"} color={color} size={size} />;
        }}
        onPress={onCameraPress}
      >
        {"عکس از دوربین"}
      </Button>
      <Button
        mode={"text"}
        size={"small"}
        rippleColor={"lightGrey"}
        Icon={({ size, color }) => {
          return <TaskynIcon name={"image"} color={color} size={size} />;
        }}
        onPress={onGalleryPress}
      >
        {"عکس از گالری"}
      </Button>
    </Animated.View>
  );
}

export const AttachMenu = observer(AttachMenuComponent);
