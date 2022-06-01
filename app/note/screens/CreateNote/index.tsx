import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";
import { useRoute, useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { useKeyboard } from "@react-native-community/hooks";
import {
  Button,
  Input,
  TaskynIcon,
  Container,
  Scroller,
  IconButton,
} from "../../../library";
import { CreateNoteImage, AttachMenu, AttachCounter } from "../../components";
import { createNoteState } from "../../entities";
import {
  onCropPress,
  onRemovePress,
  createNote,
  onTitleChange,
  onContentChange,
} from "../../usecases";

import { styles, translateYFooter, footerHeight } from "./styles";
import type { tScrollerRef } from "../../types";

function CreateNoteScreen() {
  const navigator = useNavigation();
  const route = useRoute();
  // @ts-expect-error
  const customerId = route.params?.customerId || "";
  const scrollRef = useRef<tScrollerRef>(null);
  const { keyboardShown } = useKeyboard();
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const keyboardAnimation = useSharedValue<number>(0);
  const animationRunning = useSharedValue<number>(0);

  const footerContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            keyboardAnimation.value,
            [0, 0.8],
            [0, translateYFooter],
            Extrapolate.CLAMP
          ),
        },
      ],
      height: interpolate(keyboardAnimation.value, [0, 1], [footerHeight, 0]),
    };
  });
  function onNoteInputFocus() {
    "worklet";
    animationRunning.value = 1;
    keyboardAnimation.value = withTiming(1, { duration: 300 }, () => {
      "worklet";
      animationRunning.value = 0;
    });
  }

  function onNoteImageCropPress(path: string) {
    onCropPress(path);
  }
  function onNoteImageRemovePress(path: string) {
    onRemovePress(path);
  }
  function onAttachMenuPress() {
    createNoteState.toggleMenu(undefined);
  }
  async function onCreateNotePress() {
    setCreateLoading(true);
    // TODO: use route id
    const created = await createNote(customerId);
    if (created) {
      navigator.goBack();
      return;
    }
    setCreateLoading(false);
  }
  useEffect(() => {
    if (keyboardShown) {
      if (animationRunning.value === 0 && keyboardAnimation.value === 0) {
        keyboardAnimation.value = withTiming(1, { duration: 300 });
      }
    } else {
      keyboardAnimation.value = withTiming(0, { duration: 300 });
    }
  }, [keyboardShown]);
  useEffect(() => {
    const disposer = autorun(() => {
      if (createNoteState.prevImagesCount < createNoteState.images.length) {
        scrollRef.current?.scrollToEnd({ animated: true });
      }
    });
    return () => {
      disposer();
    };
  }, []);

  return (
    <Container>
      <View style={styles.titleInputContainer}>
        <Input
          mode={"raw"}
          title={"موضوع"}
          placeholder={"موضوع یادداشت خود را وارد کنید"}
          onFocus={onNoteInputFocus}
          value={createNoteState.noteTitle}
          onChangeText={onTitleChange}
        />
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.noteInputContainer}>
        <Input
          mode={"raw"}
          title={"متن یادداشت"}
          placeholder={"متن یادداشت خود را وارد کنید"}
          onFocus={onNoteInputFocus}
          multiline
          value={createNoteState.noteContent}
          onChangeText={onContentChange}
        />
      </View>
      <Animated.View style={footerContainerStyle}>
        <View style={styles.pickImageContainer}>
          <View style={styles.imageListContainer}>
            <Scroller ref={scrollRef} horizontal rtl>
              {createNoteState.images.map((image) => {
                const { id, path } = image;
                return (
                  <CreateNoteImage
                    key={path}
                    imageId={id}
                    path={path}
                    onCropPress={onNoteImageCropPress}
                    onRemovePress={onNoteImageRemovePress}
                  />
                );
              })}
            </Scroller>
          </View>
          <View style={styles.attachButtonContainer}>
            <IconButton
              size={24}
              color={"black"}
              Icon={({ size, color }) => {
                return (
                  <TaskynIcon name={"paperclip"} size={size} color={color} />
                );
              }}
              onPress={onAttachMenuPress}
            />
            <AttachCounter />
            <AttachMenu />
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.submitButtonContainer}>
          <Button
            mode={"contained"}
            size={"wide"}
            rippleColor={"lightGrey"}
            onPress={onCreateNotePress}
            loading={createLoading}
          >
            {"ثبت کردن یادداشت"}
          </Button>
        </View>
      </Animated.View>
    </Container>
  );
}

export const CreateNote = observer(CreateNoteScreen);
