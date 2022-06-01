import { useRef } from "react";

export function useDoublePress(onPress?: any) {
  const pressTime = useRef<number>(0);
  function onTouchablePress() {
    if (!onPress || typeof onPress !== "function") return;
    // check if the press is long enough run onPress again, duration is 120 miliseconds
    if (pressTime.current === 0) {
      onPress(...arguments);
      pressTime.current = Date.now();
      return;
    }
    if (Date.now() - pressTime.current > 512) {
      onPress(...arguments);
      pressTime.current = Date.now();
      return;
    }
  }
  return { pressTime, onTouchablePress };
}
