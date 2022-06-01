import { request, toString } from "../../../library";

import type { IFetchDeleteNote } from "../../types";

export async function fetchDeleteNote(id: string): Promise<IFetchDeleteNote> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/notes/${id}`,
    method: "DELETE",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      deleted: "",
    };
  }
  return {
    error: "",
    deleted: toString(payload),
  };
}
