import { ReactElement, Ref } from "react";
import { RectButton } from "react-native-gesture-handler";

export type tMode =
  | "text"
  | "outlined"
  | "contained"
  | "contained-grey"
  | "contained-secondary";

interface IIconProps {
  color: string;
  size: number;
}

export type tSize =
  | "growWithText"
  | "extra-small"
  | "small"
  | "medium"
  | "big"
  | "wide"
  | "FAB";

export interface IButtonProps {
  ref: Ref<RectButton>;
  mode: tMode;
  bold?: boolean;
  size: tSize;
  dark?: boolean;
  loading?: boolean;
  Icon?: (props: IIconProps) => ReactElement;
  onPress?: () => void;
  rippleColor: "lightGrey" | "grey" | "darkGrey";
  disabled?: boolean;
  children: string;
  textColor?: string;
  backgroundColor?: string;
  fullRadius?: boolean;
}

export interface IActivityProps {
  mode: tMode;
  size: tSize;
  activityColor?: string;
}

export interface IButtonStyles {
  mode: tMode;
  bold?: boolean;
  size: tSize;
  dark?: boolean;
  disabled?: boolean;
  textColor?: string;
  backgroundColor?: string;
  fullRadius?: boolean;
}
