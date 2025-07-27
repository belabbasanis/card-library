export const saveMemory = async memory => {
  const data = JSON.parse(localStorage.getItem('memories') || '[]');
  data.push(memory);
  localStorage.setItem('memories', JSON.stringify(data));
};

export const loadMemories = () => {
  const data = localStorage.getItem('memories');
  return data ? JSON.parse(data) : [];
};
