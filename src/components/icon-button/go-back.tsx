import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
const GoBack = memo(() => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <AntDesign name="back" color={Colors.black} size={24} />
    </Pressable>
  );
});

GoBack.displayName = "GoBack";

export { GoBack };

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
