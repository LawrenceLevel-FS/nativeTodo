import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import SignIn from "./app/pages/SignIn";

export default function App() {
  return (
    <SafeAreaView>
      <SignIn />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
