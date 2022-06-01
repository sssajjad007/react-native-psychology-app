import { request } from "../../../library";

import { parseNote } from "../utils";

import type { IUpdateNote, IFetchUpdateNoteResult } from "../../types";

export async function fetchUpdateNote(
  body: IUpdateNote
): Promise<IFetchUpdateNoteResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/notes",
    method: "PUT",
    body: Object(body),
  });
  if (error || !payload) {
    return {
      error,
      note: undefined,
    };
  }
  return {
    error: "",
    note: parseNote(payload),
  };
}
