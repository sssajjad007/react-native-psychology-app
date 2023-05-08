import React, { useState, useEffect, useCallback } from "react";
import { I18nManager, Platform } from "react-native";
import { observer } from "mobx-react-lite";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNav, TabNav } from "./nativeNavigation";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import {
  registerAppState,
  removeAppStateListeners,
  logger,
  unsubscribeNetInfo,
} from "./app/library";
import {
  getLoggedIn,
  initToken,
  registerSilentRefresh,
  isTokenExpired,
  refresh,
} from "./app/authentication";

import type { IReactionDisposer } from "mobx";

function AppComponent() {
  I18nManager.allowRTL(false);
  const isSignedIn = getLoggedIn();
  const [isAppReady, setAppReady] = useState<boolean>(false);
  const [fontsLoaded] = useFonts({
    TaskynIcon: require("./assets/fonts/icomoon.ttf"),
    ...Platform.select({
      web: {
        "Vazir-Regular-UI": require("./assets/fonts/Vazir-Regular-UI.ttf"),
        "Vazir-Light-UI": require("./assets/fonts/Vazir-Light-UI.ttf"),
        "Vazir-Thin-UI": require("./assets/fonts/Vazir-Thin-UI.ttf"),
        "Vazir-Medium-UI": require("./assets/fonts/Vazir-Medium-UI.ttf"),
        "Vazir-Bold-UI": require("./assets/fonts/Vazir-Bold-UI.ttf"),
        "Vazir-Black-UI": require("./assets/fonts/Vazir-Black-UI.ttf"),
      },
    }),
  });
  useEffect(() => {
    let removeSilentRefreshAutoRun: IReactionDisposer | undefined = undefined;
    async function prepare() {
      try {
        registerAppState();
        const shouldRefresh = isTokenExpired();
        if (shouldRefresh) {
          logger({
            container: "root",
            path: { section: "screens", file: "App.tsx" },
            type: "info",
            logMessage: "Token expired, refreshing token at startup",
          });
        }
        await Promise.all([
          SplashScreen.preventAutoHideAsync(),
          initToken(),
          shouldRefresh ? refresh() : undefined,
        ]);
        removeSilentRefreshAutoRun = registerSilentRefresh();
      } catch (error) {
        console.warn(error);
      } finally {
        setAppReady(true);
      }
    }
    prepare();
    return () => {
      removeAppStateListeners();
      if (removeSilentRefreshAutoRun) {
        removeSilentRefreshAutoRun();
      }
      unsubscribeNetInfo();
    };
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (isAppReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady, fontsLoaded]);
  if (!isAppReady || !fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <BottomSheetModalProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer onReady={onLayoutRootView}>
          {!isSignedIn ? <TabNav /> : <AuthNav />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </BottomSheetModalProvider>
  );
}

export const App = observer(AppComponent);
