import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback } from "react";
import { IAuction } from "../../interface/auction";
import { Colors } from "../../constants/colors";
import { Image } from "expo-image";
import { BoldText, ThinText } from "../../widgets/styled-text";
import { priceBrief } from "../../utils/price-brief";
import { CountdownTimer } from "./countdown-timer";
import { MyButton } from "../../widgets/my-button";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoutes } from "../../navigation/types";
type Props = {
  item: IAuction;
};

const AuctionContainer = memo(({ item }: Props) => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate(NavigationRoutes.AuctionDetail, { item });
  }, []);
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={item.img} style={styles.image} />
      <BoldText style={styles.title}>{item.name}</BoldText>
      <View style={styles.countContainer}>
        <ThinText style={styles.helperText}>Шууд дүн: </ThinText>
        <BoldText style={styles.price}>{priceBrief(item.livePrice)}</BoldText>
      </View>
      <View style={styles.countContainer}>
        <ThinText style={styles.helperText}>Үлдсэн: </ThinText>
        <CountdownTimer targetDate={item.timeLeft} style={styles.countDown} />
      </View>
      <View style={styles.h8} />
      <MyButton title={"Үзэх"} type="primary" onPress={onPress} />
    </Pressable>
  );
});

AuctionContainer.displayName = "AuctionContainer";

export { AuctionContainer };

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    borderRadius: 12,
    padding: 8,
  },
  image: {
    height: 150,
    borderRadius: 8,
    alignSelf: "center",
    width: "100%",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 12,
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  helperText: {
    fontSize: 12,
  },
  countDown: {
    fontSize: 14,
  },
  h8: {
    height: 8,
  },
});
