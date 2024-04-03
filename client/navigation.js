// In App.js in a new project

import * as React from 'react';

import { Text, View } from 'react-native';

import CartScreen from './screens/CartScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import RestaurantScreen from './screens/RestaurantScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

