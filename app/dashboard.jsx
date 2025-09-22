import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebaseConfig"; // adjust path if needed

const auth = getAuth(app);

export default function Dashboard() {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  const isTablet = screenWidth >= 768; // tablet breakpoint

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert("Logged Out", "You have been logged out successfully.");
      router.replace("/"); // go back to index.jsx
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleMenuClick = (menu) => {
    setSidebarVisible(false);
    switch (menu) {
      case "home":
        router.push("/dashboard");
        break;
      case "games":
        router.push("/mygames");
        break;
      case "messages":
        router.push("/messages");
        break;
      case "notifications":
        router.push("/notifications");
        break;
      case "settings":
        router.push("/settings");
        break;
      case "progress":
        router.push("/progress");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Sidebar for tablet or burger menu for mobile */}
      {isTablet ? (
        <View style={styles.sidebar}>
          <Text style={styles.logo}>APEX MOTION</Text>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => handleMenuClick("home")}>
              <Text style={styles.menuItem}>🏠 Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuClick("games")}>
              <Text style={styles.menuItem}>🎮 My Games</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuClick("messages")}>
              <Text style={styles.menuItem}>💬 Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuClick("notifications")}>
              <Text style={styles.menuItem}>🔔 Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuClick("settings")}>
              <Text style={styles.menuItem}>⚙️ Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuClick("progress")}>
              <Text style={styles.menuItem}>📊 Progress</Text>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>🚪 Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.burgerMenu}
          onPress={() => setSidebarVisible(true)}
        >
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Sidebar Modal for mobile */}
      <Modal visible={sidebarVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.sidebar}>
            <TouchableOpacity
              style={styles.closeMenu}
              onPress={() => setSidebarVisible(false)}
            >
              <Ionicons name="close" size={26} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.logo}>🎮 3G GAMES</Text>
            <View style={styles.menu}>
              <TouchableOpacity onPress={() => handleMenuClick("home")}>
                <Text style={styles.menuItem}>🏠 Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMenuClick("games")}>
                <Text style={styles.menuItem}>🎮 My Games</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMenuClick("messages")}>
                <Text style={styles.menuItem}>💬 Messages</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMenuClick("notifications")}>
                <Text style={styles.menuItem}>🔔 Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMenuClick("settings")}>
                <Text style={styles.menuItem}>⚙️ Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMenuClick("progress")}>
                <Text style={styles.menuItem}>📊 Progress</Text>
              </TouchableOpacity>
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
              <Text style={styles.logoutText}>🚪 Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Top Banner */}
        <Image
          source={{
            uri: "https://4kwallpapers.com/images/walls/thumbs_3t/15242.jpg",
          }}
          style={styles.banner}
        />

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#aaa" />
          <TextInput placeholder="Search games..." style={styles.searchInput} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Featured Section */}
          <View style={styles.featured}>
            <Image
              source={{ uri: "https://i.pinimg.com/736x/57/1d/34/571d3462fabaebf5ead78884d8e5f1ff.jpg" }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredText}>
              <Text style={styles.featuredTitle}>FORTNITE</Text>
              <Text style={styles.featuredDesc}>
                The Fortnite crew is the ultimate subscription offer that
                includes the battle pass, 1000 monthly v-bucks, and an exclusive
                monthly crew pack.
              </Text>
              <TouchableOpacity style={styles.playBtn}>
                <Text style={styles.playText}>Play For Free</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Popular Games */}
          <Text style={styles.sectionTitle}>🔥 Most Popular Games</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { title: "Cyberpunk 2077", img: "https://i.pinimg.com/1200x/cf/9f/f1/cf9ff1504d6feadfbd10d974b3856251.jpg", rating: "8.3" },
    { title: "Need For Speed", img: "https://i.pinimg.com/736x/50/07/5c/50075c8411fc3abd34f1382fe1e4959d.jpg", rating: "9.1" },
    { title: "Spider-Man", img: "https://i.pinimg.com/736x/91/9c/c2/919cc277b258f557323c26f247e155f5.jpg", rating: "8.4" },
    { title: "Assassin’s Creed", img: "https://i.pinimg.com/736x/cd/a8/2e/cda82e7ccad4a19e72d85a979d2da6ca.jpg", rating: "9.0" },

            ].map((game, index) => (
              <View key={index} style={styles.card}>
                <Image source={{ uri: game.img }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{game.title}</Text>
                <Text style={styles.cardRating}>⭐ {game.rating}</Text>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </View>

      {/* Right Sidebar (only for tablets) */}
      {isTablet && (
        <View style={styles.rightBar}>
          <View style={styles.profile}>
            <Image
              source={{ uri: "https://lh3.googleusercontent.com/a/ACg8ocKKqcWmk7dAe5s6pJ57SKGhhX6peZppHL82ZRfPU6gEuhIIs8lb=s432-c-no" }}
              style={styles.avatar}
            />
            <Text style={styles.username}>Jack Nel</Text>
          </View>

          {/* Friends Online */}
          <Text style={styles.sectionTitle}>👥 Friends Online</Text>
          <View style={styles.friendsList}>
            {[
              {
                name: "Gian Villarmia",
                img: "https://i.ibb.co/8N6X9Yt/avatar1.png",
                online: true,
              },
              {
                name: "John Kenneth",
                img: "https://i.ibb.co/2d8QWkC/avatar2.png",
                online: true,
              },
              {
                name: "Lauren",
                img: "https://i.ibb.co/vv1sh5F/avatar3.png",
                online: false,
              },
            ].map((f, i) => (
              <View key={i} style={styles.friendCard}>
                <View>
                  <Image source={{ uri: f.img }} style={styles.friendAvatar} />
                  <View
                    style={[
                      styles.statusDot,
                      { backgroundColor: f.online ? "#4caf50" : "#f44336" },
                    ]}
                  />
                </View>
                <Text style={styles.friendName}>{f.name}</Text>
              </View>
            ))}
          </View>

          {/* Achievements */}
          <Text style={styles.sectionTitle}>🏆 Achievements</Text>
          <View style={styles.achievements}>
            <View style={styles.achievementCard}>
              <Ionicons name="trophy-outline" size={22} color="#ffca28" />
              <Text style={styles.achievementText}>50 Matches Won</Text>
            </View>
            <View style={styles.achievementCard}>
              <Ionicons name="diamond-outline" size={22} color="#00bcd4" />
              <Text style={styles.achievementText}>Rank: Diamond</Text>
            </View>
            <View style={styles.achievementCard}>
              <Ionicons name="star-outline" size={22} color="#ff9800" />
              <Text style={styles.achievementText}>MVP 10 Times</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", backgroundColor: "#111" },
  sidebar: { width: 200, backgroundColor: "#1c1c1e", padding: 15 },
  logo: { fontSize: 18, color: "#fff", marginBottom: 20, fontWeight: "bold" },
  menu: { marginTop: 20 },
  menuItem: { color: "#aaa", marginVertical: 15, fontSize: 14 },
  logoutBtn: {
    marginTop: 30,
    backgroundColor: "#e91e63",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: { color: "#fff", fontWeight: "bold", fontSize: 14 },

  burgerMenu: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1000,
  },
  modalOverlay: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  closeMenu: { alignSelf: "flex-end", marginBottom: 20 },

  mainContent: { flex: 1, backgroundColor: "#181818", padding: 20 },
  banner: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 20,
  },
  searchInput: { marginLeft: 10, color: "#fff", flex: 1 },
  featured: {
    flexDirection: "row",
    backgroundColor: "#2c2c2e",
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
  },
  featuredImage: { width: 100, height: 100, borderRadius: 10 },
  featuredText: { flex: 1, marginLeft: 15 },
  featuredTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  featuredDesc: { color: "#aaa", fontSize: 12, marginVertical: 5 },
  playBtn: {
    backgroundColor: "#e91e63",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  playText: { color: "#fff", fontWeight: "bold" },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#2c2c2e",
    borderRadius: 10,
    marginRight: 15,
    padding: 10,
    width: 140,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  cardRating: { color: "#aaa", fontSize: 12, marginTop: 5 },

  rightBar: { width: 220, backgroundColor: "#1c1c1e", padding: 15 },
  profile: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 60, height: 60, borderRadius: 30, marginBottom: 5 },
  username: { color: "#fff", fontSize: 16, fontWeight: "600" },

  friendsList: { marginVertical: 8 },
  friendCard: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  friendAvatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: "absolute",
    bottom: 2,
    right: 6,
    borderWidth: 2,
    borderColor: "#151618",
  },
  friendName: { color: "#fff", fontSize: 13, fontWeight: "600" },

  achievements: { marginTop: 10 },
  achievementCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1f23",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  achievementText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 13,
    fontWeight: "500",
  },
});
