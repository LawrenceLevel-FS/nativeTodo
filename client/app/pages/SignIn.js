import { Text, View, TextInput, Button, Alert } from "react-native";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";

export function SignIn({ navigation, route }) {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  setCurrentUser(false);
  const handleSignIn = () => {
    if (currentUser) {
      navigation.navigate("Todos");
      console.log(currentUser);
    } else {
      Alert.alert("Please sign in");
    }
  };
  return (
    <View>
      <Text>sign in</Text>
      <TextInput name="email" placeholder="email" />
      <TextInput name="password" placeholder="password" />
      <Button onPress={handleSignIn} title="Sign in " />
    </View>
  );
}
