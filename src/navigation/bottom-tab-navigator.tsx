import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes, RootTabParamList } from "./types";
import { AuctionTab } from "../tabs/auction";
import { LoanTab } from "../tabs/loan";
import { AnimatedTabBar } from "../components/tab-bar/animated-tab-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../constants/colors";
import { ProfileTab } from "../tabs/profile";
const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator<RootTabParamList>();

  return (
    <BottomTab.Navigator
      initialRouteName={NavigationRoutes.AuctionTab}
      tabBar={(props) => <AnimatedTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        component={AuctionTab}
        name={NavigationRoutes.AuctionTab}
        options={{
          tabBarIcon: () => (
            <AntDesign name={"CodeSandbox"} size={24} color={Colors.black} />
          ),
        }}
      />
      <BottomTab.Screen
        component={LoanTab}
        name={NavigationRoutes.LoanTab}
        options={{
          tabBarIcon: () => (
            <AntDesign name={"QQ"} size={24} color={Colors.black} />
          ),
        }}
      />
      <BottomTab.Screen
        component={ProfileTab}
        name={NavigationRoutes.ProfileTab}
        options={{
          tabBarIcon: () => (
            <AntDesign name={"HTML"} size={24} color={Colors.black} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
