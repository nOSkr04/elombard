/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IAuction } from "../interface/auction";

export enum NavigationRoutes {
  Root = "Root",
  RootNavigator = "RootStackNavigator",
  // Tabs
  AuctionTab = "AuctionTab",
  LoanTab = "LoanTab",
  ProfileTab = "ProfileTab",
  // Screens
  AuctionDetail = "AuctionDetail",
  // sheets
  TestSheet = "TestSheet",
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AuctionDetail: { item: IAuction };
};

export type RootTabParamList = {
  AuctionTab: undefined;
  LoanTab: undefined;
  ProfileTab: undefined;
};

export type BottomSheetParamList = {
  RootNavigator: undefined;
  TestSheet: undefined;
};

// export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> =
  NativeStackScreenProps<BottomSheetParamList, T>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends BottomSheetParamList {}
    interface RootParamList extends RootTabParamList {}
  }
}
