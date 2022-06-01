import { fetchUploadImage } from "../adapters";
import { createNoteState } from "../entities";
import { openCamera } from "../../library";
export async function onCameraPress() {
  try {
    const image = await openCamera("note");
    createNoteState.toggleMenu(false);
    createNoteState.addImage(image.path);
    const { error, imageId } = await fetchUploadImage(image.path);
    if (error) {
      // TODO: do some error
      return;
    }
    createNoteState.addImageId(image.path, imageId);
  } catch (error) {
    console.log(error);
    createNoteState.toggleMenu(false);
  } 
   

}
