// app/(tabs)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      {/* The names below map to the files in this folder (e.g., index.tsx, explore.tsx) */}
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }} 
      />
      <Tabs.Screen
        name="explore"
        options={{ title: 'Explore' }}
      />
      <Tabs.Screen
        name="matches"
        options={{ title: 'Matches' }}
      />
    </Tabs>
  );
}
