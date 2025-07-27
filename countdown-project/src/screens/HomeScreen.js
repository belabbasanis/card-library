import React from 'react';
import MemoryCard from '../components/MemoryCard';
import mockData from '../data/mockData';

const HomeScreen = () => (
  <div className="home-screen">
    {mockData.map(memory => (
      <MemoryCard key={memory.id} memory={memory} />
    ))}
  </div>
);

export default HomeScreen;
