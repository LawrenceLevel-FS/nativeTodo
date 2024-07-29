import { useEffect, useState } from "react";
import { Text, View, FlatList, Button } from "react-native";
import { AuthContext } from "../components/AuthContext";
import { TodoItem } from "../components/TodoItem";

export function Todos({ navigation }) {
  const { currentUser, logout } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  // Show all Todos
  const showTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/todos", {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
      const data = await response.json();
      setTodos(data.todos);
      console.log(data.todos);
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigation.navigate("SignIn");
    } else {
      showTodos();
    }
  }, [currentUser]);

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
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
