import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Memory } from '../data/mockData';

export const saveMemory = async (memory: Memory) => {
  const data = await loadMemories();
  data.push(memory);
  await AsyncStorage.setItem('memories', JSON.stringify(data));
};

export const loadMemories = async (): Promise<Memory[]> => {
  const raw = await AsyncStorage.getItem('memories');
  return raw ? JSON.parse(raw) : [];
};
