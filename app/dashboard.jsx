import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.logo}>🎮 3G GAMES</Text>
        <View style={styles.menu}>
          <Text style={styles.menuItem}>🏠 Home</Text>
          <Text style={styles.menuItem}>🎮 My Games</Text>
          <Text style={styles.menuItem}>💬 Messages</Text>
          <Text style={styles.menuItem}>🔔 Notifications</Text>
          <Text style={styles.menuItem}>⚙️ Settings</Text>
          <Text style={styles.menuItem}>📊 Progress</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#aaa" />
          <TextInput placeholder="Search games..." style={styles.searchInput} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Fortnite Section */}
          <View style={styles.featured}>
            <Image
              source={{ uri: "https://i.ibb.co/wC2Rf0r/fortnite.png" }}
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
          <Text style={styles.sectionTitle}>Most Popular Games</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              {
                title: "Cyberpunk 2077",
                img: "https://i.ibb.co/dJ0T6hG/cyberpunk.jpg",
                rating: "8.3",
              },
              {
                title: "Need For Speed",
                img: "https://i.ibb.co/j5kmP7L/nfs.jpg",
                rating: "9.1",
              },
              {
                title: "Spider-Man",
                img: "https://i.ibb.co/tPwcTfg/spiderman.jpg",
                rating: "8.4",
              },
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

      {/* Right Sidebar */}
      <View style={styles.rightBar}>
        <View style={styles.profile}>
          <Image
            source={{ uri: "https://i.ibb.co/7QpKsCX/profile.png" }}
            style={styles.avatar}
          />
          <Text style={styles.username}>Ahmadreza</Text>
        </View>

        <Text style={styles.sectionTitle}>Friends List</Text>
        <View>
          <Text style={styles.friend}>🟢 Jason Doe</Text>
          <Text style={styles.friend}>🟢 Eleanor Hunt</Text>
          <Text style={styles.friend}>🔴 Jane Doe</Text>
        </View>

        <Text style={styles.sectionTitle}>Statistics</Text>
        <Text style={styles.stats}>Daily Tasks: 68%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#111",
  },
  sidebar: {
    width: 80,
    backgroundColor: "#1c1c1e",
    padding: 15,
  },
  logo: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 30,
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    color: "#aaa",
    marginVertical: 15,
    fontSize: 12,
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    color: "#fff",
    flex: 1,
  },
  featured: {
    flexDirection: "row",
    backgroundColor: "#2c2c2e",
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
  },
  featuredImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  featuredText: {
    flex: 1,
    marginLeft: 15,
  },
  featuredTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  featuredDesc: {
    color: "#aaa",
    fontSize: 12,
    marginVertical: 5,
  },
  playBtn: {
    backgroundColor: "#e91e63",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  playText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
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
  cardTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  cardRating: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 5,
  },
  rightBar: {
    width: 120,
    backgroundColor: "#1c1c1e",
    padding: 15,
  },
  profile: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  username: {
    color: "#fff",
    fontSize: 14,
  },
  friend: {
    color: "#aaa",
    marginBottom: 10,
  },
  stats: {
    color: "#aaa",
    marginTop: 10,
  },
});
