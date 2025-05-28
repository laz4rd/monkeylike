import { FontAwesome } from "@expo/vector-icons";
import Timer from "../../components/timer"; // adjust path if needed

import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import profilePic from "../../assets/images/X4.png";
import { useTheme } from "./../context/ThemeContext";

export default function Dashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const apps = [
    { name: "Notes", iconName: "sticky-note", url: "https://www.evernote.com" },
    { name: "Tasks", iconName: "check-square", url: "https://todoist.com" },
    { name: "Clock", iconName: "clock-o", url: "https://time.is" },
    { name: "Files", iconName: "file", url: "https://drive.google.com" },
    { name: "Music", iconName: "music", url: "https://music.youtube.com" },
    { name: "Calendar", iconName: "calendar", url: "https://calendar.google.com" },
  ];

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(`Don't know how to open this URL: ${url}`);
    }
  };
  return (
    <View style={[styles.container, {backgroundColor: isDark? "#000" : "#fff"}]}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#fefefe" }]}>
          <Text style={[styles.heading, { color: isDark ? "#fff" : "#111" }]}>Welcome Back</Text>
          <Text style={[styles.date, { color: isDark ? "#ccc" : "#555" }]}>{formattedDate}</Text>
        </View>

        <Image source={profilePic} style={styles.profile} />
      </View>

      {/* App Grid */}
      <View style={styles.grid}>
        {apps.map((app, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconBox}
            onPress={() => openLink(app.url)}
          >
            <View style={styles.squircle}>
              <FontAwesome name={app.iconName as any} size={28} color="#333" />
            </View>
            <Text style={styles.iconLabel}>{app.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginTop: 40 }}>
  <Timer />
</View>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },
  date: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 40,
  },
  iconBox: {
    width: "30%",
    marginBottom: 30,
    alignItems: "center",
  },
  squircle: {
    width: 70,
    height: 70,
    backgroundColor: "#eee",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  iconLabel: {
    fontSize: 14,
    color: "#222",
    fontWeight: "500",
  },
});
