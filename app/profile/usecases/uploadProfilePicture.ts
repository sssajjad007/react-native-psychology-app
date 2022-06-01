import { openGallery, openCamera, logger } from "../../library";

import { uploadProfile } from "../adapters";
import { profileState } from "../entities";

export async function uploadProfilePicture(
  mode: "camera" | "gallery",
  onClosePress: () => void
) {
  try {
    const image =
      mode === "gallery"
        ? await openGallery("profile")
        : await openCamera("profile");
    if (!Array.isArray(image)) {
      const path = image.path;
      profileState.setProfilePictureUrl(path);
      profileState.setUploadLoadingImage(true);
      onClosePress();
      const url = await uploadProfile(path);
      profileState.setUploadLoadingImage(false);
      profileState.setProfilePictureUrl(url);
      logger({
        container: "profile",
        path: { section: "usecases", file: "uploadProfilePicture" },
        type: "debug",
        logMessage: `Profile picture url: ${url}`,
      });
    }
  } catch (error) {
    // TODO: log event req cancelled
    logger({
      container: "profile",
      path: { section: "usecases", file: "uploadProfilePicture" },
      type: "error",
      logMessage: `error in uploadProfilePicture is ${error}`,
    });
  }
}
