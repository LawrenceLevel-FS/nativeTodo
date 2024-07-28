import { Text, View, TextInput, Button } from "react-native";

export function SignIn({ navigation }) {
  return (
    <View>
      <Text>sign in</Text>
      <TextInput name="email" placeholder="email" />
      <TextInput name="password" placeholder="password" />
      <Button onPress={() => navigation.navigate("Todos")} title="Todo Page" />
    </View>
  );
}
