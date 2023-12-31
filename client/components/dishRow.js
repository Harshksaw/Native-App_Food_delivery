import * as Icon from "react-native-feather";

import { Image, Text, TouchableOpacity, View } from "react-native";
import { addToCart, removeFromCart, selectCartItems } from "../redux/slices/cartSlice";

import React from "react";
import { themeColors } from "../theme";
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';

export default function DishRow({ item }) {

  const dispatch = useDispatch()
  // ...

  const totalItems = useSelector(state => selectCartItems(state, item.id));

  const handleIncrease = ()=>{
    dispatch(addToCart({...item}))

  }
  const handleDecrease = ()=>{
    dispatch(removeFromCart({id:item.id}))
  }


  return (
    <View className="flex flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image source={item.image} className="w-20 h-20 rounded-2xl" />
      <View className="flex flex-1 space-y-3">
        <Text className="text-lg font-bold">{item.name}</Text>
        <Text className="text-sm text-gray-500">{item.description}</Text>

        <View className="flex-row items-center pl-3 justify-between">
          <Text className="text-lg font-bold">${item.price}</Text>

         
          <View className="flex-row items-center">
            
            <TouchableOpacity
            disabled={!totalItems.length }
            onPress={handleDecrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>

            <Text className="px-3">{totalItems.length}</Text>

            <TouchableOpacity
            onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>


          </View>

        </View>
      </View>
    </View>
 
  );
}
