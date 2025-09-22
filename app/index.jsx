import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  const isMobile = screenWidth < 768; // responsive breakpoint

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <ImageBackground
        source={require("../assets/images/bb7.jpg")}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        {/* Navbar */}
        <View style={styles.navbar}>
          {/* Logo */}
          <Text style={styles.logo}>
            <Text style={styles.logoHighlight}>APEX</Text> MOTION
          </Text>

          {/* Show hamburger menu on mobile */}
          {isMobile ? (
            <TouchableOpacity
              style={styles.burgerMenu}
              onPress={() => setMenuOpen(!menuOpen)}
            >
              <Text style={{ color: "#fff", fontSize: 22 }}>☰</Text>
            </TouchableOpacity>
          ) : (
            // Desktop navigation
            <View style={styles.navLinks}>
              <Text style={styles.navItem}>Our Games</Text>
              <Text style={styles.navItem}>Blog</Text>
              <Text style={styles.navItem}>About Us</Text>
              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => router.push("/login")}
              >
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Collapsible Menu (only visible on mobile when open) */}
        {isMobile && menuOpen && (
          <View style={styles.mobileNav}>
            <Text style={styles.navItem}>Our Games</Text>
            <Text style={styles.navItem}>Blog</Text>
            <Text style={styles.navItem}>About Us</Text>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => router.push("/login")}
            >
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Hero Content */}
        <View style={styles.heroContent}>
          <Text style={styles.saleText}>BLACK FRIDAY SALE LIVE</Text>
          <Text style={styles.heroTitle}>EXPERIENCE{"\n"}REAL GAMING!</Text>
          <TouchableOpacity style={styles.exploreBtn}>
            <Text style={styles.exploreText}>Explore →</Text>
          </TouchableOpacity>

          {/* Stats */}
          <View
            style={[
              styles.statsRow,
              isMobile && { flexDirection: "column", gap: 20 },
            ]}
          >
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>3.5M</Text>
              <Text style={styles.statLabel}>Downloads</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>45+</Text>
              <Text style={styles.statLabel}>Games</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>75K+</Text>
              <Text style={styles.statLabel}>Members</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Game Cards Section */}
      <View style={styles.gamesSection}>
        <View
          style={[
            styles.gamesRow,
            isMobile && { flexDirection: "column" }, // stack on mobile
          ]}
        >
          <View style={styles.gameCard}>
            <Image
              source={require("../assets/images/spiderman.jpg")}
              style={styles.gameImage}
            />
            <Text style={styles.tag}>ON SALE</Text>
          </View>

          <View style={styles.gameCard}>
            <Image
              source={require("../assets/images/nfs.jpg")}
              style={styles.gameImage}
            />
          </View>

          <View style={styles.gameCard}>
            <Image
              source={require("../assets/images/far.jpg")}
              style={styles.gameImage}
            />
            <Text style={styles.tagRed}>FREE TRIAL</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
  hero: {
    width: "100%",
    height: 600,
    justifyContent: "flex-start",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#141212ca",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  logoHighlight: {
    color: "#4AD84A",
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  navItem: {
    color: "#fff",
    marginVertical: 10,
    fontSize: 16,
  },
  burgerMenu: {
    padding: 8,
  },
  mobileNav: {
    backgroundColor: "#111",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  signInButton: {
    backgroundColor: "#9CFF00",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  signInText: {
    fontWeight: "600",
    color: "#000",
  },
  heroContent: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  saleText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  heroTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  exploreBtn: {
    backgroundColor: "#9CFF00",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  exploreText: {
    fontWeight: "600",
    color: "#000",
    fontSize: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 90,
    marginTop: 20,
  },
  statBox: {
    alignItems: "flex-start",
  },
  statNumber: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#aaa",
    fontSize: 12,
  },
  gamesSection: {
    padding: 20,
    marginTop: -50,
  },
  gamesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gameCard: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 15,
    position: "relative",
  },
  gameImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
  tag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "red",
    color: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 12,
  },
  tagRed: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#A30000",
    color: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 12,
  },
});
