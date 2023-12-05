// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator();




export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

