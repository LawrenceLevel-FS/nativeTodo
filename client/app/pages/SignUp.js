import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

export function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const response = await fetch("http://localhost:3001/api/v1/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      navigation.navigate("Sign In");
    } else {
      Alert.alert("Sign up failed");
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleSignUp} />
    </View>
  );
}
