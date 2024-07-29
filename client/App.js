import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//importing pages
import { SignIn } from "./app/pages/SignIn";
import { SignUp } from "./app/pages/SignUp";
import { Todos } from "./app/pages/Todos";
import { AuthProvider } from "./app/components/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Todos" component={Todos} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}
