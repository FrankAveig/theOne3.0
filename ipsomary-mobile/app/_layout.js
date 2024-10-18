import { Slot, Stack, useRouter } from "expo-router"; // Asegúrate de importar useRouter
import { View, StyleSheet, StatusBar, Pressable, Image } from "react-native";
import { deleteItemAsync } from "expo-secure-store"; // Importar solo deleteItemAsync

import logo from "../assets/images/logos/logotipo.png"; // Asegúrate de que la ruta del logo es correcta
import LogoutIcon from "../assets/images/icons/logout.svg"; // Asegúrate de que la ruta del icono de logout es correcta
export default function Layout() {
  const router = useRouter(); // Define router para poder usar router.push

  const handleLogout = async () => {
    try {
      // Borrar el token de SecureStore
      await deleteItemAsync("authToken");
      // Redirigir al usuario a la página de login después de cerrar sesión
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#f1f1f1",
            height: 100,
          },
          headerLeft: () => (
            <Pressable
              style={{ paddingTop: 10, paddingBottom: 10 }}
              onPress={() => router.push("/")}
            >
              <Image
                source={logo}
                style={{ width: 100, height: 50 }}
                resizeMode="contain"
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={{ paddingTop: 10, paddingBottom: 10, paddingRight: 20 }}
              onPress={handleLogout}
            >
              <LogoutIcon width={20} height={20} />
            </Pressable>
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
