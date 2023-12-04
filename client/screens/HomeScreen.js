import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'react-native'
import { TextInput } from 'react-native'

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content">

                <View className="flex-row items-center space-x-2 px-4  pb-2">
                    <Text className=" flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                        <Text>dddd</Text>

                        {/* <Icon.Search height="25" width="25" stroke="gray" /> */}
                        <TextInput className="flex-1 ml-2 text-sm bg-transparent outline-none" placeholder="Resturants" />
                        <View className="flex-row items-center space-x-1  border-l-2 pl-2 border-l-gray-300" >
                            {/* <Icon.MapPin height="20" width="20" stroke="gray"/> */}
                            <Text className="text-gray-500">Location</Text>
                        </View>
                        <View className="p-3 bg-gray-600 rounded-full">
                            {/* <Icon.Sliders height="20" width="20" stroke="white" strokeWidth={2.5}/> */}

                        </View>

                    </Text>
                </View>
            </StatusBar>
        </SafeAreaView>
    )
}