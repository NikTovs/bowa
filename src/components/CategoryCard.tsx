import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native'

type Type = {
    title: string
    img: string
}

export const CategoryCard: FC<Type> = ({title, img}) => {
    return(
        <View>
            <Text>
                component works
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})