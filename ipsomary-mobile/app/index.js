import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { getItemAsync } from "expo-secure-store";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await getItemAsync("authToken");

      if (token) {
        router.push("/calendar");
      } else {
        router.push("/login");
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return null;
}
