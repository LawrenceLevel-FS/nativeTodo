import { Text, View, TextInput } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>sign in</Text>
      <TextInput name="email" placeholder="email" />
      <TextInput name="password" placeholder="password" />
    </View>
  );
};

export default SignIn;
