import { Ref } from "react";
import { ScrollViewProps, ViewProps, ScrollView } from "react-native";
import { ScrollView as GestureScrollView } from "react-native-gesture-handler";

import {
  KeyboardAwareScrollViewProps,
  KeyboardAwareScrollView,
} from "react-native-keyboard-aware-scroll-view";

export type tScrollerRef = ScrollView &
  KeyboardAwareScrollView &
  GestureScrollView;

export interface IScroller
  extends ScrollViewProps,
    KeyboardAwareScrollViewProps {
  ref: Ref<tScrollerRef>;
  rtl?: boolean;
  keyboard?: boolean;
  gestureScroll?: boolean;
}

export interface IRTLView extends ViewProps {}
