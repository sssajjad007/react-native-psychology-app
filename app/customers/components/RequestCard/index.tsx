import { View } from "react-native";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { Paragraph, Subheading, TaskynIcon, Touchable } from "../../../library";
import { requestCount, retrieveRequests } from "../../../requests";

import { styles } from "./styles";

export function RequestCardComponent() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  async function init() {
    await retrieveRequests();
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <View style={styles.requestContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.redCircleContainer}>
          <View style={styles.redCircle}>
            <Paragraph style={styles.numberStyle}>
              {digitsEnToFa(requestCount())}
            </Paragraph>
          </View>
        </View>
        <View style={styles.icon}>
          <TaskynIcon name={"users"} color={"red"} size={24} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.title}>
          <Subheading>{"درخواست ها"}</Subheading>
        </View>
      </View>
      <Touchable
        onPress={() => {
          navigation.push("requests");
        }}
        rippleColor={"grey"}
      />
    </View>
  );
}
export const RequestCard = observer(RequestCardComponent);
