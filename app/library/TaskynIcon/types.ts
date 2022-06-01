import { StyleProp, TextStyle } from "react-native";

export type tTaskynIconNames =
  | "close"
  | "close-circle"
  | "users"
  | "trash"
  | "timer"
  | "tests"
  | "telegram"
  | "task"
  | "search"
  | "repeat"
  | "profile"
  | "practice"
  | "note"
  | "pencil"
  | "paperclip"
  | "notes"
  | "neo"
  | "menu"
  | "mbti"
  | "logout"
  | "linkedin"
  | "law"
  | "instagram"
  | "info"
  | "image"
  | "home"
  | "folder"
  | "help-circle"
  | "headphones"
  | "forward"
  | "form"
  | "filter"
  | "file-history"
  | "file"
  | "done"
  | "document"
  | "disconnected"
  | "camera"
  | "back"
  | "google";

export interface ITaskynIconProps {
  style?: StyleProp<TextStyle>;
  name: tTaskynIconNames;
  size: number;
  color: string;
  svg?: boolean;
  boxed?: boolean;
  boxSize?: number;
  boxColor?: string;
}

export interface ISvgIconProps {
  size?: number;
}
