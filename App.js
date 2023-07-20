import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './App/Navigators/AppNavigator';

const App = props => {
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
