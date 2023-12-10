import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();

  let item = params;
  console.log('Formatted Item:', JSON.stringify(item, null, 2));


  return (
    <View>
      <CartIcon/>
      <StatusBar style="light"/>
      
      
      <ScrollView>
        <View className="relative">
          <Image source={item.image} className="w-full h-72" />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopEndRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>

            <View className="flex-row space-x-2 my-1">
              <Text className="text-lg font-bold pt-2">Title</Text>
              <View className="flex-row item space-x-2">
                <Image
                  source={require("../assets/restaurants/icons8-star-48.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">Rating</Text>
                  <Text className="text-gray-700"> (review)</Text> ·{" "}
                  <Text className="font-semibold text-gray-700">Type</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs"> Nearby · adress</Text>
              </View>
            </View>
          </View>
          <Text className="text-gray-500 mt-2">{item.description}</Text>
        </View>
        <View className="pb-36 bg-gray-300">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
            {
              item.dishes.map((dish, idx) => (
                <DishRow item={dish} key={idx}/>
              ))
            }


        </View>
      </ScrollView>
    </View>
  );
}
