import { ScrollView, Text, StyleSheet } from "react-native";
import { ScreenLayout } from "../../src/components/ScreenLayout";

export default function List() {
  return (
    <ScreenLayout>
      <ScrollView>
        <Text>Lista</Text>
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
