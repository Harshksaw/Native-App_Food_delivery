// // Importing necessary components and functionalities
// import { View, Text, TextInput, ScrollView } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native'
// import { StatusBar } from 'react-native'
// import * as Icon from "react-native-feather";
// import { themeColors } from '../theme/index';
// import Categories from '../components/categories';

// export default function HomeScreen() {
//     return (
//         <SafeAreaView className="bg-black">
//             <StatusBar barStyle="dark-content">

//                 <View className="flex-row items-center space-x-2 px-4 pb-2 ">
//                     <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
//                         <Icon.Search height="25" width="25" stroke="gray" />
//                         <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
//                         <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
//                             <Icon.MapPin height="20" width="20" stroke="gray" />
//                             <Text className="text-gray-600">New York, NYC</Text>
//                         </View>
//                     </View>
//                     <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
//                         <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
//                     </View>
//                 </View>


//                 <ScrollView showsVerticalScrollIndicator={false}
//                     contentContainerStyle={{
//                         paddingBottom: 20
//                     }}>

//                     <Categories />

//                 </ScrollView>
//             </StatusBar>
//         </SafeAreaView>

//     )
// }

import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme/index';

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFF' }}>
            <StatusBar barStyle="dark-content" />

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 8,
                    paddingBottom: 2,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon.Search height={25} width={25} stroke="gray" />

                    <TextInput
                        style={{ flex: 1, marginLeft: 8, fontSize: 16, color: 'black', backgroundColor: 'transparent' }}
                        placeholder="Restaurants"
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderLeftWidth: 2, paddingLeft: 8, borderLeftColor: 'gray' }}>
                        <Icon.MapPin height={20} width={20} stroke="gray" />
                        <Text style={{ color: 'gray' }}>Location</Text>
                    </View>
                </View>

                <View style={{ padding: 3, backgroundColor: themeColors.bgColor(1), borderRadius: 20 }}>
                    <Icon.Sliders height={20} width={20} stroke="white" strokeWidth={2.5} />
                </View>
            </View>
        </SafeAreaView>
    );
}
