import { uploadFile, toString } from "../../../library";

export async function uploadProfile(path: string) {
  const { success, error, httpStatus, payload } = await uploadFile({
    path,
    access: "public",
    transform: "profile",
    type: "image",
  });
  if (!success || !payload) {
    console.log(error);
    return error;
  }
  return toString(payload.url);
}
