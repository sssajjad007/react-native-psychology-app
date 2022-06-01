import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { Button, Subheading, Container, Scroller } from "../../../library";

import { NoteCard } from "../../components/NoteCard";
import { retrieveNotes } from "../../usecases";

import { styles } from "./styles";
import { noteListState } from "../../entities";
import { Note } from "../../assets";

function NoteListScreen() {
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  // @ts-expect-error
  const customerId = route.params?.id || "";
  const [loading, setLoading] = useState<boolean>(true);

  async function init() {
    await retrieveNotes(customerId);
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  function renderNotes() {
    const length = noteListState.notes.length;
    if (length === 0) {
      return (
        <View style={styles.empty}>
          <Image
            source={Note}
            resizeMode={"contain"}
            style={{ width: 250, height: 250 }}
          />
          <Subheading>{"شما هنوز یادداشتی ایجاد نکردید."}</Subheading>
        </View>
      );
    }
    const components: JSX.Element[] = [];
    for (let index = 0; index < length; index++) {
      const { id, content, createdAt, title } = noteListState.notes[index];
      components.push(
        <NoteCard
          key={id}
          id={id}
          title={title}
          createdAt={createdAt}
          description={content}
        />
      );
    }
    return components;
  }
  return (
    <Container loading={loading}>
      <Scroller contentContainerStyle={styles.scrollerContainerView}>
        {renderNotes()}
      </Scroller>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"FAB"}
          Icon={({ size, color }) => {
            return <Entypo name="plus" size={size} color={color} />;
          }}
          fullRadius
          onPress={() => {
            navigator.push("createNote", { customerId });
          }}
        >
          {"ایجاد یادداشت جدید"}
        </Button>
      </View>
    </Container>
  );
}

export const NoteList = observer(NoteListScreen);
