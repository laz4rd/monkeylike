import { Image, StyleSheet, Text, View } from "react-native";
import profilePic from "../../assets/images/X4.png";

export default function Dashboard() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <View style={styles.container}>
      {/* Top row with text on left and profile on right */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.heading}>Welcome Back</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>

        <Image
          source={profilePic} style={styles.profile} // placeholder profile pic
        />
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
    borderRadius: 500,
  },
});
