import React, { useEffect, useState } from "react";
import { View, ImageLoadEventData, NativeSyntheticEvent } from "react-native";
import { observer } from "mobx-react-lite";
import { Skeleton } from "moti/skeleton";
import {
  IconButton,
  logger,
  Tap,
  TaskynIcon,
  TaskynImage,
} from "../../../library";

import { noteListState } from "../../entities";
import { retrievePrivateImage } from "../../usecases";

import { styles, iconButtonStyle } from "./styles";
import { INoteImageProps } from "../../types";
function NoteImageComponent(props: INoteImageProps) {
  const { id, galleryMode, onImagePress, onRemovePress, setImageDimensions } =
    props;
  const [imageUrl, setImageUrl] = useState<string>("");
  function imagePress() {
    logger({
      container: "note",
      path: { section: "components", file: "NoteImage" },
      type: "state",
      logMessage: `image showing with url: ${imageUrl}`,
    });

    if (!galleryMode && onImagePress) {
      noteListState.setCurrentNoteImageIndex(id);
      onImagePress(id);
    }
  }
  function removePress() {
    if (!galleryMode && onRemovePress) {
      onRemovePress(id);
    }
  }
  function onImageLoad(event: NativeSyntheticEvent<ImageLoadEventData>) {
    if (setImageDimensions) {
      const { width, height } = event.nativeEvent.source;
      setImageDimensions({ width, height });
    }
  }
  async function init() {
    const url = await retrievePrivateImage(id);
    setImageUrl(url);
  }
  useEffect(() => {
    init();
  }, []);
  function renderImage() {
    if (galleryMode && imageUrl) {
      return (
        <TaskynImage
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode={"contain"}
          onLoad={onImageLoad}
        />
      );
    }
    if (imageUrl) {
      logger({
        container: "note",
        path: { section: "components", file: "NoteImage" },
        type: "info",
        logMessage: `rendering image with url: ${imageUrl}`,
      });
      return (
        <Tap onPress={imagePress}>
          <TaskynImage
            source={{ uri: imageUrl }}
            style={styles.image}
            // onLoad={onImageLoad}
          />
        </Tap>
      );
    }
    return <View style={styles.image} />;
  }
  return (
    <View style={galleryMode ? styles.galleryContainer : styles.container}>
      <Skeleton show={!galleryMode && !imageUrl} radius={4} colorMode={"light"}>
        {renderImage()}
      </Skeleton>
      {!galleryMode && noteListState.currentNote?.edit ? (
        <View style={styles.closeIcon}>
          <IconButton
            onPress={removePress}
            color={iconButtonStyle.color}
            size={iconButtonStyle.size}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"close"} color={color} size={size} />;
            }}
          />
        </View>
      ) : null}
    </View>
  );
}

export const NoteImage = observer(NoteImageComponent);
