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
import Icons from '../../../constants/Icons';
import SearchBar from "react-native-dynamic-search-bar";
import Spinner from "react-native-spinkit";
import HomeTopTab from '../../../navigation/toptabbar/HomeTopTab';
import FeatureProductFlatList from '../../../components/flatlistitems/FeatureProductFlatList';

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
];


export default function Home() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <FeatureProductFlatList />
    );
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.topcontainerstyle}>
                    <Image source={Icons.legateicon} style={styles.legatelogostyle} />
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={styles.usernametextstyle}>
                            Hi, Jonh
                        </Text>
                        <Text style={styles.titletextstyle}>
                            What are you looking for{'\n'}today?
                        </Text>
                    </View>
                    {/* SERACH BAR */}
                    <View style={styles.searchbarcontainerstyle}>
                        <SearchBar
                            placeholder="Search here"
                            fontColor="#BABABA"
                            iconColor="#BABABA"
                            shadowColor="#282828"
                            cancelIconColor="#BABABA"
                            backgroundColor="transparent"
                            onPress={() => alert("onPress")}
                            onChangeText={(text) => console.log(text)}
                        />
                    </View>
                </View>
                {/* CUSTOM TOP TAB BAR */}
                <View style={styles.bodycontainerstyle}>
                    <View style={styles.toptabbarheader}>
                        <HomeTopTab />

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 16, color: '#000000' }}>
                            Featured Products
                        </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('FeatureProducts')}>
                        <Text style={{ fontSize: 14, color: '#F47325' }}>
                            See All
                        </Text>
                        </TouchableOpacity>
                      
                    </View>
                    <View style={{paddingBottom:40}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={DATA}
                            numColumns={2}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },

    topcontainerstyle: {
        paddingHorizontal: 10,
        padding: 20,
        height: 220,
    },

    legatelogostyle: {
        height: '16%',
        width: '22%',
        alignSelf: 'flex-start',
        resizeMode: 'contain',
    },

    backiconstyle: {
        width: 10,
        height: 15,
        alignSelf: 'center'
    },

    usernametextstyle: {
        fontSize: 16,
        color: '#000000'
    },

    titletextstyle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
    },

    searchbarcontainerstyle: {
        borderColor: '#BABABA',
        borderWidth: 1,
        borderRadius: 10
    },

    bodycontainerstyle: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },

    toptabbarheader: {
        width: "100%",
        height: 220,
    },
});