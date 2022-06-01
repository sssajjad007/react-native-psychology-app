export interface IFetchPasswordlessStart {
  phoneNumber: string;
  deviceUniqueId: string;
  isDevice: boolean;
  platform: string;
  brand: string;
  manufacturer: string;
  model: string;
  modelId: string;
  designName: string;
  productName: string;
  deviceYearClass: string;
  supportedCpuArch: string;
  os: string;
  osVersion: string;
  osBuildId: string;
  osInternalBuildId: string;
  androidApiLevel: string;
  deviceName: string;
}

export interface IFetchPasswordlessStartResult {
  otpToken: string;
  deviceId: string;
  error: string;
}

export interface IFetchPasswordlessVerify {
  otpCode: string;
  deviceId: string;
  otpToken: string;
}

export interface IFetchPasswordlessVerifyResult {
  jwt: string | undefined;
  refreshToken: string | undefined;
  refreshExpires: number | undefined;
  jwtExpires: number | undefined;
  role: string | undefined;
  userId: string | undefined;
  error: string | undefined;
}

export interface IFetchRefresh {
  userId: string;
  jwtToken: string;
  refreshToken: string;
  deviceId: string;
}

export interface IFetchRefreshResult {
  jwtToken: string;
  refreshToken: string;
  refreshExpires: number;
  jwtExpires: number;
  shouldLogout: boolean;
  error: string;
}
