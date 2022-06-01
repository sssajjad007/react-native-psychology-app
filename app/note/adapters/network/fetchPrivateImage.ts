import { request, toString } from "../../../library";

import type { IFetchRetrievePrivateImageResult } from "../../types";

export async function fetchPrivateImage(
  imageId: string
): Promise<IFetchRetrievePrivateImageResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/storage/private/${imageId}`,
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      url: "",
    };
  }
  return {
    error: "",
    url: toString(payload.url),
  };
}
