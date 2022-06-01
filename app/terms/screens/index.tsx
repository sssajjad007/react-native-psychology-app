import { observer } from "mobx-react-lite";
import React from "react";
import { Paragraph, Scroller, Container } from "../../library";
import { termsText } from "../constant";
import { styles } from "./styles";
function TermsScreen() {
  return (
    <Container>
      <Scroller contentContainerStyle={styles.container}>
        <Paragraph>{termsText}</Paragraph>
      </Scroller>
    </Container>
  );
}
export const Terms = observer(TermsScreen);
