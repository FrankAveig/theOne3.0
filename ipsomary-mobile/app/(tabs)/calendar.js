import { ScrollView, Text, StyleSheet } from "react-native";
import { ScreenLayout } from "../../src/auth/components/ScreenLayout";

export default function Calendar() {
  return (
    <ScreenLayout>
      <ScrollView>
        <Text>Calendario</Text>
        <Text>lorem ipsum</Text>
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#309c18",
    padding: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
});
