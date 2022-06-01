import ImagePicker, { Options } from "react-native-image-crop-picker";
import { THEME } from "../theme";

import { tMode } from "./types";

function optGen(isProfile: boolean) {
  const opt: Options = {
    mediaType: "photo",
    cropping: true,
    width: isProfile ? 320 : 1024,
    height: isProfile ? 320 : 1720,
    includeExif: true,
    includeBase64: false,
    cropperTintColor: THEME.COLORS.PRIMARY.NORMAL,
    cropperActiveWidgetColor: THEME.COLORS.PRIMARY.NORMAL,
    cropperStatusBarColor: THEME.COLORS.PRIMARY.NORMAL,
    cropperToolbarColor: THEME.COLORS.PRIMARY.NORMAL,
    cropperToolbarWidgetColor: "white",
    freeStyleCropEnabled: !isProfile,
    cropperToolbarTitle: "ویرایش عکس",
    cropperCircleOverlay: isProfile,
    loadingLabelText: "در حال پردازش",
    forceJpg: true,
    cropperChooseText: "انتخاب کنید",
    cropperCancelText: "لغو",
    hideBottomControls: false,
    maxFiles: 20,
    minFiles: 1,
    showsSelectedCount: true,
    smartAlbums: [
      "UserLibrary",
      "PhotoStream",
      "Panoramas",
      "Videos",
      "Bursts",
    ],
    sortOrder: "desc",
    useFrontCamera: false,
    waitAnimationEnd: true,
    writeTempFile: true,
  };
  return opt;
}

export async function openCamera(mode: tMode) {
  const isProfile = mode === "profile";
  const image = await ImagePicker.openCamera(optGen(isProfile));
  return image;
}

export async function openGallery(mode: tMode) {
  const isProfile = mode === "profile";
  if (isProfile) {
    const image = await ImagePicker.openPicker(optGen(isProfile));
    return image;
  } else {
    const image = await ImagePicker.openPicker({
      ...optGen(isProfile),
      cropping: false,
      multiple: true,
    });
    return image;
  }
}

export async function openCropper(mode: tMode, path: string) {
  const isProfile = mode === "profile";
  const cropped = await ImagePicker.openCropper({ ...optGen(isProfile), path });
  return cropped;
}
