import { Text, View, TextInput, Button, Alert } from "react-native";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";

export function SignIn({ navigation, route }) {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleSignIn = () => {
    navigation.navigate("Sign In");
  };
  const handleSignUp = () => {
    navigation.navigate("Sign Up");
  };

  return (
    <View>
      <Text>sign in</Text>
      <TextInput name="email" placeholder="email" />
      <TextInput name="password" placeholder="password" />
      <Button onPress={handleSignIn} title="Sign in " />
      <Button onPress={handleSignUp} title="Sign Up " />
    </View>
  );
}
