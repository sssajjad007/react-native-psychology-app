export interface IRequest {
  method: "POST" | "PUT" | "PATCH" | "GET" | "DELETE";
  endpoint: string;
  body: Record<string, unknown> | undefined;
}

export type tPayload = Record<string, unknown> | undefined;
export interface IResponse {
  success: boolean;
  httpStatus: number;
  payload: tPayload;
  error: string;
}

export type tFileType = "image";

export interface IUploadFile {
  path: string;
  type: tFileType;
  access: "private" | "public";
  transform: "note" | "profile";
}
