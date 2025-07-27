import React from 'react';
import AudioPlayer from '../components/AudioPlayer';

const MemoryDetailScreen = ({ memory }) => (
  <div className="memory-detail">
    <h2>{memory.title}</h2>
    <p>{memory.text}</p>
    {memory.photo && <img src={memory.photo} alt="" />}
    {memory.audio && <AudioPlayer src={memory.audio} />}
  </div>
);

export default MemoryDetailScreen;
