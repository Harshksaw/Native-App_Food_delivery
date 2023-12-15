import React from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { featured } from "../constants";

import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import {useSelector} from "react-redux"

import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../redux/slices/restaurantSlice";
export default function CartScreen() {
    // const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    

    return (
        <View className="bg-white flex-1">
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    onPress={navigation.goBack}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Your cart</Text>
                    <Text className="text-center text-gray-500">restuarnt name</Text>
                </View>
            </View>

            <View
                style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="px-4 items-center flex-row"
            >
                <Image
                    source={require("../assets/categories/icons8-hamburger-96.png")}
                    className="w-20 h-20 rounded-full"
                />

                <Text className="flex-1 pl-4 ">Delivery tiem</Text>
                <TouchableOpacity className="">
                    <Text
                        className="font-bold Text-lg"
                        style={{ color: themeColors.Text }}
                    >
                        ASAP{" "}
                    </Text>
                    <Text className="Text-gray-500">45-55 min</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                className="bg-white pt-5"
                contentContainerStyle={{
                    paddingBottom: 50,
                }}
            >
                {restaurant.dishes.map((dish, index) => {
                    return (
                        <View
                            key={index}
                            className="flex-row items-center justify-between px-5 space-x-3 bg-white rounded-full"
                        >
                            <Text className="font-bold" style={{ color: themeColors.Text }}>
                                2x
                            </Text>
                            <Image source={dish.image} className="w-20 h-20 rounded-full" />

                            <Text className="font-bold Text-lg">{dish.name}</Text>
                            <Text className="Text-gray-500">{dish.description}</Text>
                            <Text className="font-semibold text-base">$22</Text>
                            <TouchableOpacity
                                className="p-1 rounded-full"
                                style={{ backgroundColor: themeColors.bgColor(1) }}
                            >
                                <Icon.Minus
                                    strokeWidth={2}
                                    height={20}
                                    width={20}
                                    stroke="white"
                                />
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>

            <View
                className="p-6 px-8 rounded-2xl space-y-4 "
                style={{ backgroundColor: themeColors.bgColor(0.2) }}
            >
                <View className="flex-row justify-between">
                    <Text className="Text-gray-700 ">Subtotal</Text>
                    <Text className="Text-gray-700 ">$20</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="Text-gray-700 ">Delivery Fee</Text>
                    <Text className="Text-gray-700 ">$2</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className=" font-extrabold Text-gray-700 ">Order Total</Text>
                    <Text className="Text-gray-700  font-extrabold">$22</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("OrderPreparing")}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="p-3 rounded-full"
                >
                    <Text className="text-white text-center font-bold text-lg">
                        Place Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
