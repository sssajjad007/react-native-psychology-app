import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Ionicons } from "@expo/vector-icons";
import { Container, Scroller, TaskynIcon, IconButton } from "../../../library";
import { getRole } from "../../../authentication";
import { UserCard, Tile } from "../../components";
import { dashboardState } from "../../entities";
import { retrieveProvider } from "../../usecases";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { retrieveCustomers } from "../../usecases/retriveCustomer";
import { useIsFocused } from "@react-navigation/native";

function DashboardScreen() {
  const isFocused = useIsFocused();
  const route = useRoute();
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const isProvider = getRole() === "provider";
  // const isProvider = true;
  const isCustomer = getRole() === "customer";
  // @ts-expect-error
  const id = route.params?.id || "";
  async function init() {
    // console.log({ isCustomer });
    if (isCustomer) {
      await retrieveProvider();
    }
    if (isProvider) {
      await retrieveCustomers(id);
    }
    setLoading(false);
  }
  function renderUserCard() {
    if (isCustomer) {
      return (
        <UserCard
          id={dashboardState.provider?.id || ""}
          name={dashboardState.provider?.name || "دکتر انتخاب نکردید"}
          description={dashboardState.provider?.description || ""}
          role={"customer"}
          imageUrl={dashboardState.provider?.profilePictureUrl || ""}
        />
      );
    }
    if (isProvider) {
      return (
        <UserCard
          id={dashboardState.customer?.id || ""}
          name={
            `${dashboardState.customer?.firstName} ${dashboardState.customer?.lastName}` ||
            ""
          }
          description={dashboardState.customer?.description || ""}
          imageUrl={dashboardState.customer?.profilePictureUrl || ""}
          role={"provider"}
        />
      );
    }
  }
  function providerTileRenderer() {
    return (
      <>
        <View style={styles.row}>
          <Tile
            title={"یادداشت برداری"}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"note"} color={color} size={size} svg />;
            }}
            onPress={() => {
              navigation.push("notes", { id });
            }}
          />
          <Tile
            title={"پرونده مراجع"}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"file"} color={color} size={size} svg />;
            }}
            onPress={() => {
              navigation.push("userInfo", { id });
            }}
          />
        </View>
        <View style={styles.row}>
          <Tile
            title={"تاریخچه تست ها"}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"form"} color={color} size={size} svg />;
            }}
            onPress={() => {
              navigation.push("testHistory", { id });
            }}
          />
          <Tile
            title={"تمرینات"}
            Icon={({ size, color }) => {
              return (
                <TaskynIcon name={"practice"} color={color} size={size} svg />
              );
            }}
            onPress={() => {
              navigation.push("tasks", { id });
            }}
          />
        </View>
      </>
    );
  }
  function customerTileRenderer() {
    return (
      <>
        <View style={styles.row}>
          {dashboardState.provider?.id ? (
            <Tile
              title={"تمرینات"}
              Icon={({ size, color }) => {
                return (
                  <TaskynIcon name={"practice"} color={color} size={size} svg />
                );
              }}
              onPress={() => {
                navigation.push("tasks", { id });
              }}
            />
          ) : null}
          <Tile
            title={"پرونده من"}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"file"} color={color} size={size} svg />;
            }}
            onPress={() => {
              navigation.push("userInfo", { id });
            }}
          />
        </View>
        {dashboardState.provider?.id ? (
          <View style={styles.row}>
            <Tile
              title={"لیست دکترها"}
              Icon={({ size, color }) => {
                return (
                  <TaskynIcon name={"users"} color={color} size={size} svg />
                );
              }}
              onPress={() => {
                navigation.push("providers", { id });
              }}
            />
          </View>
        ) : null}
      </>
    );
  }
  // TODO: convert to component
  function renderBack() {
    if (!isProvider) return null;
    return (
      <View style={{ position: "absolute", top: 8, left: 12, zIndex: 5 }}>
        <IconButton
          color={"white"}
          size={24}
          Icon={({ size, color }) => (
            <Ionicons name="arrow-back" size={size} color={color} />
          )}
          onPress={navigation.goBack}
        />
      </View>
    );
  }
  useEffect(() => {
    if (isFocused) {
      init();
    }
  }, [isFocused]);
  return (
    <Container loading={loading}>
      {renderBack()}
      <View style={styles.titleContainer}>{renderUserCard()}</View>
      <View style={styles.buttonContainer}>
        <Scroller contentContainerStyle={styles.containerContentStyle}>
          {isCustomer ? customerTileRenderer() : providerTileRenderer()}
        </Scroller>
      </View>
    </Container>
  );
}

export const Dashboard = observer(DashboardScreen);
