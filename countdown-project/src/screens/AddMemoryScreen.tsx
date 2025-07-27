import React from 'react';
import { View } from 'react-native';
import AddMemoryModal from '../components/AddMemoryModal';

export default function AddMemoryScreen() {
  return (
    <View style={{ flex: 1 }}>
      <AddMemoryModal />
    </View>
  );
}
