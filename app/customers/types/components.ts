export interface ICustomerCardProps {
  id: string;
  fullName: string;
  description: string;
  profileImageUrl: string;
  date: string;
}
export interface IRemoveCustomerSheetComponentProps {
  onCancelPress: () => void;
  onRemoveCustomerPress: () => void;
}
