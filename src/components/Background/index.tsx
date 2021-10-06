import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

//envolver todas as interfaces com o gradiente
//Para criei uma tipagem
type Props = {
  children: ReactNode; //Nosso children é um elementro filho do react
};
//Com isso posso aproveitar o gradiente em todas as interfaces.
//Ele irá envolver o app.

export function Background({ children }: Props) {
  //Desestruturando o código para ficar mais bonito
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
      {children}
    </LinearGradient>
  );
}
