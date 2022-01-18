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
import ProductsFlatList from '../../../components/flatlistitems/ProductsFlatList';

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
];

export default function InvisibleGrille() {

    const renderItem = ({ item }) => (
        <ProductsFlatList />
    );

    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:150,
        backgroundColor: 'transparent',
    },
});