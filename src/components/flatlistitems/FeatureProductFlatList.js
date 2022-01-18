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
import Icons from '../../constants/Icons';

const FeatureProductFlatList = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}>
                <View style={styles.maincontainer}>
                    <View style={styles.imagecontainerstyle}>
                        <Image source={Images.invisiblegrille} style={styles.imagestyle}>
                        </Image>
                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={styles.headingstyle} numberOfLines={3}>
                            Mozzie Grille Window{'\n'}Grille
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.shopnowbuttonstyle}>
                                Order 23 times
                            </Text>
                            <Image source={Icons.dotmenu} style={styles.dotmenustyle}>

                            </Image>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1/2,
        backgroundColor: 'transparent',
        height: 200,
        paddingVertical: 20,
        paddingHorizontal: 0,
    },

    maincontainer: {
        backgroundColor: 'white',
        width: 150,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        paddingTop: 0
    },

    textcontainer: {
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },

    imagecontainerstyle: {
        width: '100%',
        alignSelf: 'center'
    },

    headingstyle: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontWeight: '400'
    },

    shopnowbuttonstyle: {
        color: '#000000',
        fontSize: 10,
        textAlignVertical: 'bottom',
        fontWeight: '400'
    },

    dotmenustyle: {
        height: 20,
        width: 15,
        alignSelf: 'center'
    },

    imagestyle: {
        height: 129,
        width: 129,
        resizeMode: 'contain',
        justifyContent: 'center'
    },

});

export default FeatureProductFlatList;
