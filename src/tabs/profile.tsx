import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/colors";

const ProfileTab = memo(() => {
  return (
    <View style={styles.root}>
      <Text>ProfileTab</Text>
    </View>
  );
});

ProfileTab.displayName = "ProfileTab";

export { ProfileTab };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
});
