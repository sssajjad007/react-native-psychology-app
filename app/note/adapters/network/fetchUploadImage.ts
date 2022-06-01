import { uploadFile, toString } from "../../../library";

import type { IUploadImageResult } from "../../types";

export async function fetchUploadImage(
  path: string
): Promise<IUploadImageResult> {
  const { error, httpStatus, payload, success } = await uploadFile({
    path,
    type: "image",
    access: "private",
    transform: "note",
  });
  if (!success || !payload) {
    return {
      error,
      imageId: "",
    };
  }
  return {
    error: "",
    imageId: toString(payload?.id),
  };
}
