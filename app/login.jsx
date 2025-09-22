import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig"; // make sure firebaseConfig.js is set up

const auth = getAuth(app);

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Auto redirect if logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/dashboard"); // skip login if already logged in
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Login successful! 🚀");
      router.push("/dashboard"); // go to dashboard
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Left Section with Image */}
      <View style={styles.leftSection}>
        <Image
          source={require("../assets/images/bb4.jpeg")} // replace with your image
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Right Section with Form */}
      <View style={styles.rightSection}>
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.subtitle}>
          Don’t have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/signup")}
          >
            Create an Account
          </Text>
        </Text>

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginText}>
            {loading ? "Logging in..." : "Log in"}
          </Text>
        </TouchableOpacity>

        {/* Terms */}
        <Text style={styles.terms}>
          I agree to the <Text style={styles.link}>Terms & Conditions</Text>
        </Text>

        {/* Divider */}
        <Text style={styles.divider}>or</Text>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialBtn1}>
            <Text>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={{ color: "white" }}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  leftSection: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rightSection: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#0F172A",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "white",
  },
  link: {
    color: "#007BFF",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#1E293B",
    borderRadius: 10,
    color: "white",
    padding: 12,
    marginBottom: 15,
  },
  forgot: {
    color: "#007BFF",
    textAlign: "right",
    marginBottom: 20,
  },
  loginBtn: {
    backgroundColor: "#E50914",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  terms: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  divider: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 14,
    color: "#888",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialBtn1: {
    borderWidth: 1,
    borderColor: "#DADCE0",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  socialBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#1877F2",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
});
