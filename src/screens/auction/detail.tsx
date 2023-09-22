import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useCallback, useState } from "react";
import { NavigationRoutes, RootStackParamList } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { _styles } from "../../components/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GoBack } from "../../components/icon-button/go-back";
import { Colors } from "../../constants/colors";
import { priceBrief } from "../../utils/price-brief";
import {
  BoldText,
  MediumText,
  SemiBoldText,
  ThinText,
} from "../../widgets/styled-text";
import { CountdownTimerBox } from "../../components/auction/countdown-timer-box";

type Props = NativeStackScreenProps<
  RootStackParamList,
  NavigationRoutes.AuctionDetail
>;

const width = Dimensions.get("window").width;

const AuctionDetail = memo(({ route }: Props) => {
  const sf = useSafeAreaInsets();
  const { item } = route.params;
  const [selectedImage, setSelectedImage] = useState(item.imgs[0] || "");
  const backButtonStyle = useCallback(() => {
    return {
      top: sf.top + 15,
    };
  }, []);

  const selectImage = useCallback((img: string) => {
    setSelectedImage(img);
  }, []);

  const renderImage = useCallback(({ item }: { item: string }) => {
    return (
      <Pressable onPress={() => selectImage(item)}>
        <Image source={item} style={styles.images} />
      </Pressable>
    );
  }, []);

  const renderStyle = useCallback((bool: boolean) => {
    return {
      color: bool ? Colors.success : Colors.danger,
    };
  }, []);

  return (
    <ScrollView style={_styles.background}>
      <View style={[backButtonStyle(), styles.container]}>
        <GoBack />
      </View>
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
      <View style={styles.contentContainer}>
        <BoldText style={styles.title}>{item.name}</BoldText>
        <View style={styles.priceContainer}>
          <SemiBoldText style={styles.price}>
            {priceBrief(item.livePrice)}
          </SemiBoldText>
          <ThinText style={styles.priceDescription}>
            {" "}
            Хамгийн өндөр дүн
          </ThinText>
        </View>
        <View style={styles.countContainer}>
          <MediumText style={styles.closeText}>Хаагдах хугацаа:</MediumText>
          <CountdownTimerBox targetDate={item.timeLeft} />
        </View>
        <FlatList
          data={item.imgs}
          keyExtractor={(item) => item}
          renderItem={renderImage}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imagesContainer}
        />
      </View>
      <View style={styles.productDetail}>
        <BoldText style={styles.productTitle}>Бүтээгдэхүүн мэдээлэл</BoldText>
        <View style={styles.productRow}>
          <MediumText style={styles.productQuest}>Хайрцагтай эсэх</MediumText>
          <View style={styles.answerContainer}>
            <MediumText
              style={[styles.productAnswer, renderStyle(item.isBoxed)]}
            >
              {item.isBoxed ? "Тийм" : "Үгүй"}
            </MediumText>
          </View>
        </View>
        <View style={styles.productRow}>
          <MediumText style={styles.productQuest}>IMEI</MediumText>
          <View style={styles.answerContainer}>
            <MediumText style={[styles.productAnswer]}>{item.imei}</MediumText>
          </View>
        </View>
        <View style={styles.productRow}>
          <MediumText style={styles.productQuest}>Асуудал</MediumText>
          <View style={styles.answerContainer}>
            {item.problems.map((problem) => {
              return (
                <MediumText style={[styles.productAnswer]}>
                  {problem}
                </MediumText>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.productDetail}>
        <View style={styles.biderContainer}>
          <BoldText style={styles.productTitle}>Тоглогчид</BoldText>
          <View style={styles.livePriceContainer}>
            <SemiBoldText>{priceBrief(item.livePrice)}</SemiBoldText>
            <ThinText>Хамгийн өндөр дүн</ThinText>
          </View>
        </View>
        {item.players?.map((player) => {
          return (
            <View style={styles.biderPlayer}>
              <View>
                <SemiBoldText>{player.price}</SemiBoldText>
                <MediumText>{player.name}</MediumText>
              </View>
              <MediumText>{player.registered}</MediumText>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
});

AuctionDetail.displayName = "AuctionDetail";

export { AuctionDetail };

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 2,
    left: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  image: {
    width,
    height: 250,
  },
  contentContainer: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 24,
    marginTop: 8,
  },
  price: {
    fontSize: 20,
    marginTop: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  priceDescription: {
    color: Colors.darkGray,
    fontSize: 14,
  },
  countContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  closeText: {
    fontSize: 16,
    color: Colors.primary,
    marginRight: 8,
  },
  imagesContainer: {
    marginVertical: 16,
  },
  images: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 8,
  },
  productDetail: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    marginTop: 12,
    paddingBottom: 16,
    borderRadius: 16,
  },
  productTitle: {
    fontSize: 16,
  },
  productRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginTop: 8,
  },
  productQuest: {
    fontSize: 14,
    color: Colors.darkGray,
    marginRight: 8,
    flex: 0.5,
  },
  productAnswer: {
    fontSize: 16,
    color: Colors.primary,
  },
  answerContainer: {
    flex: 0.5,
  },
  biderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  livePriceContainer: {
    alignItems: "center",
  },
  biderPlayer: {
    flexDirection: "row",
  },
});
