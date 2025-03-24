// app/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Stack } from 'expo-router'; // optional if you want a stack header
import axios from 'axios';
import Swiper from 'react-native-deck-swiper';

// Import from our env file
import { TMDB_API_KEY, TMDB_API_BASE_URL } from '@env';

type Movie = {
  id: number;
  title: string;
  poster_path?: string;
};

export default function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [swipedAll, setSwipedAll] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      // Console logs to verify the env variables
      console.log('TMDB_API_KEY =', TMDB_API_KEY);
      console.log('TMDB_API_BASE_URL =', TMDB_API_BASE_URL);

      // Construct the URL
      const url = `${TMDB_API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
      console.log('Fetching from:', url);

      const response = await axios.get(url);
      const results = response.data.results;

      // Transform the raw data
      const mapped: Movie[] = results.map((item: any) => ({
        id: item.id,
        title: item.title,
        poster_path: item.poster_path,
      }));

      setMovies(mapped);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching movies:', error);
      setLoading(false);
    }
  };

  const onSwipedAllCards = () => {
    setSwipedAll(true);
  };

  const onSwipedRight = (cardIndex: number) => {
    console.log('Liked:', movies[cardIndex]?.title);
  };

  const onSwipedLeft = (cardIndex: number) => {
    console.log('Disliked:', movies[cardIndex]?.title);
  };

  // If still loading data
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading popular movies...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Optional stack header if you want to show a top bar */}
      <Stack.Screen options={{ title: 'Popular Movies' }} />

      <Text style={styles.header}>Swipe Movies</Text>

      <Swiper
        cards={movies}
        renderCard={(card) => {
          if (!card) return <View />;
          return (
            <View style={styles.card}>
              <Text style={styles.title}>{card.title}</Text>
              {card.poster_path && (
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${card.poster_path}` }}
                  style={styles.poster}
                />
              )}
            </View>
          );
        }}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        onSwipedAll={onSwipedAllCards}
        stackSize={3}
        backgroundColor={'transparent'}
      />

      {swipedAll && (
        <Text>You have swiped all movies!</Text>
      )}

      <Text style={styles.attribution}>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  card: {
    width: 300,
    height: 450,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 22,
    margin: 10,
    textAlign: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
  },
  attribution: {
    marginTop: 20,
    fontSize: 10,
    textAlign: 'center',
    width: '80%',
  },
});
