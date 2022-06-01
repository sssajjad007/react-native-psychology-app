import { request } from "../../../library";

import { parseRequest } from "../utils";
import type { IFetchConfirmRequestResult } from "../../types";

export async function fetchConfirmRequest(
  customerId: string
): Promise<IFetchConfirmRequestResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/business/requests/confirm",
    body: {
      customerId,
    },
    method: "POST",
  });
  if (!success || !payload) {
    return {
      error,
      request: {
        customerId: "",
        providerId: "",
        businessId: "",
        requestConfirmed: false,
        name: "",
        profilePictureUrl: "",
        description: "",
        createdAt: "",
        modifiedAt: "",
      },
    };
  }
  return {
    error: "",
    request: parseRequest(payload),
  };
}
