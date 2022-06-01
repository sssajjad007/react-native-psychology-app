import { request, toString } from "../../../library";
import { IFetchProviderInfoResult } from "../../types";
export async function fetchProviderInfo(): Promise<IFetchProviderInfoResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/business/providers",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error: error,
      id: "",
      name: "",
      profilePictureUrl: "",
      description: "",
    };
  }
  return {
    error: "",
    id: toString(payload?.id),
    name: toString(payload?.name),
    profilePictureUrl: toString(payload?.profilePictureUrl),
    description: toString(payload?.description),
  };
}
