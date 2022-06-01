import { request } from "../../../library";

import { parseNote } from "../utils";

import type { IFetchCreateNote, IFetchCreateNoteResult } from "../../types";

export async function fetchCreateNote(
  args: IFetchCreateNote
): Promise<IFetchCreateNoteResult> {
  const { content, customerId, imageIds, title } = args;
  const { success, error, payload, httpStatus } = await request({
    endpoint: "/notes",
    method: "POST",
    body: {
      customerId,
      title,
      content,
      imageIds,
    },
  });
  if (!success || !payload) {
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
