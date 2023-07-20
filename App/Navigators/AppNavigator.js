import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LocationMap from '../Screens/LocationMap/LocationMap';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const AppNavigator = props => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={'TAB_NAVIGATOR'}>
      <Stack.Screen component={TabNavigator} name={'TAB_NAVIGATOR'} />
      <Stack.Screen component={LocationMap} name={'LOCATION_MAP_SCREEN'} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
