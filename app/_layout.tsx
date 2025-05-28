import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi Brijraj</Text>
      </View>
      <Slot />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: "white",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
});
