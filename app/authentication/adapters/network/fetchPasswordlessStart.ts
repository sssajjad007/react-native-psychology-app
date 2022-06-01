import { request, logger } from "../../../library";
import { parsePasswordlessStart } from "../parsers";

import type { adapterTypes } from "../../types";

export async function fetchPasswordlessStart(
  info: adapterTypes.IFetchPasswordlessStart
): Promise<adapterTypes.IFetchPasswordlessStartResult> {
  const {
    phoneNumber,
    deviceUniqueId,
    isDevice,
    platform,
    brand,
    manufacturer,
    model,
    modelId,
    designName,
    productName,
    deviceYearClass,
    supportedCpuArch,
    os,
    osVersion,
    osBuildId,
    osInternalBuildId,
    androidApiLevel,
    deviceName,
  } = info;
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/authnz/passwordless/start",
    method: "POST",
    body: {
      phoneNumber,
      deviceUniqueId,
      isDevice,
      platform,
      brand,
      manufacturer,
      model,
      modelId,
      designName,
      productName,
      deviceYearClass,
      supportedCpuArch,
      os,
      osVersion,
      osBuildId,
      osInternalBuildId,
      androidApiLevel,
      deviceName,
    },
  });
  if (!success) {
    logger({
      container: "authnz",
      path: { section: "adapters", file: "fetchPasswordlessStart" },
      type: "network",
      logMessage: `fetchPasswordlessStart failed with httpStatus: ${httpStatus}`,
    });
    return {
      error: error,
      otpToken: "",
      deviceId: "",
    };
  }
  return parsePasswordlessStart(payload);
}
