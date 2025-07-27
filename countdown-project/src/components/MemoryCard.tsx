import React from 'react';
import { View, Text, Image } from 'react-native';
import AudioPlayer from './AudioPlayer';
import type { Memory } from '../data/mockData';

type Props = {
  memory: Memory;
};

export default function MemoryCard({ memory }: Props) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text>{memory.title}</Text>
      <Text>{memory.text}</Text>
      {memory.photo && (
        <Image source={{ uri: memory.photo }} style={{ width: 200, height: 200 }} />
      )}
      {memory.audio && <AudioPlayer uri={memory.audio} />}
    </View>
  );
}
