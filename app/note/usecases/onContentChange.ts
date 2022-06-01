import { createNoteState} from "../entities";

export function onContentChange(text: string) {
  createNoteState.setNoteContent(text);
}
