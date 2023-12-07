import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { themeColors } from '../theme';
import ResturantCard from './resturantCard';

export default function FeaturedRow({title, description, resturants}) {
    return (
        <View>
            <View className=" flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-400 text-xs">{description}</Text>

                </View>
                <TouchableOpacity>
                <Text style={{ color: themeColors.text, fontSize: 14 }}>See all</Text>
                </TouchableOpacity>

            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5"
            >
                {
                    resturants.map((resturant, index) => {
                        return (
                            <ResturantCard
                                item={resturant}
                                key={index}

                            />
                        )
                    })
                }

            </ScrollView>
        </View>
    );
}
