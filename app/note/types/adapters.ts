import { INote } from "./entities";

export interface IUploadImageResult {
  error: string;
  imageId: string;
}

export interface IFetchGetNotesResult {
  error: string;
  notes: INote[];
  httpStatus: number;
}

export interface IFetchCreateNote {
  customerId: string;
  title: string;
  content: string;
  imageIds: string[];
}

export interface IFetchCreateNoteResult {
  error: string;
  note: INote | undefined;
}

export interface IFetchUpdateNoteResult {
  error: string;
  note: INote | undefined;
}

export interface IFetchRetrievePrivateImageResult {
  error: string;
  url: string;
}

export interface IFetchDeleteNote {
  error: string;
  deleted: string;
}
