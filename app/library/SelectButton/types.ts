import { ReactChild } from "react";

export interface ISelectButtonProps {
  id?: string;
  mode: "checkbox" | "radio";
  children: ReactChild;
  selected: boolean;
  size: number;
  onPress?: (id: string) => void;
}
