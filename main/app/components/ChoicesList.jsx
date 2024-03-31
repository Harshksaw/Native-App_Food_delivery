import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import uidata from '../constants/uidata'

const ChoicesList = () => {
  return (
    <View>
      <Text
      style={{fontSize: 20,
        marginVertical: 8,
        fontSize: 18,
        fontFamily:'bold',

    }}
      >
        Pick Restaurants
      </Text>

    
    <FlatList
    data= {uidata.choiceList}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    horizontal
    scrollEnabled
    style={{marginTop : 5}}
    renderItem={({item}) => (
        <TouchableOpacity style={{backgroundColor: }}>

        </TouchableOpacity>
    )}
    />
    </View>
  )
}

export default ChoicesList

const styles = StyleSheet.create({})