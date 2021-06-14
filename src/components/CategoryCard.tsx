import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'

import colors from '../../assets/utils/colors';

type Type = {
    title: string
    img: ImageSourcePropType
}

export const CategoryCard: FC<Type> = ({ title, img }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={img} />
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        maxWidth: 153,
        borderWidth: 1,
        borderRadius: 15,
    },
    title: {
        marginTop: 20,
        color: colors.categoryTitle,
    }
})