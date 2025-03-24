import React from 'react';
import { View, Text } from 'react-native';

export default function MatchesScreen() {
  // e.g., from React context or Redux:
  // const { likedMovies } = useGlobalState();

  return (
    <View>
      <Text>Matches Screen</Text>
      {/* List all liked or matched movies here */}
      {/* e.g., likedMovies.map(...) */}
    </View>
  );
}
