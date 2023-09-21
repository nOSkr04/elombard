import React, { useState, useEffect, memo } from "react";
import { StyleSheet, View } from "react-native";
import { NunitoText } from "../../widgets/styled-text";
import { TextStyle } from "react-native";
import { Colors } from "../../constants/colors";

const CountdownTimerBox = memo(
  ({ targetDate, style }: { targetDate: string; style?: TextStyle }) => {
    const targetTime = new Date(targetDate).getTime();
    const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

    useEffect(() => {
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeRemaining = targetTime - currentTime;

        if (timeRemaining <= 0) {
          clearInterval(interval);
          setTimeLeft(0);
        } else {
          setTimeLeft(timeRemaining);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, [targetTime]);

    const hours = String(
      Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(
      Math.floor((timeLeft % (1000 * 60)) / 1000)
    ).padStart(2, "0");

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <NunitoText style={[styles.title, style]}>{hours}</NunitoText>
        </View>
        <NunitoText style={[styles.dot, style]}>:</NunitoText>
        <View style={styles.textContainer}>
          <NunitoText style={[styles.title, style]}>{minutes}</NunitoText>
        </View>
        <NunitoText style={[styles.dot, style]}>:</NunitoText>
        <View style={styles.textContainer}>
          <NunitoText style={[styles.title, style]}>{seconds}</NunitoText>
        </View>
      </View>
    );
  }
);

CountdownTimerBox.displayName = "CountdownTimerBox";

export { CountdownTimerBox };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
  },
  dot: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  textContainer: {
    borderRadius: 8,
    backgroundColor: Colors.gray,
    padding: 8,
  },
});
