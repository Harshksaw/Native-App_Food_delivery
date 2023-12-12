import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function OrderPreparing() {

  const navigation = useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('DeliveryScreen');
    },3000)
  },[])
  

  return (
    <View className ="flex-1 bg-gray-400 items-center justify-center">
        <Image  source={require('../assets/images/delivery.gif')}/>

     </View>
  );
}
