export interface Memory {
  id: number;
  title: string;
  text: string;
  photo: string | null;
  audio: string | null;
}

const mockData: Memory[] = [
  {
    id: 1,
    title: 'First memory',
    text: 'This is a sample memory.',
    photo: null,
    audio: null,
  },
];

export default mockData;
