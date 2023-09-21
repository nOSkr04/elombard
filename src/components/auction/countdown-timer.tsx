import React, { useState, useEffect, memo } from "react";
import { StyleSheet } from "react-native";
import { NunitoText } from "../../widgets/styled-text";
import { TextStyle } from "react-native";

const CountdownTimer = memo(
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
      <NunitoText style={[styles.title, style]}>
        {hours}:{minutes}:{seconds}с
      </NunitoText>
    );
  }
);

CountdownTimer.displayName = "CountdownTimer";

export { CountdownTimer };

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
  },
});
