import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React, { memo, useCallback } from "react";
import { Colors } from "../constants/colors";
import { AppBar } from "../widgets/app-bar";
import { NunitoText } from "../widgets/styled-text";
import { MyButton } from "../widgets/my-button";
import { MaterialIcons } from "@expo/vector-icons";
import { auctionData } from "../constants/auction-data";
import { AuctionContainer } from "../components/auction/auction-container";
import { IAuction } from "../interface/auction";

const width = Dimensions.get("window").width;

const AuctionTab = memo(() => {
  const gap = React.useCallback((index: number) => {
    return {
      width: width / 2 - 24.5,
      marginRight: index % 2 !== 0 ? 0 : 13,
      marginBottom: 12,
      marginTop: 8,
    };
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: IAuction; index: number }) => {
      return (
        <View style={gap(index)}>
          <AuctionContainer item={item} />
        </View>
      );
    },
    []
  );
  return (
    <View style={styles.root}>
      <AppBar
        left={<NunitoText>e</NunitoText>}
        right={
          <MyButton
            icon={
              <MaterialIcons name="category" size={24} color={Colors.primary} />
            }
            type="text"
          />
        }
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={auctionData}
        renderItem={renderItem}
        numColumns={2}
        style={styles.container}
      />
    </View>
  );
});

AuctionTab.displayName = "AuctionTab";

export { AuctionTab };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  container: {
    marginHorizontal: 16,
  },
});
