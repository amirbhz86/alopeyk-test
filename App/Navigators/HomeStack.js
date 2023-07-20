import { View, Text } from 'react-native';
import React from 'react';
import Categories from '../Screens/Categories/Categories';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../Screens/ProductList/ProductListScreen';
import LocationMap from '../Screens/LocationMap/LocationMap';

const Stack = createStackNavigator();
const HomeStack = props => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={'CATEGORIES_SCREEN'}>
      <Stack.Screen component={Categories} name={'CATEGORIES_SCREEN'} />
      <Stack.Screen
        component={ProductListScreen}
        name={'PRODUCT_LIST_SCREEN'}
        options={{
          animationEnabled: false,

        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
