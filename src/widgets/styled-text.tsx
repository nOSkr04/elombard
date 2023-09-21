import React, { memo } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

const NunitoText = memo((props: TextProps) => {
  return <Text {...props} style={[props?.style, styles.NunitoBoldIt]} />;
});
const BoldText = memo((props: TextProps) => {
  return <Text {...props} style={[props?.style, styles.MonBold]} />;
});
const SemiBoldText = memo((props: TextProps) => {
  return <Text {...props} style={[props?.style, styles.MonSemiBold]} />;
});
const MediumText = memo((props: TextProps) => {
  return <Text {...props} style={[props?.style, styles.MonMedium]} />;
});
const ThinText = memo((props: TextProps) => {
  return <Text {...props} style={[props?.style, styles.MonThin]} />;
});

export { NunitoText, BoldText, SemiBoldText, MediumText, ThinText };

const styles = StyleSheet.create({
  MonBold: {
    fontFamily: "MonBold",
  },
  MonSemiBold: {
    fontFamily: "MonSemiBold",
  },
  MonMedium: {
    fontFamily: "MonMedium",
  },
  MonThin: {
    fontFamily: "MonThin",
  },
  NunitoBoldIt: {
    fontFamily: "NunitoBoldIt",
  },
});
