import React from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';
import * as Icon from "react-native-feather";
export default function ResturantCard({item }) {
    return (
        <TouchableNativeFeedback>
            <View className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="flex-row items-center space-x-1">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/categories/icons8-tropical-fish-96.png')}
                        className="h-4w-4"/>
                        <Text className="text-xs">
                            <Text className="text-green-200">{item.stars}</Text>
                            <Text className="text-gray-700">
                                ({item.reviews} review) . <Text className="font-semibold">{item.category}</Text>
                            </Text>
                        </Text>


                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width="15" height= "15"/>
                        <Text className="text-gray-700 text-xs">Nearby .</Text>


                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}
