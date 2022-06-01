import { ReactChild, ReactChildren, Ref } from "react";

export interface ITapProps {
  children: ReactChild | ReactChildren;
  onPress?: () => void;
  waitFor?: Ref<unknown> | Ref<unknown>[] | undefined
}
