import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StatusBar,
} from 'react-native';
import FeatureProductFlatList from '../../../components/flatlistitems/FeatureProductFlatList';
import Icons from '../../../constants/Icons';

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'Fourth Item',
    },
    {
        id: '5',
        title: 'Fifth Item',
    },
];

export default function FeatureProducts() {
    const navigation = useNavigation();
    
    const renderItem = ({ item }) => (
        <FeatureProductFlatList />
    );

    return (
        <View style={styles.container}>

            <View style={styles.topHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={Icons.backicon} style={styles.backiconstyle} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Featured  Products
                </Text>
                <View></View>
            </View>
            <View style={{ padding: 15 }}>
                <Text style={styles.varianttextstyle}>
                    15 Variants Available
                </Text>
            </View>
            <View style={styles.bodycontainerstyle}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    topHeader: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        height: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Platform.select({
            ios: 40,
            android: 0
        })
    },

    backiconstyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },

    headerText: {
        fontSize: 20,
        color: '#000000',
        fontWeight: '600',
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginRight: 15,
    },

    varianttextstyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400'
    },

    bodycontainerstyle: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
});