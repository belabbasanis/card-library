import React from 'react';
import { View, Text, Image } from 'react-native';
import AudioPlayer from '../components/AudioPlayer';
import type { Memory } from '../data/mockData';

type Props = {
  memory: Memory;
};

export default function MemoryDetailScreen({ memory }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>{memory.title}</Text>
      <Text>{memory.text}</Text>
      {memory.photo && (
        <Image source={{ uri: memory.photo }} style={{ width: 200, height: 200 }} />
      )}
      {memory.audio && <AudioPlayer uri={memory.audio} />}
    </View>
  );
}
