import { createNoteState } from "../entities";



export function onTitleChange(text: string) {
    createNoteState.setNoteTitle(text);
}