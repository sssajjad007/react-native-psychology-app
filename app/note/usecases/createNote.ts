import { fetchCreateNote } from "../adapters";
import { createNoteState, noteListState } from "../entities";

export async function createNote(customerId: string) {
  const { error, note } = await fetchCreateNote({
    customerId,
    title: createNoteState.noteTitle,
    content: createNoteState.noteContent,
    imageIds: createNoteState.imageIds,
  });
  console.log(createNoteState.imageIds);
  if (error || !note) {
    console.log(error);
    return false;
  }
  noteListState.addNote(note);
  createNoteState.reset();
  return true;
}
