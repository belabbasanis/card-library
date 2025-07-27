import React from 'react';
import { Button } from 'react-native';
import { Audio } from 'expo-av';

type Props = {
  uri: string;
};

export default function AudioPlayer({ uri }: Props) {
  const handlePlay = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync();
  };

  return <Button title="Play" onPress={handlePlay} />;
}
