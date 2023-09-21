import React from "react";
import { NavigationRoutes, RootStackParamList } from "./types";
import BottomTabNavigator from "./bottom-tab-navigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuctionDetail } from "../screens/auction/detail";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={BottomTabNavigator}
        name={NavigationRoutes.Root}
      />
      <Stack.Screen
        component={AuctionDetail}
        name={NavigationRoutes.AuctionDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
