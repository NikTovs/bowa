import React, { FC } from 'react';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native'

import { CategoryCard } from '../components/CategoryCard';
import imagePath from '../../assets/utils/imgTitlePath';
import imgCategoryPath from '../../assets/utils/imgCategoryPath';

export const Categorys: FC = () => {
    return (
        <SafeAreaView style={styles.container} >
            <Image source={imagePath.bowa} style={styles.title} />
            <Image source={imagePath.medical} style={styles.subTitle} />
            <View style={styles.categorysContainer}>
                <View style={styles.categorysColumn}>
                    <CategoryCard title='Заявка на ремонт' img={imgCategoryPath.repair} />
                    <CategoryCard title='Чат з менеджером' img={imgCategoryPath.chat} />
                    <CategoryCard title='Мій кабінет' img={imgCategoryPath.monitor} />
                </View>
                <View style={styles.categorysColumn}>
                    <CategoryCard title='Відео-інструкції' img={imgCategoryPath.video} />
                    <CategoryCard title='Дзвіноку підтримку' img={imgCategoryPath.support} />
                    <CategoryCard title='Контакти' img={imgCategoryPath.handshake} />
                    <CategoryCard title='Продукція' img={imgCategoryPath.product} />

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25
    },
    title: {
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 3,
        height: 20
    },
    subTitle: {
        marginTop: 15,
        alignSelf: 'center',
        width: 130,
        height: 7
    },
    categorysContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 17
    },
    categorysColumn: {
        flex: 1,
        justifyContent: 'flex-start'
    }
})
