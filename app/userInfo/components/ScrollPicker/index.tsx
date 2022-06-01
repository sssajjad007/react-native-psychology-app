import React, { useState, useRef } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { observer } from "mobx-react-lite";

import { Button, Scroller, Subheading, tScrollerRef } from "../../../library";

import { styles } from "./styles";
import { IScrollPickerProps, IScrollPickerItem } from "../../types";

function ScrollPickerComponent(props: IScrollPickerProps) {
  const { title, items, itemKey, onItemSelected, editable } = props;
  const scrollRef = useRef<tScrollerRef>(null);
  const selectedRef = useRef<View>(null);
  const [rendered, setRendered] = useState<boolean>(false);
  function findLabel(): string {
    for (let index = 0; index < items.length; index++) {
      const { key, label } = items[index];
      if (key === itemKey) {
        return label;
      }
    }
    return "";
  }
  const [item, setItem] = useState<IScrollPickerItem>({
    key: itemKey || "",
    label: findLabel(),
  });
  function scrollToActiveItem() {
    if (!rendered) {
      selectedRef.current?.measure((x, y, width, height, pageX, pageY) => {
        scrollRef.current?.scrollTo({
          x: -(pageX - width),
          animated: true,
        });
        setRendered(true);
      });
    }
  }

  function formatTitle() {
    return `${title}: ${item.label}`;
  }
  function renderButtons() {
    const components: JSX.Element[] = [];
    for (let index = 0; index < items.length; index++) {
      const { key, label } = items[index];
      const selected = item.key === key;
      components.push(
        <View
          ref={selected ? selectedRef : undefined}
          key={key}
          style={styles.buttonMargin}
          onLayout={selected ? scrollToActiveItem : undefined}
        >
          <Button
            mode={selected ? "contained" : "outlined"}
            size={"growWithText"}
            rippleColor={"lightGrey"}
            onPress={() => {
              setItem({ key, label });
              onItemSelected({ key, label });
            }}
          >
            {label}
          </Button>
        </View>
      );
    }
    return components;
  }
  return (
    <View style={styles.container} pointerEvents={editable ? "auto" : "none"}>
      <View style={styles.titleContainer}>
        <Subheading>{formatTitle()}</Subheading>
      </View>
      <View style={styles.pickerContainer}>
        <Scroller ref={scrollRef} horizontal rtl>
          {renderButtons()}
        </Scroller>
      </View>
    </View>
  );
}

export const ScrollPicker = observer(ScrollPickerComponent);
