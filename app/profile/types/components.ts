import { ReactElement } from "react";

export interface IAvatarProps {
  size: number;
  uri?: string;
  edit?: boolean;
  onEditPress?: () => void;
}

interface IIconProps {
  color: string;
  size: number;
}
export interface IMenuItemProps {
  title: string;
  Icon: (props: IIconProps) => ReactElement;
  onPress?: () => any;
  line?: boolean;
  logout?: boolean;
}

export interface IExitSheetProps {
  onCancelPress: () => void;
}
