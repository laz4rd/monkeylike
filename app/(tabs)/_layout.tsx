import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "",
        },
        tabBarLabelStyle: {
          fontWeight: "400",
          textTransform: "none",
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="stories" options={{ title: "Stories" }} />
      <Tabs.Screen name="writer" options={{ title: "Writer" }} />
    </Tabs>
  );
}
