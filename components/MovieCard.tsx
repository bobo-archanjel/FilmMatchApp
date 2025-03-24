// components/MovieCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../constants/data';

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <View style={styles.card}>
      {/* If there's a poster property, we could display it */}
      {/* <Image source={{ uri: movie.poster }} style={styles.image} /> */}
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 400,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
  },
  image: {
    width: 300,
    height: 300,
  },
});
