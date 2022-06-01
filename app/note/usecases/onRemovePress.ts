import { createNoteState } from "../entities";

export function onRemovePress(path: string) {
  createNoteState.removeImage(path);
}
