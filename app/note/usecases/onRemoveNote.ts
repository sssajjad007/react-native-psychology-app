import { fetchDeleteNote } from "../adapters";
import { noteListState } from "../entities";

export async function onRemoveNote(noteId: string) {
  const { deleted, error } = await fetchDeleteNote(noteId);
  if (error) {
    return;
  }
  noteListState.setRemoveNote(noteId);
}
