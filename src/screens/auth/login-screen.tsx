import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { Colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const LoginScreen = memo(() => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Image
        style={styles.bgImage}
        source={require("../../assets/imgs/background.png")}
      />
      {/* lights */}
      <View style={styles.lightContainer}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../../assets/imgs/light.png")}
          style={styles.lamp1}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={require("../../assets/imgs/light.png")}
          style={styles.lamp2}
        />
      </View>

      {/* title and form */}
      <View style={styles.container}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={styles.title}
          >
            Login
          </Animated.Text>
        </View>

        {/* form */}
        <View style={{ alignItems: "center" }}>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={{ backgroundColor: "black", padding: 5, width }}
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={{
              backgroundColor: "black",
              padding: 5,
              width,
              marginBottom: 3,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            style={{ width }}
            entering={FadeInDown.delay(400).duration(1000).springify()}
          >
            <TouchableOpacity
              style={{
                width,
                backgroundColor: "blue",
                padding: 3,
                marginBottom: 3,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: Colors.white,
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={{ color: "black" }}>SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
});

LoginScreen.displayName = "LoginScreen";
export { LoginScreen };

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
  },
  bgImage: {
    height,
    width,
    position: "absolute",
  },
  lightContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width,
    position: "absolute",
  },
  lamp1: {
    height: 225,
    width: 90,
  },
  lamp2: {
    height: 160,
    width: 65,
    opacity: 75,
  },
  container: {
    height,
    width,

    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 10,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
