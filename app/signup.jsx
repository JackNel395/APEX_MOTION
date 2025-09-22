import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"; // ⬅ added signOut
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save extra info in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });

      Alert.alert("Success", "Account Successfully created ✅");

      // ✅ Sign them out so they must log in again
      await signOut(auth);

      // Go to login page
      router.replace("/login");
    } catch (error) {
      Alert.alert("Signup Error", error.message);
    }
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Left Image Section */}
        <View style={styles.leftSection}>
          <ImageBackground
            source={require("../assets/images/bb2.jpeg")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Right Form Section */}
        <View style={styles.rightSection}>
          <Text style={styles.header}>Create an Account</Text>
          <Text style={styles.subText}>
            Already have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => router.push("/login")}
            >
              Log in
            </Text>
          </Text>

          {/* Input Fields */}
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 5 }]}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={[styles.input, { flex: 1, marginLeft: 5 }]}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Signup Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignup}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Create Account</Text>
            )}
          </TouchableOpacity>

          {/* Terms */}
          <Text style={styles.terms}>
            I agree to the <Text style={styles.link}>Terms & Conditions</Text>
          </Text>

          {/* Social Buttons */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton1}>
              <Text>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffffffff",
  },
  subText: {
    marginBottom: 20,
    color: "#ffffffff",
  },
  link: {
    color: "#007BFF",
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#A30000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  terms: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 12,
    color: "#ffffffff",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "#1877F2",
    backgroundColor: "#1877F2",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  socialButton1: {
    borderWidth: 1,
    borderColor: "#373737ff",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
});
