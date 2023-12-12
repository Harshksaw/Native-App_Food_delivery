// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'

import OrderPreparingScreen from './screens/OrderPreparingScreen';
import CartScreen from './screens/cartScreen';
import DeliveryScreen from './screens/DeliveryScreen';






const Stack = createNativeStackNavigator();




export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} />
      <Stack.Screen name="OrderPreparing" options={{presentation:'fullScreenModal'}} component={OrderPreparingScreen} />
      <Stack.Screen name="DeliveryScreen" options={{presentation:'fullScreenModal'}} component={DeliveryScreen} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

