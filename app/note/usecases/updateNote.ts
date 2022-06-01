import { fetchUpdateNote } from "../adapters";
import { noteListState } from "../entities";

import type { IUpdateNote } from "../types";

export async function updateNote(updateNote: IUpdateNote) {
  const { error, note } = await fetchUpdateNote(updateNote);
  if (error || !note) {
    // TODO: handle error
    return;
  }
  noteListState.setEditable(false);
  noteListState.updateNote(note);
}
