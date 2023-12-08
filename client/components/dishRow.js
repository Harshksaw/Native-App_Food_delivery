import React from 'react';
import { View, Text } from 'react-native';

export default function DishRow({item}) {
  return (
    <View className="flex flex-row item-center bg-white p-3 roudned-3xl shadow-2xl mb-3 mx-2">
      <Image source={item.image} className="w-20 h-20 rounded-2xl" />
      <View className="flex flex-col ml-2">
        <Text className="text-lg font-bold">{item.name}</Text>
        <Text className="text-sm text-gray-500">{item.description}</Text>
        <View className="flex flex-row item-center space-x-2">
          <Text className="text-lg font-bold">${item.price}</Text>
          <Text className="text-sm text-gray-500">· {item.calories} cal</Text>
        </View>
      </View>

     </View>
  );
}
