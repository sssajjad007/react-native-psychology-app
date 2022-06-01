//@ts-nocheck
import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Headline,
  Paragraph,
  Subheading,
  THEME,
  Title,
  Scroller,
  Container,
} from "../../../library";
import { ProgressBar } from "../../components";
import { styles } from "./styles";
import { onTestSubmit } from "../../usecases";
import { mbtiState } from "../../entities";
export function MbtiResultScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  async function init() {
    await onTestSubmit();
  }
  useEffect(() => {
    init();
  }, []);
  function renderMbtiResult() {
    const result: JSX.Element[] = [];
    const length = mbtiState.mbtiResult.interpret.length;
    for (let index = 0; index < length; index++) {
      if (mbtiState.mbtiResult?.interpret[index].type === "title") {
        result.push(
          // TODO: generate a stable key
          <Title key={Math.random()} style={styles.titleOfInterpret}>
            {`${mbtiState.mbtiResult?.interpret[index].data}:`}
          </Title>
        );
      }
      if (mbtiState.mbtiResult?.interpret[index].type === "slogan") {
        result.push(
          <Subheading
            key={Math.random()}
            style={[
              styles.titleOfInterpret,
              { color: THEME.COLORS.PRIMARY.DARK },
            ]}
          >
            {`-- ${mbtiState.mbtiResult?.interpret[index].data} --`}
          </Subheading>
        );
      }
      if (mbtiState.mbtiResult?.interpret[index].type === "list") {
        result.push(
          <Paragraph key={Math.random()} style={styles.dataOfInterpret}>
            {mbtiState.mbtiResult?.interpret[index].data}
          </Paragraph>
        );
      }
      if (mbtiState.mbtiResult?.interpret[index].type === "paragraph") {
        result.push(
          <Paragraph key={Math.random()} style={styles.dataOfInterpret}>
            {`${mbtiState.mbtiResult?.interpret[index].data}`}
          </Paragraph>
        );
      }
    }
    return result;
  }
  function renderProgressBar() {
    const result: JSX.Element[] = [];
    const length = mbtiState.mbtiResult.aggregates.length;
    for (let index = 0; index < length; index = index + 2) {
      result.push(
        <ProgressBar
          leftName={transformTitle(
            mbtiState.mbtiResult.aggregates[index].title
          )}
          leftPercent={calculator(
            mbtiState.mbtiResult.aggregates[index].aggregate,
            mbtiState.mbtiResult.aggregates[index + 1].aggregate
          )}
          rightName={transformTitle(
            mbtiState.mbtiResult.aggregates[index + 1].title
          )}
          key={mbtiState.mbtiResult.aggregates[index].aggregate}
        />
      );
    }
    return result;
  }
  function calculator(value1: number, value2: number) {
    return Math.floor((value1 * 100) / (value1 + value2));
  }
  function transformTitle(value: string) {
    if (value === "e") {
      return "برون گرایی";
    }
    if (value === "i") {
      return "درون گرایی";
    }
    if (value === "s") {
      return "حسی";
    }
    if (value === "n") {
      return "شهودی";
    }
    if (value === "t") {
      return "تفکری";
    }
    if (value === "f") {
      return "احساسی";
    }
    if (value === "j") {
      return "داوری کننده";
    }
    if (value === "p") {
      return "ادراک کننده";
    }
    return "";
  }
  return (
    <Container>
      <Scroller contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.titleBar}>
          <Headline>
            {"نتیجه تست "}
            <Title style={{ color: THEME.COLORS.PRIMARY.NORMAL }}>
              {"MBTI :"}
            </Title>
          </Headline>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.avatar}
            resizeMode={"contain"}
            source={require("../Constant/MBTI.png")}
          />
        </View>
        {renderMbtiResult()}
        {renderProgressBar()}
      </Scroller>
    </Container>
  );
}

export const MbtiResult = observer(MbtiResultScreen);
