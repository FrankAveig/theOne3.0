import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Constants from "expo-constants";
import icon from "./assets/icon.png";
import { Login } from "./src/auth/screens/LoginPage";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Login />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
