import React from 'react';
import { Image, ImageStyle } from 'react-native';

type Props = {
  uri: string;
  style?: ImageStyle;
};

export default function FlowerIcon({ uri, style }: Props) {
  return <Image source={{ uri }} style={style} />;
}
