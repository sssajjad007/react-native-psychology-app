import Animated from "react-native-reanimated";
import { PathProps } from "react-native-svg";

export interface ICheckBoxProps {
  checked?: boolean;
  size: number;
}
export interface IAnimatedStrokeProps extends PathProps {
  progress: Animated.SharedValue<number>;
}
