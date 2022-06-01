export interface IProviderCardProps {
  id: string;
  fullName: string;
  description: string;
  profileImageUrl: string;
  myDoctor: boolean;
}
export interface IRemoveSheetProps {
  onCancelPress: () => void;
  onRemoveProvider: () => void;
}
