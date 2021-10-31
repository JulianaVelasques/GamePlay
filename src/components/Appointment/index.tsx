import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import { styles } from './styles';

export type GuildProps = {};

export type AppointmentsProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};
type Props = RectButton & {
  data: AppointmentsProps;
};

export function appointments({ data, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <View style={styles.container}></View>
    </RectButton>
  );
}
