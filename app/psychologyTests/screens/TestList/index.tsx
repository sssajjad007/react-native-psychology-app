import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useIsFocused } from "@react-navigation/native";
import ColorHash from "color-hash";
import {
  SearchBar,
  Container,
  Title,
  Scroller,
  Subheading,
} from "../../../library";

import { TestHistoryCard, TextIcon, TestCard } from "../../components";
import { testListState } from "../../entities";
import { retrieveTests, searchTestList } from "../../usecases";

import { styles } from "./styles";

function TestListScreen() {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState<boolean>(true);
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  async function init() {
    await retrieveTests();
    setLoading(false);
  }
  function navigateToFormHistory() {
    navigator.push("testHistory");
  }
  function navigateToFormDetails(id: string) {
    navigator.push("testDetails", { id, title: "تست" });
  }
  function renderTestCard() {
    if (testListState.tests.length === 0) {
      return <Subheading>{"تستی پیدا نشد"}</Subheading>;
    }
    const tests =
      !testListState.query && testListState.searchResult.length === 0
        ? testListState.tests
        : testListState.searchResult;
    const testCards: JSX.Element[] = [];
    const colorHash = new ColorHash();
    for (let index = 0; index < tests.length; index++) {
      const { id, title, shortName } = tests[index];
      const labelColor = colorHash.hex(shortName);
      testCards.push(
        <TestCard
          key={id}
          id={id}
          Icon={() => <TextIcon label={shortName} labelColor={labelColor} />} //TODO: change id to shortName
          title={title.fa}
          subtitle={title.en}
          onPress={navigateToFormDetails}
        />
      );
    }
    return testCards;
  }
  useEffect(() => {
    if (isFocused) {
      init();
    }
  }, [isFocused]);
  return (
    <Container loading={loading}>
      <View style={styles.searchBarContainer}>
        <SearchBar onChangeText={searchTestList} value={testListState.query} />
      </View>
      <View style={styles.formHistoryContainer}>
        <TestHistoryCard onPress={navigateToFormHistory} />
        <View style={styles.line} />
      </View>
      <View style={styles.title}>
        <Title>{"لیست تست ها"}</Title>
      </View>
      <View style={styles.formCardContainer}>
        <Scroller contentContainerStyle={styles.containerContentStyle}>
          {renderTestCard()}
        </Scroller>
      </View>
    </Container>
  );
}

export const TestList = observer(TestListScreen);
