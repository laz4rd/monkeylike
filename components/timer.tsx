import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useTheme } from "../app/context/ThemeContext";

const PRESETS = [1, 5, 10, 30]; // in minutes
const RADIUS = 80;
const STROKE = 10;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Timer() {
  const [duration, setDuration] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const { colors } = useTheme();

  useEffect(() => {
    if (remaining <= 0 && interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  }, [remaining]);

  const startTimer = (minutes: number) => {
    const timeInSeconds = minutes * 60;
    setDuration(timeInSeconds);
    setRemaining(timeInSeconds);

    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1 && interval.current) {
          clearInterval(interval.current);
          interval.current = null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const progress = duration ? (remaining / duration) * CIRCUMFERENCE : 0;

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.circle }]}>
      <Svg width={200} height={200}>
        <Circle
          stroke={colors.circle}
          cx="100"
          cy="100"
          r={RADIUS}
          strokeWidth={STROKE}
          fill={colors.circle}
        />
        <Circle
          stroke={colors.text}
          cx="100"
          cy="100"
          r={RADIUS}
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE - progress}
          strokeLinecap="round"
          rotation="-90"
          origin="100,100"
          fill={colors.circle}
        />
      </Svg>
      <Text style={[styles.time, { color: colors.text }]}>{formatTime(remaining)}</Text>

      <View style={styles.buttons}>
        {PRESETS.map((min) => (
          <TouchableOpacity
            key={min}
            style={[styles.button, { backgroundColor: colors.squircle }]}
            onPress={() => startTimer(min)}
          >
            <Text style={[styles.buttonText, { color: colors.icon }]}>{min} min</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    borderRadius: 0,
     // nice round container
  },
  time: {
    position: "absolute",
    top: 90,
    fontSize: 28,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
    margin: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
