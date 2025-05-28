import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF", // iOS blue active tint
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "#ddd",
          // optionally add blur effect if you want
          // backdropFilter: "blur(10px)", // may not work in all RN versions
        },
        tabBarLabelStyle: {
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"  // corresponds to app/(tabs)/index.tsx (Home)
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="stories" // corresponds to app/(tabs)/stories.tsx
        options={{ title: "Stories" }}
      />
      <Tabs.Screen
        name="writer" // corresponds to app/(tabs)/writer.tsx
        options={{ title: "Writer" }}
      />
    </Tabs>
  );
}
