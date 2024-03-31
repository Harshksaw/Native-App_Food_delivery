
import { View, Text, Image } from 'react-native'
import React from 'react'

const CategoryItem = ({ category, selected }) => {
    return (
        <View style={{
            marginLeft: 12,
            padding: 5,
            alignItems: 'center',
            width: 80,
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 1,
            height: 55,
            borderColor: category.value == selected ? COLORS.secondary : 'transparent',
            shadowColor: SHADOWS.small
        }}>

            <Image
                src={{ uri: category.imageUrl }}
                style={{ width: 30, height: 30 }}
            />
            <Text style={{ marginTop: 5, fontSize: 12, color: COLORS.primary }}>{category.title}</Text>

        </View>
    )
}

export default CategoryItem