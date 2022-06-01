import { View } from "react-native";
import { observer } from "mobx-react-lite";
import React from "react";
import { styles } from "./styles";
import { LineChart } from "react-native-chart-kit";
import { Scroller, Subheading, THEME } from "../../../library";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useRoute } from "@react-navigation/native";
import { testResultState } from "../../entities";

function ChartScreen() {
  const route = useRoute();
  const { chartData, chartLabel } = DataRenderer();
  function DataRenderer() {
    const chartLabel: string[] = [];
    const chartData: number[] = [];
    for (let index = 0; index < testResultState.testResult.length; index++) {
      const element = testResultState.testResult[index];
      if (element.type === "facet" || element.type === "factor") {
        chartLabel.push(element.variable);
        if (element.rawScore === element.baseRate) {
          chartData.push(element.rawScore);
          continue;
        }
        chartData.push(element.baseRate);
      }
    }
    return { chartLabel, chartData };
  }
  return (
    <Scroller>
      <View style={styles.chartcontainer}>
        <LineChart
          segments={5}
          yAxisInterval={1}
          data={{
            labels: chartLabel,
            datasets: [
              {
                data: chartData,
                strokeWidth: 2,
                color: (opacity = 1) => `rgba(82, 86, 201,${opacity})`,
              },
            ],
          }}
          renderDotContent={({ x, y, index, indexData }) => {
            return (
              <Subheading
                key={index}
                style={{ position: "absolute", left: x - 8, top: y + 4 }}
              >
                {indexData}
              </Subheading>
            );
          }}
          style={styles.chartStyles}
          fromZero={true}
          width={heightPercentageToDP(170)}
          height={widthPercentageToDP(90)}
          chartConfig={{
            backgroundGradientFrom: THEME.COLORS.BACKGROUND,
            backgroundGradientTo: THEME.COLORS.BACKGROUND,
            decimalPlaces: 0.1,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            fillShadowGradient: THEME.COLORS.PRIMARY.LIGHT,
            style: {
              borderRadius: 16,
            },
            propsForLabels: { fontFamily: THEME.FONTS.MEDIUM },
          }}
        />
      </View>
    </Scroller>
  );
}
export const Chart = observer(ChartScreen);
