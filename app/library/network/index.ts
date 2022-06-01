import { buildRequest } from "./request";
import { buildUploadFile } from "./uploadFile";

export const request = buildRequest();
export const uploadFile = buildUploadFile();

export { tPayload } from "./types";
