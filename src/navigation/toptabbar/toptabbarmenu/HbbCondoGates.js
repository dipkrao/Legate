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

export default function HbbCondoGates() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.textstyle}>HbbCondoGates Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'pink'
    },
    textstyle:{
        fontSize:40,
        justifyContent:'center',
        alignSelf:'center',
    }
});