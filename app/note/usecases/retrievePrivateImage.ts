import { logger } from "../../library";
import { fetchPrivateImage } from "../adapters";

export async function retrievePrivateImage(imageId: string) {
  const { error, url } = await fetchPrivateImage(imageId);
  if (error) {
    logger({
      container: "note",
      path: { section: "usecases", file: "retrievePrivateImage" },
      type: "error",
      logMessage: `error in retrieving private imageUrl: ${error}`,
    });
    return "";
  }
  // logger({
  //   container: "note",
  //   path: { section: "usecases", file: "retrievePrivateImage" },
  //   type: "debug",
  //   logMessage: `image private url: ${url}`,
  // });
  return url;
}
