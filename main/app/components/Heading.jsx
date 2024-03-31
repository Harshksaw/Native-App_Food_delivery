import {TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading = ({heading, onPress}) => {
  return (
    <View style={{flexDirection: 'row' , marginTop: 15, marginBottom:7 , justifyCOntent: "space-betwen", marginRight: 16 }}>

      <Text style={{
        marginLeft: 16,
        fontSize: 20,
        fontFamily: 'bold',
        color: 'black',
      }}>
        
        {heading}
      </Text>

      <TouchableOpacity onPress={onPress}>
        <Ionicons name="grid" size={20} color={COLORS.secondary}/>
      </TouchableOpacity>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({})