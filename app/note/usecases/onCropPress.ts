import { fetchUploadImage } from "../adapters";
import { createNoteState } from "../entities";
import { openCropper } from "../../library";

export async function onCropPress(path: string) {
  try {
    const image = await openCropper("note", path);
    createNoteState.replaceImage(path, image.path);
    const { error, imageId } = await fetchUploadImage(image.path);
    if (error) {
      // TODO: do something with this error
      return;
    }
    createNoteState.addImageId(image.path, imageId);
  } catch (error) {
    console.log(error);
  }
}
