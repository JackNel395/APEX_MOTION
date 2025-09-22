import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/bb1.jpg")} // ⚡ change to your preferred bg
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        
        <Text style={styles.title}>Welcome to APEX MOTION</Text>
        <Text style={styles.subtitle}>
          Track your progress, level up your skills, and push your gaming journey to the next level.
        </Text>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.primaryText}>Create an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.secondaryText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",   // ensures full screen width
    height: "100%",  // ensures full screen height
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)", // dark overlay for readability
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  primaryText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    alignItems: "center",
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
