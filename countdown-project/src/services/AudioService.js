export const recordAudio = () => {
  console.warn('Audio recording not implemented.');
};

export const playAudio = src => {
  const audio = new Audio(src);
  audio.play();
};
