import { View, Text } from "react-native";
export function TodoItem({ todos }) {
  return (
    <View>
      <Text
        style={{ fontSize: 20, textDecoration: "underline", marginTop: 20 }}
      >
        {todos.title}
      </Text>
      <Text>{todos.content}</Text>
    </View>
  );
}
