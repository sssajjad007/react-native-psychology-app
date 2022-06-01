// import React, { useState } from "react";
// import { observer } from "mobx-react-lite";
// import { View } from "react-native";
// import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
// import { THEME, toString } from "../../../library";
// import { IDropPickerProps } from "../../types";

// function itemConventor(item: string[]) {
//   const result = [];
//   for (let index = 0; index < item.length; index++) {
//     const element = item[index];
//     result.push({ label: element, value: element });
//   }
//   return result;
// }

// function DropPickerComponent(props: IDropPickerProps) {
//   const { title, item, onValueChange } = props;
//   const myTheme = require("./styles");
//   DropDownPicker.addTheme("myTheme", myTheme);
//   DropDownPicker.setTheme("myTheme");

//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState(itemConventor(item ? item : [""]));
//   function oChangeValue(value: ValueType | ValueType[] | null) {
//     onValueChange(toString(value));
//   }
//   return (
//     <View
//       style={{ alignSelf: "flex-end", paddingRight: 16, paddingVertical: 8 }}
//     >
//       <DropDownPicker
//         textStyle={{ fontFamily: THEME.FONTS.REGULAR }}
//         rtl={true}
//         // style={{width:widthPercentageToDP(90)}}
//         selectedItemLabelStyle={{
//           fontFamily: THEME.FONTS.BOLD,
//         }}
//         listMode={"SCROLLVIEW"}
//         placeholder={title}
//         placeholderStyle={{
//           color: THEME.COLORS.GREY.NORMAL,
//           fontFamily: THEME.FONTS.MEDIUM,
//         }}
//         showArrowIcon={true}
//         mode={"BADGE"}
//         showBadgeDot={true}
//         open={open}
//         value={value}
//         items={items}
//         setOpen={setOpen}
//         setValue={setValue}
//         setItems={setItems}
//         onChangeValue={oChangeValue}
//       />
//     </View>
//   );
// }

// export const DropPicker = observer(DropPickerComponent);
