import { observable, action, makeObservable } from "mobx";
import { logger } from "../../library";
import type { INote } from "../types";

export class NoteListState {
  constructor() {
    makeObservable(this, {
      currentNote: observable,
      currentNoteImageIndex: observable,
      notes: observable,
      serRemoveList: action,
      setRemoveNote: action,
      setCurrentNoteImageIndex: action,
      setNotes: action,
      addNote: action,
      updateNote: action,
      setCurrentNote: action,
      setCurrentNoteTitle: action,
      setCurrentNoteContent: action,
      setEditable: action,
      updateCurrentNoteImageIds: action,
    });
  }
  notes: INote[] = [];
  currentNote: (INote & { edit: boolean }) | undefined = undefined;
  currentNoteImageIndex: number = 0;
  setRemoveNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
  setCurrentNoteImageIndex(id: string) {
    if (!this.currentNote) {
      logger({
        container: "note",
        path: { section: "entities", file: "noteList" },
        type: "error",
        logMessage: `current note Image is not defined.`,
      });
      return;
    }
    const indexFound = this.currentNote?.imageIds;
    for (let index = 0; index < indexFound.length; index++) {
      if (id === indexFound[index]) {
        this.currentNoteImageIndex = index;
        return;
      }
    }
  }
  serRemoveList() {
    this.notes = [];
  }
  setNotes(notes: INote[]) {
    this.notes = notes;
  }
  addNote(note: INote) {
    for (let index = 0; index < this.notes.length; index++) {
      const { id } = this.notes[index];
      if (note.id === id) {
        return;
      }
    }
    this.notes.unshift(note);
  }
  updateNote(note: INote) {
    for (let index = 0; index < this.notes.length; index++) {
      const { id } = this.notes[index];
      if (note.id === id) {
        this.notes[index] = note;
        return;
      }
    }
  }
  setCurrentNote(id: string) {
    for (let index = 0; index < this.notes.length; index++) {
      const note = this.notes[index];
      if (id === note.id) {
        this.currentNote = { ...note, edit: false };
        return;
      }
    }
    logger({
      container: "note",
      path: { section: "entities", file: "noteList" },
      type: "error",
      logMessage: `current note with given id not found. id: ${id}`,
    });
    this.currentNote = undefined;
  }
  setCurrentNoteTitle(title: string) {
    if (this.currentNote) {
      this.currentNote.title = title;
    }
  }
  setCurrentNoteContent(content: string) {
    if (this.currentNote) {
      this.currentNote.content = content;
    }
  }
  setEditable(state: boolean) {
    if (this.currentNote) {
      this.currentNote.edit = state;
    }
  }
  updateCurrentNoteImageIds(imageIds: string[]) {
    if (this.currentNote) {
      this.currentNote.imageIds = imageIds;
    }
  }
}
