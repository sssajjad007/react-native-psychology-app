import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import Gallery from "react-native-awesome-gallery";
import { Container } from "../../../library";

import { NoteImage } from "../../components";
import { noteListState } from "../../entities";

function NoteGalleryScreen() {
  if (!noteListState.currentNote) return null;
  const imageIds = noteListState.currentNote.imageIds;
  const initialImageIndex = noteListState.currentNoteImageIndex;
  const keyExtractor = useCallback(function keyExtract(item) {
    return item;
  }, []);
  return (
    <Container>
      <Gallery
        initialIndex={initialImageIndex}
        data={imageIds}
        keyExtractor={keyExtractor}
        renderItem={({ index, item, setImageDimensions }) => {
          return (
            <NoteImage
              id={item}
              galleryMode
              setImageDimensions={setImageDimensions}
            />
          );
        }}
        doubleTapScale={2}
      />
    </Container>
  );
}

export const NoteGallery = observer(NoteGalleryScreen);
