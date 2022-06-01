import { ReactElement } from "react";

export interface ICardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  role: string;
}

interface IIconProps {
  size: number;
  color: string;
}
export interface ITileProps {
  onPress: () => void;
  Icon: (props: IIconProps) => ReactElement;
  title: string;
}
