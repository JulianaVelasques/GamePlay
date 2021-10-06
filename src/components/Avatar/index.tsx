import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

//Como irei usar a imagem em vários lugares do meu app, irei criar uma tipagem
//Eu disse que para usar esse componente, tem que dizer uma urlImage
type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
