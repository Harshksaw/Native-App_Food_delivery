import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
// import { StarIcon } from 'react-native-heroicons/solid';
// import { MapPinIcon } from 'react-native-heroicons/outline';
// import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

export default function RestaurantCard({ item }) {
    const navigation = useNavigation();

    return (

        <TouchableWithoutFeedback
        onPress={()=> navigation.navigate('Restaurant', {...item})}
        
        >

            <View style={{ shadowColor : themeColors.bgColor(0.2), shadowRadius: 7 }} className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />

                <View className="px-3 pb-4 space-y-2">

                    <Text className="text-lg font-bold pt-2">Title</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/restaurants/icons8-star-48.png')} className="h-4 w-4" />
                        <Text className="text-xs">
                            <Text className="text-green-700">Rating</Text>
                            <Text className="text-gray-700"> (review)</Text> · <Text className="font-semibold text-gray-700">Type</Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width={15} height={15} />
                        <Text className="text-gray-700 text-xs"> Nearby · adress</Text>
                    </View>
                </View>
            </View>


        </TouchableWithoutFeedback >

    );
}
