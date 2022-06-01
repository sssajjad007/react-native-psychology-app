import React, { useEffect, useState, useRef } from "react";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Paragraph } from "../Typography";
import { ITimerProps } from "./types";

function TimerComponent(props: ITimerProps) {
  const { minute, second, onTimerEnd } = props;
  const [timer, setTimer] = useState<number>(minute * 60 + second);
  const interval = useRef<NodeJS.Timer>();
  useEffect(() => {
    interval.current = setTimeout(nextTime, 1000);
    if (timer === 0) {
      clearTimeout(interval.current);
      if (onTimerEnd) {
        onTimerEnd();
      }
    }
    return () => {
      if (interval.current) {
        clearTimeout(interval.current);
      }
    };
  }, [timer]);
  useEffect(() => {
    return () => {
      if (interval.current) {
        clearTimeout(interval.current);
      }
    };
  }, []);
  function nextTime() {
    return setTimer(timer - 1);
  }
  function formattedTime() {
    const minute = Math.floor(timer / 60);
    const second = timer % 60;
    if (second < 10) {
      return `${digitsEnToFa(minute)}:${digitsEnToFa(0)}${digitsEnToFa(
        second
      )}`;
    }
    return `${digitsEnToFa(minute)}:${digitsEnToFa(second)}`;
  }
  return <Paragraph {...props}>{formattedTime()}</Paragraph>;
}

export const Timer = observer(TimerComponent);
