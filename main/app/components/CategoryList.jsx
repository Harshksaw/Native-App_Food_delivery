import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import uidata from '../constants/uidata'


const CategoryList = ({setSelectedCategory ,setSelectedSelection, setSelectedValue }) => {
    const [selected, setSelected] = useState(null)
const categories = [1,2,3,4,5];


  return (
    <FlatList data= {uidata.categories}  
    showsHorizontalScrollIndicator={false}
    horizontal
    style={{marginTop: 5}}
    keyExtractor={(item)=> item._id}
    renderItem={({item}) => <TouchableOpacity>
        
    </TouchableOpacity>}
    />


  )
}

export default CategoryList

const styles = StyleSheet.create({})