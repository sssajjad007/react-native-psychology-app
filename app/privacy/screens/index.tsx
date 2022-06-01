import { observer } from "mobx-react-lite";
import React from "react";
import { Paragraph, Scroller, Container } from "../../library";
import { privacyText } from "../constant";
import { styles } from "./styles";
function PrivacyScreen() {
  return (
    <Container>
      <Scroller contentContainerStyle={styles.container}>
        <Paragraph>{privacyText}</Paragraph>
      </Scroller>
    </Container>
  );
}
export const Privacy = observer(PrivacyScreen);
