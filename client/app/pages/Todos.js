import { Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { TodoItem } from "../components/TodoItem";

export function Todos() {
  const [todos, setTodos] = useState([]);

  // Show all Todos
  const showTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/todos");
      const data = await response.json();
      await setTodos(data.todos);
      console.log(todos);
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    showTodos();
  }, []);

  const renderItem = ({ item }) => {
    return <TodoItem todos={item} />;
  };
  return (
    <View>
      <Text>Todos page</Text>
      <View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
}
