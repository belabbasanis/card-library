import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MemoryCard from '../components/MemoryCard';
import mockData from '../data/mockData';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text>Memory Garden</Text>
      {mockData.map(memory => (
        <MemoryCard key={memory.id} memory={memory} />
      ))}
    </ScrollView>
  );
}
