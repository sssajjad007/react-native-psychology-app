import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useIsFocused } from "@react-navigation/native";
import {
  SearchBar,
  Title,
  Subheading,
  Container,
  Scroller,
} from "../../../library";
import { retrieveRequests } from "../../../requests";
import { customerState } from "../../entities";
import { CustomerCard, RequestCard } from "../../components";
import { retrieveCustomers, searchCustomers } from "../../usecases";
import { styles } from "./styles";

function CustomersScreen() {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState<boolean>(true);
  async function init() {
    await Promise.all([retrieveCustomers(), retrieveRequests()]);
    setLoading(false);
  }
  useEffect(() => {
    if (isFocused) {
      init();
    }
  }, [isFocused]);
  function renderCustomers() {
    if (customerState.query) {
      const searchLen = customerState.searchResult.length;
      if (searchLen === 0) {
        return (
          <Subheading style={styles.noCustomersFound}>
            {"مراجعی یافت نشد!"}
          </Subheading>
        );
      }
      const customers: JSX.Element[] = [];
      for (let index = 0; index < searchLen; index++) {
        const { customerId, description, name, profilePictureUrl, createdAt } =
          customerState.searchResult[index];
        customers.push(
          <CustomerCard
            key={customerId}
            description={description}
            fullName={name}
            id={customerId}
            profileImageUrl={profilePictureUrl}
            date={createdAt}
          />
        );
      }
      return customers;
    }
    const length = customerState.customers.length;
    if (length === 0) {
      // TODO: convert styles to inline styles
      return (
        <Subheading style={styles.noCustomersFound}>
          {"مراجعی یافت نشد!"}
        </Subheading>
      );
    }
    const customers: JSX.Element[] = [];
    for (let index = 0; index < length; index++) {
      const { customerId, description, name, profilePictureUrl, createdAt } =
        customerState.customers[index];
      customers.push(
        <CustomerCard
          key={customerId}
          description={description}
          fullName={name}
          id={customerId}
          profileImageUrl={profilePictureUrl}
          date={createdAt}
        />
      );
    }
    return customers;
  }
  return (
    <Container loading={loading}>
      <View style={styles.titleContainer}>
        <Title>{"لیست مراجعین"}</Title>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={searchCustomers}
          value={customerState.query}
          placeholder={"جستجو مراجعین ..."}
        />
      </View>
      <RequestCard />
      <View style={styles.line} />
      <Scroller>{renderCustomers()}</Scroller>
    </Container>
  );
}
export const Customers = observer(CustomersScreen);
