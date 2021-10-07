//To centralize imports - Routes
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

//To set background transparent
const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'tranparent',
  },
};

export function Routes() {
  return (
    <NavigationContainer theme={myTheme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}
