import type { ReactChild } from "react";
import type {
  NativeSyntheticEvent,
  StyleProp,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
} from "react-native";

export type tInputMode =
  | "outlined"
  | "flat"
  | "with-label"
  | "raw"
  | "no-style";
export interface IInputProps extends TextInputProps {
  title?: string;
  mode: tInputMode;
  errors?: string[];
  clearButton?: boolean;
  limit?: number;
}

export interface IInputStyleGen {
  mode: tInputMode;
  focused: boolean;
  value: string | undefined;
  multiline: boolean | undefined;
  numberOfLines: number | undefined;
  inputHeightState: number;
  hasError: boolean;
  limit: number | undefined;
  style: StyleProp<TextStyle>;
}

export type tOnContentSize =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
export type tNativeEvent = NativeSyntheticEvent<TextInputFocusEventData>;

export interface IInputPress {
  children: ReactChild;
  onPress: () => void;
}
