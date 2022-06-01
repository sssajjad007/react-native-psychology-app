import { request } from "../../../library";

import { parseNote } from "../utils";

import type { IFetchGetNotesResult, INote } from "../../types";

export async function fetchGetNotes(
  customerId: string
): Promise<IFetchGetNotesResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/notes/${customerId}`,
    method: "GET",
    body: undefined,
  });
  if (!success || !Array.isArray(payload)) {
    return {
      error,
      httpStatus,
      notes: [],
    };
  }

  const notes: INote[] = [];
  for (let index = 0; index < payload.length; index++) {
    const note = payload[index];
    notes.push(parseNote(note));
  }
  return {
    error: "",
    notes,
    httpStatus,
  };
}
