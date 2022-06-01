import React, { useEffect, useState, useRef } from "react";
import { View } from "react-native";
import { autorun } from "mobx";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useNavigation } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import {
  Button,
  Logo,
  Subheading,
  Headline,
  Container,
  Scroller,
  Timer,
  TaskynIcon,
} from "../../../library";
import { authState, inputState } from "../../entities";
import {
  onOtpNumberChange,
  passwordlessVerify,
  passwordlessStart,
} from "../../usecases";
import { styles, logoSize } from "./styles";

function IdentifyScreen() {
  // TODO: find a better way to do this
  const isMounted = useRef<boolean>(false);
  const navigator = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [timerEnded, setTimerEnd] = useState<boolean>(false);
  const CELL_COUNT = 5;
  const ref = useBlurOnFulfill({
    value: inputState.otpNumber,
    cellCount: CELL_COUNT,
  });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: inputState.otpNumber,
    setValue: onOtpNumberChange,
  });
  async function verify() {
    setLoading(true);
    await passwordlessVerify();
    if (isMounted.current) {
      setLoading(false);
    }
  }
  useEffect(() => {
    isMounted.current = true;
    const disposer = autorun(() => {
      if (authState.otpToken && inputState.otpNumber.length === 5) {
        verify();
      }
    });
    return () => {
      isMounted.current = false;
      disposer();
    };
  }, []);
  function onTimerEnd() {
    setTimerEnd(true);
  }
  async function onResendPress() {
    await passwordlessStart();
    setTimerEnd(false);
  }
  return (
    <Container>
      <Scroller style={styles.container} scrollEnabled={false}>
        <View style={styles.logoContainer}>
          <Logo size={logoSize} color={"primary"} />
        </View>
        <View style={styles.confirmationTextContainer}>
          <Subheading>
            {"کد تایید برای شماره "}
            <Subheading style={styles.phoneNumber}>{` (${digitsEnToFa(
              inputState.phoneNumber
            )}) `}</Subheading>
            <Subheading>{"ارسال شد."}</Subheading>
          </Subheading>
          <Subheading style={styles.enterCodeText}>
            {"لطفا کد را وارد کنید."}
          </Subheading>
        </View>
        <View style={styles.editNumberButtonContainer}>
          <Button
            mode={"text"}
            rippleColor={"lightGrey"}
            size={"small"}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"pencil"} size={size} color={color} />;
            }}
            onPress={navigator.goBack}
          >
            {"ویرایش شماره"}
          </Button>
        </View>
        <View style={styles.codeConfirmationContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={inputState.otpNumber}
            onChangeText={onOtpNumberChange}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType={"number-pad"}
            textContentType={"oneTimeCode"}
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.line, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Headline>{symbol || (isFocused ? <Cursor /> : null)}</Headline>
              </View>
            )}
          />
          <View style={styles.timerContainer}>
            {timerEnded ? (
              <Button
                mode={"text"}
                size={"small"}
                Icon={({ size, color }) => {
                  return (
                    <TaskynIcon name={"repeat"} size={size} color={color} />
                  );
                }}
                rippleColor={"lightGrey"}
                onPress={onResendPress}
              >
                {"ارسال مجدد"}
              </Button>
            ) : (
              <Timer minute={1} second={0} onTimerEnd={onTimerEnd} />
            )}
          </View>
        </View>
        <View style={styles.submitButtonContainer}>
          <Button
            mode={"contained"}
            loading={loading}
            disabled={inputState.otpNumber.length !== 5}
            rippleColor={"lightGrey"}
            size={"wide"}
          >
            {"ورود"}
          </Button>
        </View>
      </Scroller>
    </Container>
  );
}

export const Identify = observer(IdentifyScreen);
