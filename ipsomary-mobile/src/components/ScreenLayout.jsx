import { View, StyleSheet } from "react-native";

export function ScreenLayout({ children }) {
  return <View style={styles.container}>{children}</View>;
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 20,
    justifyContent: "center",
  },
});
