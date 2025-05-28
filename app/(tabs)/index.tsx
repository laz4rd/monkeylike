import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const handlePress = () => {
    Haptics.selectionAsync(); // Trigger haptic feedback
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, Brijraj</Text>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    position: "absolute",
    top: 60,
    right: 20,
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#222",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
