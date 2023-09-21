import React, { useMemo } from "react";
import { StyleProp, StyleSheet, View, Text, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/colors";

type Props = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  useBorderRadius?: boolean;
};

const AppBar = ({
  left,
  center,
  right,
  useBorderRadius = false,
  style,
}: Props) => {
  const _Styles = useMemo(() => {
    const styles = StyleSheet.create({
      safeArea: {
        backgroundColor: Colors.white,
      },
      borderRadius: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
      },
      root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: Colors.white,
      },
      w40: {
        width: 40,
      },
    });

    return {
      safeArea: [styles.safeArea],
      root: [styles.root, useBorderRadius && styles.borderRadius],
      w40: styles.w40,
    };
  }, [useBorderRadius]);

  const renderCenter = () => {
    if (typeof center === "string") {
      return <Text>{center}</Text>;
    }

    return center;
  };

  const renderLeft = () => {
    return center && !left ? <View style={_Styles.w40} /> : left;
  };

  const renderRight = () => {
    return center && !right ? <View style={_Styles.w40} /> : right;
  };

  return (
    <>
      <SafeAreaView edges={["top", "left", "right"]} style={_Styles.safeArea} />
      <View style={[_Styles.root, style]}>
        {renderLeft()}
        {renderCenter()}
        {renderRight()}
      </View>
    </>
  );
};

export { AppBar };
