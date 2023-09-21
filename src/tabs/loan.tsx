import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/colors";

const LoanTab = memo(() => {
  return (
    <View style={styles.root}>
      <Text>LoanTab</Text>
    </View>
  );
});

LoanTab.displayName = "LoanTab";

export { LoanTab };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
});
