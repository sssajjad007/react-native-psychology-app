import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container, Scroller, Subheading } from "../../../library";
import { TestResultHistoryCard, TextIcon } from "../../components";

import { styles } from "./styles";
import { retiriveTestHistory } from "../../usecases";
import { testHistoryState } from "../../entities";
import ColorHash from "color-hash";
import { Image, View } from "react-native";
import { TestHostoriImage } from "../assets";

function TestHistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(true);
  // @ts-expect-error
  const customerId = route.params?.id || "";
  function renderTestResultCard() {
    const result: JSX.Element[] = [];
    const colorHash = new ColorHash();
    for (let index = 0; index < testHistoryState.testHistory.length; index++) {
      const { createdAt, enName, faName, id, shortName } =
        testHistoryState.testHistory[index];

      const labelColor = colorHash.hex(shortName);

      result.push(
        <TestResultHistoryCard
          key={id}
          id={id}
          Icon={() => <TextIcon label={shortName} labelColor={labelColor} />}
          enName={enName}
          faName={faName}
          createdAt={createdAt}
          onPress={() => {
            navigation.push("testResultScreen", {
              testId: id,
              customerId,
              mode: "testHistory",
            });
          }}
        />
      );
    }
    return result;
  }
  async function init() {
    await retiriveTestHistory(customerId);
    //Check if state is empty or not
    if (testHistoryState.testHistory.length != 0) {
      setEmpty(false);
    }
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <Container loading={loading}>
      {empty ? (
        <View style={styles.empty}>
          <Image
            resizeMode={"contain"}
            source={TestHostoriImage}
            style={styles.imageSize}
          />
          <Subheading>{"شما هنوز تستی انجام ندادید."}</Subheading>
        </View>
      ) : (
        <Scroller contentContainerStyle={styles.historyCardScroller}>
          {renderTestResultCard()}
        </Scroller>
      )}
    </Container>
  );
}

export const TestHistory = observer(TestHistoryScreen);
