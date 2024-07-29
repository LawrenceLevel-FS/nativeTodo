import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//importing pages
import { SignIn } from "./app/pages/SignIn";
import { Todos } from "./app/pages/Todos";
import { AuthProvider } from "./app/components/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  // signin checker
  useEffect(() => {
    const user = false;
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Todos" component={Todos} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}
