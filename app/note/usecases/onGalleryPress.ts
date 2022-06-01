import { copyAsync, documentDirectory } from "expo-file-system";
import { storage } from "../../library";
import { fetchUploadImage } from "../adapters";
import { createNoteState } from "../entities";
import { openGallery } from "../../library";

export async function onGalleryPress() {
  const images = await openGallery("note");
  createNoteState.toggleMenu(false);

  const uploadPromises = [];

  if (Array.isArray(images)) {
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      createNoteState.addImage(image.path);
      uploadPromises.push(fetchUploadImage(image.path));
    }
    try {
      const result = await Promise.all(uploadPromises);
      for (let index = 0; index < result.length; index++) {
        const { error, imageId } = result[index];
        if (error) {
          if (error === "timeout") {
            createNoteState.reset();
          }
          continue;
        }
        await copyAsync({
          from: images[index].path,
          to: `${documentDirectory}${imageId}`,
        });
        storage.add(imageId, `${documentDirectory}${imageId}`);
        createNoteState.addImageId(images[index].path, imageId);
      }
    } catch (error) {
      console.warn(error);
    }
    createNoteState.toggleMenu(false);
    return;
  }
  createNoteState.addImage(images.path);
  const { error, imageId } = await fetchUploadImage(images.path);
  if (error) {
    console.log(error);
    return;
  }
  createNoteState.addImageId(images.path, imageId);
}
