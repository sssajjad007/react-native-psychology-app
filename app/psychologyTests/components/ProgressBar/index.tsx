import React from "react";
import { View } from "react-native";
import { Paragraph, THEME } from "../../../library";
import { IProgressProps } from "../../types";
import { styles } from "./styles";
export function ProgressBar(props: IProgressProps) {
  const { leftName, leftPercent, rightName } = props;
  const rightPercent = 100 - leftPercent;
  const leftStyle = {
    flex: leftPercent,
  };
  const rightStyle = {
    flex: rightPercent,
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressLeft, leftStyle]}>
          <Paragraph style={{ color: "white" }}>{`${leftPercent}%`}</Paragraph>
        </View>
        <View style={[styles.progressRight, rightStyle]}>
          <Paragraph
            style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
          >{`${rightPercent}%`}</Paragraph>
        </View>
      </View>
      <View style={styles.titles}>
        <Paragraph style={{ color: "black" }}>{leftName}</Paragraph>
        <Paragraph style={{ color: THEME.COLORS.PRIMARY.NORMAL }}>
          {rightName}
        </Paragraph>
      </View>
      <View style={styles.fullLine}></View>
    </View>
  );
}
