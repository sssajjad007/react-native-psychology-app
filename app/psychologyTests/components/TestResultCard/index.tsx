import { Image, View } from "react-native";
import React from "react";
import { observer } from "mobx-react-lite";
import {
  styles,
  errorColor,
  facetColor,
  factorColor,
  warningColor,
} from "./styles";
import { getRole } from "../../../authentication";
import { Headline, Subheading } from "../../../library";

import { error, warning } from "../../assets";
import { ITestResultProps } from "../../types";
function TestResultCardComponent(props: ITestResultProps) {
  const { faName, enName, variable, rawScore, baseRate, type, interpret } =
    props;

  function typeToColor(value: string) {
    switch (value) {
      case "factor":
        return factorColor;
      case "error":
        return errorColor;
      case "warning":
        return warningColor;
      case "facet":
        return facetColor;
      default:
        return "#ffffff";
    }
  }
  function renderer() {
    const isProvider = getRole() === "provider";
    if (type === "error") {
      return isProvider ? errorCardRenderer() : null;
    }
    if (type === "warning") {
      return isProvider ? warningCardRenderer() : null;
    }
    // TODO: move this to component
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.textContainer}>
            <View style={styles.itemContainer}>
              <Headline>{typeToTitle(type)}</Headline>
            </View>
            <View style={styles.itemContainer}>
              <Subheading style={styles.darkGreyColor}>
                <Subheading>
                  {faName}
                  <Subheading
                    style={styles.darkGreyColor}
                  >{` ( ${enName} )`}</Subheading>
                </Subheading>
              </Subheading>
            </View>
            <View style={styles.itemContainer}>
              <Subheading style={{ textAlign: "right" }}>
                {`نماد: `}
                <Subheading style={styles.darkGreyColor}>
                  {variable.toUpperCase()}
                </Subheading>
              </Subheading>
            </View>
            {baseRateCal()}
            <View style={styles.itemContainer}>
              <Subheading>
                {`نمره خام: `}
                <Subheading style={styles.darkGreyColor}>{rawScore}</Subheading>
              </Subheading>
            </View>

            <View style={styles.itemContainer}>{interpretRenderer()}</View>
          </View>
        </View>
        <View
          style={[
            type
              ? { ...styles.sideBarColor, backgroundColor: typeToColor(type) }
              : styles.sideBarColor,
          ]}
        />
      </View>
    );
  }
  function errorCardRenderer() {
    return (
      <View style={styles.container}>
        <View style={styles.errorAndwarningCard}>
          <View style={styles.titleWithIcon}>
            <View style={styles.errorContainer}>
              <Image source={error} style={styles.iconImage} />
            </View>
            <Headline style={{ paddingRight: 16, color: typeToColor(type) }}>
              {`${typeToTitle(type)}!`}
            </Headline>
          </View>
          <Subheading style={styles.errorAndwarningBodyPadding}>
            {faName}
          </Subheading>
        </View>
        <View
          style={[
            type
              ? { ...styles.sideBarColor, backgroundColor: typeToColor(type) }
              : styles.sideBarColor,
          ]}
        />
      </View>
    );
  }
  function warningCardRenderer() {
    return (
      <View style={styles.container}>
        <View style={styles.errorAndwarningCard}>
          <View style={styles.titleWithIcon}>
            <View style={styles.warningContainer}>
              <Image source={warning} style={styles.iconImage} />
            </View>
            <Headline style={{ paddingRight: 16, color: typeToColor(type) }}>
              {`${typeToTitle(type)}!`}
            </Headline>
          </View>
          <Subheading style={styles.errorAndwarningBodyPadding}>
            {faName}
          </Subheading>
        </View>
        <View
          style={[
            type
              ? { ...styles.sideBarColor, backgroundColor: typeToColor(type) }
              : styles.sideBarColor,
          ]}
        />
      </View>
    );
  }
  function typeToTitle(value: string) {
    switch (value) {
      case "factor":
        return "عامل";
      case "error":
        return "خطا";
      case "warning":
        return "هشدار";
      case "facet":
        return "زیر عامل";
      default:
        return "";
    }
  }
  function baseRateCal() {
    if (rawScore === baseRate) {
      return null;
    }
    return (
      <View style={styles.itemContainer}>
        <Subheading>
          {`نرخ تبدیل پایه: `}
          <Subheading style={styles.darkGreyColor}>{baseRate}</Subheading>
        </Subheading>
      </View>
    );
  }
  function interpretRenderer() {
    if (interpret) {
      return (
        <View style={styles.itemContainer}>
          <Subheading>
            {`وضعیت: `}
            <Subheading style={styles.darkGreyColor}>{interpret}</Subheading>
          </Subheading>
        </View>
      );
    }
    return null;
  }

  return renderer();
}
export const TestResultCard = observer(TestResultCardComponent);
