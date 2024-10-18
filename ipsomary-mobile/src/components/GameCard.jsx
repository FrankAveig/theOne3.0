import { View, StyleSheet, Text, Image } from "react-native";

export function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.releaseDate}>{game.releaseDate}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
  },
  score: {
    fontSize: 18,
  },
  releaseDate: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
});
