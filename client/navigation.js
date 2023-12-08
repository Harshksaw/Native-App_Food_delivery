// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import ResturantScreen from './screens/ResturantScreen';

const Stack = createNativeStackNavigator();




export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Resturant" component={ResturantScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

