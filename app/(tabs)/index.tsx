// app/(tabs)/index.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { allMovies } from '../../constants/data';

export function HomeScreen() {
  const [cards, setCards] = useState(allMovies);
  const [swipedAll, setSwipedAll] = useState(false);

  const onSwipedAllCards = () => {
    setSwipedAll(true);
  };

  const onSwipedRight = (cardIndex: number) => {
    console.log('Liked: ', cards[cardIndex].title);
    // Save logic if needed (e.g., to a backend or local storage)
  };

  const onSwipedLeft = (cardIndex: number) => {
    console.log('Disliked: ', cards[cardIndex].title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home (Swipe Screen)</Text>
      <Swiper
        cards={cards}
        renderCard={(card) => {
          if (!card) return <View />;
          return (
            <View style={styles.card}>
              <Text style={styles.title}>{card.title}</Text>
            </View>
          );
        }}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        onSwipedAll={onSwipedAllCards}
        stackSize={3}
        backgroundColor="transparent"
      />
      {swipedAll && <Text>You have swiped all movies!</Text>}
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
});
