import { Audio } from 'expo-av';

export const recordAudio = () => {
  console.warn('Audio recording not implemented.');
};

export const playAudio = async (uri: string) => {
  const { sound } = await Audio.Sound.createAsync({ uri });
  await sound.playAsync();
};
