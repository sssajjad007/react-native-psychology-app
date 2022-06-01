import { toString } from "../../../library";
import type { tPayload } from "../../../library";
import type { adapterTypes } from "../../types";

export function parsePasswordlessStart(
  payload: tPayload
): adapterTypes.IFetchPasswordlessStartResult {
  if (!payload) {
    return {
      error: "داده تعریف نشده است",
      otpToken: "",
      deviceId: "",
    };
  }
  return {
    error: "",
    otpToken: toString(payload.otpToken),
    deviceId: toString(payload.deviceId),
  };
}
