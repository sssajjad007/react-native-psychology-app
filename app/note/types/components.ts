export interface INoteImageProps {
  id: string;
  galleryMode?: boolean;
  onRemovePress?: (id: string) => void;
  onImagePress?: (id: string) => void;
  setImageDimensions?: (args: { width: number; height: number }) => void;
}

export interface ICreateNoteImageProps {
  imageId: string;
  path: string;
  onCropPress: (path: string) => void;
  onRemovePress: (path: string) => void;
}

export interface INoteHeaderProps {
  onUpdateNotePress: () => Promise<void>;
  onDeletePress: () => void;
}

export interface INoteProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface IDeleteSheetComponentProps {
  onClosePress: () => void;
}
