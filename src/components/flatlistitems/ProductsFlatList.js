/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Images from '../../constants/Images';

const ProductsFlatList = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}>
                <View style={styles.maincontainer}>
                    <View style={styles.textcontainer}>
                        <Text style={styles.headingstyle} numberOfLines={3}>
                            Mozzie Grille Window{'\n'}Grille
                        </Text>
                        <Text style={styles.shopnowbuttonstyle}>
                            Shop Now
                            <Text style={styles.leftarrowstyle}>
                                →
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.imagecontainerstyle}>
                        <Image source={Images.invisiblegrille} style={styles.imagestyle}>
                        </Image>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 150,
        paddingVertical: 10,
        paddingLeft: 15,
        marginRight: -40
    },

    maincontainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '85%',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        paddingLeft: 0
    },

    textcontainer: {
        width: '50%',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },

    imagecontainerstyle: {
        width: '40%',
        paddingRight: 25,
        alignSelf: 'center'
    },

    headingstyle: {
        fontSize: 22,
        color: '#000000',
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontWeight: '800'
    },

    shopnowbuttonstyle: {
        color: '#F47325',
        fontSize: 14,
        textAlignVertical: 'bottom',
        fontWeight: '700'
    },

    leftarrowstyle: {
        fontSize: 30,
        textAlignVertical: 'center',
        alignSelf: 'center'
    },

    imagestyle: {
        height: 103,
        width: 132,
        resizeMode: 'contain',
    },

});

export default ProductsFlatList;
