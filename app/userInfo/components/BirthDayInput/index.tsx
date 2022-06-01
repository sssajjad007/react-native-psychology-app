import React, { useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { digitsFaToEn } from "@persian-tools/persian-tools";
import { Input, Subheading } from "../../../library";
import { userInfoState } from "../../entities";

import { styles } from "./styles";
import type { IBirthDayInputProps } from "../../types";
function BirthDayInputComponent(props: IBirthDayInputProps) {
  const { editable } = props;
  const [activeBorder, setActiveBorder] = useState({
    day: false,
    month: false,
    year: false,
  });

  function setDay(text: string) {
    const day = parseInt(digitsFaToEn(text), 10);
    if (isNaN(day)) {
      const prevBirthday = userInfoState.birthday;
      userInfoState.setBirthday({ ...prevBirthday, day: 0 });
      return;
    }
    const prevBirthday = userInfoState.birthday;
    userInfoState.setBirthday({ ...prevBirthday, day });
  }
  function setMonth(text: string) {
    const month = parseInt(digitsFaToEn(text), 10);
    if (isNaN(month)) {
      const prevBirthday = userInfoState.birthday;
      userInfoState.setBirthday({ ...prevBirthday, month: 0 });
      return;
    }
    const prevBirthday = userInfoState.birthday;
    userInfoState.setBirthday({ ...prevBirthday, month });
  }
  function setYear(text: string) {
    const year = parseInt(digitsFaToEn(text), 10);
    if (isNaN(year)) {
      const prevBirthday = userInfoState.birthday;
      userInfoState.setBirthday({ ...prevBirthday, year: 0 });
      return;
    }
    const prevBirthday = userInfoState.birthday;
    userInfoState.setBirthday({ ...prevBirthday, year });
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Subheading>{"تاریخ تولد"}</Subheading>
      </View>
      <View
        style={[
          styles.dayInput,
          !!userInfoState.birthday.day || activeBorder.day
            ? styles.activeBorder
            : styles.deActiveBorder,
        ]}
      >
        <Input
          mode={"no-style"}
          keyboardType={"number-pad"}
          style={{ textAlign: "center" }}
          placeholder={"روز"}
          value={`${
            userInfoState.birthday.day === 0 ? "" : userInfoState.birthday.day
          }`}
          onChangeText={setDay}
          maxLength={2}
          onFocus={() => {
            setActiveBorder({ ...activeBorder, day: true });
          }}
          onBlur={() => {
            setActiveBorder({
              ...activeBorder,
              day: false,
            });
          }}
          editable={editable}
        />
      </View>
      <View
        style={[
          styles.monthInput,
          !!userInfoState.birthday.month || activeBorder.month
            ? styles.activeBorder
            : styles.deActiveBorder,
        ]}
      >
        <Input
          mode={"no-style"}
          keyboardType={"number-pad"}
          placeholder={"ماه"}
          style={{ textAlign: "center" }}
          value={`${
            userInfoState.birthday.month === 0
              ? ""
              : userInfoState.birthday.month
          }`}
          onChangeText={setMonth}
          maxLength={2}
          onFocus={() => {
            setActiveBorder({ ...activeBorder, month: true });
          }}
          onBlur={() => {
            setActiveBorder({
              ...activeBorder,
              month: false,
            });
          }}
          editable={editable}
        />
      </View>
      <View
        style={[
          styles.yearInput,
          !!userInfoState.birthday.year || activeBorder.year
            ? styles.activeBorder
            : styles.deActiveBorder,
        ]}
      >
        <Input
          mode={"no-style"}
          keyboardType={"number-pad"}
          value={`${
            userInfoState.birthday.year === 0 ? "" : userInfoState.birthday.year
          }`}
          placeholder={"سال"}
          style={{ textAlign: "center" }}
          onChangeText={setYear}
          maxLength={4}
          onFocus={() => {
            setActiveBorder({ ...activeBorder, year: true });
          }}
          onBlur={() => {
            setActiveBorder({
              ...activeBorder,
              year: false,
            });
          }}
          editable={editable}
        />
      </View>
    </View>
  );
}
export const BirthDayInput = observer(BirthDayInputComponent);
