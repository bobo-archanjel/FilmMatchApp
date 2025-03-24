// app/+not-found.tsx
import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <Text>This screen doesn’t exist.</Text>
      <Link href="/" style={{ marginTop: 20 }}>
        Go to home screen!
      </Link>
    </View>
  );
}
