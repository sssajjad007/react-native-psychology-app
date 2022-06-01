import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container, Scroller, Subheading } from "../../../library";

import { RequestCard } from "../../components";
import { requestState } from "../../entities";
import { retrieveRequests } from "../../usecases";

import { styles } from "./styles";

export function RequestsScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  async function loadRequests() {
    await retrieveRequests();
    setLoading(false);
  }
  useEffect(() => {
    loadRequests();
  }, []);
  function renderCustomerRequests() {
    const length = requestState.requests.length;
    if (length === 0) {
      return (
        <Subheading style={styles.noRequestFound}>
          {"درخواستی یافت نشد!"}
        </Subheading>
      );
    }
    const components: JSX.Element[] = [];
    for (let index = 0; index < length; index++) {
      const {
        customerId,
        description,
        name,
        profilePictureUrl,
        providerId,
        requestConfirmed,
        createdAt,
      } = requestState.requests[index];
      components.push(
        <RequestCard
          key={customerId}
          id={customerId}
          fullName={name}
          description={createdAt}
          profileImageUrl={profilePictureUrl}
        />
      );
    }
    return components;
  }
  return (
    <Container loading={loading}>
      <Scroller contentContainerStyle={styles.scrollViewContentContainer}>
        {renderCustomerRequests()}
      </Scroller>
    </Container>
  );
}

export const Requests = observer(RequestsScreen);
