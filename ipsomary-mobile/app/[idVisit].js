import { Pressable, Text, View } from "react-native"; // Importa desde react-native
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { idVisit } = useLocalSearchParams();

  return (
    <View>
      <Text>Detail</Text>
      <Pressable>
        <Text>lorem ipsum</Text>
      </Pressable>
    </View>
  );
}
