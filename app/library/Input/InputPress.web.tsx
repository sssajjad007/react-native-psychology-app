import { TouchableWithoutFeedback, View } from "react-native";
import { observer } from "mobx-react-lite";

import type { IInputPress } from "./types";

function InputPressComponent(props: IInputPress) {
  const { children, onPress } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
}

export const InputPress = observer(InputPressComponent);
