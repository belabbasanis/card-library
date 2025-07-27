import React from 'react';
import AudioPlayer from './AudioPlayer';

const MemoryCard = ({ memory }) => (
  <div className="memory-card">
    <h3>{memory.title}</h3>
    <p>{memory.text}</p>
    {memory.photo && <img src={memory.photo} alt="" />}
    {memory.audio && <AudioPlayer src={memory.audio} />}
  </div>
);

export default MemoryCard;
