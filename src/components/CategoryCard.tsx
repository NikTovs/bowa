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
        marginTop: 18,
        paddingTop: 10,
        alignItems: 'center',
        width: 153,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colors.border
    },
    title: {
        marginTop: 10,
        marginBottom: 15,
        color: colors.categoryTitle,
        fontWeight: 'bold',
        fontSize: 16,
        maxWidth: 136,
        textAlign: 'center'
    }
})