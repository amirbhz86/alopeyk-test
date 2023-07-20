import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import HomeStack from './HomeStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from '../Components/BottomTab';
import StatusOrders from '../Screens/StatusOrders/StatusOrders';
import { colors } from '../DesignTokens/colors';
import { HomeSVG } from '../Assets/Svg/Index';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
  return (
    <Tab.Navigator
      lazy={true}
      screenOptions={{
        tabBarStyle: {
          // Set background color here
          backgroundColor: '#f0f0f0', // Replace with your desired background color
        },
        detachPreviousScreen: true, // Add this option
      }}
      initialRouteName={'CATEGORIES_SCREEN'}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen
        options={{
          tabBarLabel: 'خانه',
          tabBarIcon: focused => (
            <HomeSVG
              color={focused ? colors.blue : colors.gray[400]}
              width={20}
              height={20}
            />
          ),
        }}
        name={'HOME_STACK'}
        component={HomeStack}
      />
      <Tab.Screen
        name={'STATUS_ORDERS_SCREEN'}
        component={StatusOrders}
        options={{
          tabBarLabel: 'سفارش ها',
          tabBarIcon: focused =>
            focused ? (
              <Image
                style={s.greenRequest}
                source={require('../Assets/Icons/green-request.png')}
              />
            ) : (
              <Image
                style={s.request}
                source={require('../Assets/Icons/request.png')}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const s = StyleSheet.create({
  request: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  greenRequest: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
});
