// app/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  const navigateToMovieApp = () => {
    // Navigates to the movie app (which is now at /movie)
    router.push('/movie');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FilmMatchApp!</Text>
      <Button title="Start Movie App" onPress={navigateToMovieApp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
