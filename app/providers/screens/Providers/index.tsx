import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  SearchBar,
  Container,
  Scroller,
  Title,
  Subheading,
} from "../../../library";
import { ProviderCard } from "../../components";
import { providerState } from "../../entities";
import { useIsFocused } from "@react-navigation/native";
import {
  retrieveProviders,
  retrieveRequest,
  searchProviders,
} from "../../usecases";
import { styles } from "./styles";

function ProvidersScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState<boolean>(true);
  async function init() {
    await Promise.all([retrieveProviders(), retrieveRequest()]);
    setLoading(false);
  }
  useEffect(() => {
    if (isFocused) {
      init();
    }
  }, [isFocused]);
  function renderTitleForMyProvider() {
    if (providerState.myProvider && providerState.requestConfirmed) {
      return "دکتر من";
    }
    if (providerState.myProvider && !providerState.requestConfirmed) {
      return "در انتظار تایید دکتر";
    }
    return "دکتر من";
  }
  function renderProviderList() {
    if (providerState.query) {
      const length = providerState.searchResult.length;
      if (length === 0) {
        return (
          <Subheading style={{ textAlign: "center", marginTop: 32 }}>
            {"دکتری پیدا نشد"}
          </Subheading>
        );
      }
      const providers: JSX.Element[] = [];
      for (let index = 0; index < length; index++) {
        const { id, description, firstName, lastName, profilePictureUrl } =
          providerState.searchResult[index];
        providers.push(
          <ProviderCard
            key={id}
            id={id}
            fullName={`${firstName} ${lastName}`}
            description={description}
            profileImageUrl={profilePictureUrl}
            myDoctor={false}
          />
        );
      }
      return providers;
    }
    const length = providerState.providers.length;
    if (length === 0) {
      return (
        <Subheading style={{ textAlign: "center", marginTop: 32 }}>
          {"دکتری پیدا نشد"}
        </Subheading>
      );
    }
    const providers: JSX.Element[] = [];
    for (let index = 0; index < length; index++) {
      const { id, description, firstName, lastName, profilePictureUrl } =
        providerState.providers[index];
      providers.push(
        <ProviderCard
          key={id}
          id={id}
          fullName={`${firstName} ${lastName}`}
          description={description}
          profileImageUrl={profilePictureUrl}
          myDoctor={false}
        />
      );
    }
    return providers;
  }
  return (
    <Container loading={loading}>
      <View style={styles.searchContainer}>
        <SearchBar
          onChangeText={searchProviders}
          // onClear={() => {}}
          value={providerState.query}
          placeholder={"جستجو دکتر ..."}
        />
      </View>
      <View style={styles.doctorListContainer}>
        <Scroller>{renderProviderList()}</Scroller>
      </View>
      <View style={styles.requestContainer}>
        <View style={styles.horizontalLine} />
        <Title style={styles.myDoctorTitle}>{renderTitleForMyProvider()}</Title>
        {providerState.myProvider ? (
          <ProviderCard
            id={providerState.myProvider?.id || ""}
            fullName={`${providerState.myProvider?.firstName} ${providerState.myProvider?.lastName}`}
            description={providerState.myProvider?.description || "متخصص"}
            profileImageUrl={providerState.myProvider?.profilePictureUrl || ""}
            myDoctor
          />
        ) : (
          <Subheading style={{ textAlign: "center", paddingBottom: 30 }}>
            {"دکتری ثبت نشده است"}
          </Subheading>
        )}
      </View>
    </Container>
  );
}

export const Providers = observer(ProvidersScreen);
