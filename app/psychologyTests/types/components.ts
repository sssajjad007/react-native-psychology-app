import { ReactElement } from "react";

export interface IProgressProps {
  description?: string;
  title?: string;
  leftName: string;
  rightName: string;
  leftPercent: number;
}

export interface IFormCardProps {
  id: string;
  Icon: () => ReactElement;
  title: string;
  subtitle: string;
  onPress?: (id: string) => void;
}

export interface ITextIconProps {
  label: string;
  labelColor?: string;
}

export interface IAnswerCardProps {
  id: string;
  onPress?: (id: string) => void;
  selected: boolean;
  text: string;
}

export interface ITestHistorySheet {
  navigateToQuestionnaire: () => void;
  onClosePress: () => void;
}
export interface ITestHistoryCardProps {
  onPress?: () => void;
}
export interface ITestResultHistoryCardProps {
  id: string;
  Icon: () => ReactElement;
  faName: string;
  enName: string;
  onPress?: (id: string) => any;
  createdAt: string;
}
export interface ITestResultProps {
  faName: string;
  enName: string;
  variable: string;
  rawScore: number;
  baseRate: number;
  type: "factor" | "facet" | "error" | "warning";
  interpret: string;
}
