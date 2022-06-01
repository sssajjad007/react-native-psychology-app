import { Platform } from "react-native";
import * as Device from "expo-device";
import { nanoid } from "nanoid";
import { storage, logger, toString } from "../../library";

import { fetchPasswordlessStart } from "../adapters";
import { inputState, authState } from "../entities";
export async function passwordlessStart() {
  inputState.setPhoneValidationErrorReset();
  if (!inputState.isPhoneValid) {
    logger({
      container: "authnz",
      path: { section: "usecases", file: "passwordlessStart" },
      type: "warn",
      logMessage:
        "passwordlessStart called but phone is not valid. " +
        "this should not happen, button must be disabled when phone is not valid",
    });
    return;
  }
  const uniqueId = toString(storage.retrieve("device_unique_id", "string"));

  const deviceUniqueId = uniqueId || nanoid(64);
  if (!uniqueId) {
    storage.add("device_unique_id", deviceUniqueId);
    logger({
      container: "authnz",
      path: { section: "usecases", file: "passwordlessStart" },
      type: "info",
      logMessage: "added new unique id to storage",
    });
  }
  const { otpToken, error, deviceId } = await fetchPasswordlessStart({
    phoneNumber: inputState.phoneNumber,
    deviceUniqueId,
    isDevice: Device.isDevice,
    platform: Platform.OS,
    brand: toString(Device.brand),
    manufacturer: toString(Device.manufacturer),
    model: toString(Device.modelName),
    modelId: toString(Device.modelId),
    designName: toString(Device.designName),
    productName: toString(Device.productName),
    deviceYearClass: toString(Device.deviceYearClass),
    supportedCpuArch: toString(Device.supportedCpuArchitectures?.join(",")),
    os: toString(Device.osName),
    osVersion: toString(Device.osVersion),
    osBuildId: toString(Device.osBuildId),
    osInternalBuildId: toString(Device.osInternalBuildId),
    androidApiLevel: toString(Device.platformApiLevel),
    deviceName: toString(Device.deviceName),
  });
  if (error) {
    logger({
      container: "authnz",
      path: { section: "usecases", file: "passwordlessStart" },
      type: "error",
      logMessage: `error in passwordlessStart is ${error}`,
    });
    // TODO: handle server errors in snack bar
    inputState.setPhoneValidation([error]);
    return;
  }
  if (!otpToken) {
    logger({
      container: "authnz",
      path: { section: "usecases", file: "passwordlessStart" },
      type: "error",
      logMessage: "otp token is not defined by server",
    });
    return;
  }
  authState.setOtpToken(otpToken);
  storage.add("device_id", deviceId);
}
