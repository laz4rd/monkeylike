import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useTheme } from './../context/ThemeContext'; // adjust path if needed

export default function TabLayout() {
  const { theme, colors } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.icon, // dynamic color from theme
        tabBarInactiveTintColor: isDark ? '#888' : '#aaa', // subtle inactive color
        tabBarStyle: {
          backgroundColor: colors.background, // use theme background
          borderTopWidth: 1,
          borderTopColor: isDark ? '#333' : '#ddd',
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
