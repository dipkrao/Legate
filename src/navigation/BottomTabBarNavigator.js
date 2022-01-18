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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/BottomTabBar/home/Home';
import Products from '../screens/BottomTabBar/products/Products';
import ForInquiry from '../screens/BottomTabBar/inquiry/ForInquiry';
import Notification from '../screens/BottomTabBar/notification/Notification';
import Profile from '../screens/BottomTabBar/profile/Profile';
import Icons from '../constants/Icons';


const Tab = createBottomTabNavigator();

export default function BottomTabBarNavigator(props, focused) {

    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false }} screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={Icons.homeicon}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#F47325' : '#3D4F63'
                            }}
                        />
                        <Text style={{ color: focused ? '#F47325' : '#3D4F63', fontSize: 10 }}>
                            Home
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Products" component={Products} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={Icons.producticon}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#F47325' : '#3D4F63'
                            }}
                        />
                        <Text style={{ color: focused ? '#F47325' : '#3D4F63', fontSize: 10 }}>
                            Products
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="ForInquiry" component={ForInquiry} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0, // space from bottombar
                            height: 84,
                            width: 84,
                            borderRadius: 60,
                            backgroundColor: '#FFFFFF',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 20, // space from bottombar
                                height: 54,
                                width: 54,
                                borderRadius: 58,
                                backgroundColor: '#FFD9C1',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: 4, // space from bottombar
                                    height: 46,
                                    width: 46,
                                    borderRadius: 58,
                                    backgroundColor: '#F47325',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    source={Icons.inquiryicon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 24,
                                        tintColor: focused ? '#FFFFFF' : '#FFFFFF'
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                ),
            }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={Icons.notificationicon}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#F47325' : '#3D4F63'
                            }}
                        />
                        <Text style={{ color: focused ? '#F47325' : '#3D4F63', fontSize: 10 }}>
                            Notification
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={Icons.profileicon}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#F47325' : '#3D4F63'
                            }}
                        />
                        <Text style={{ color: focused ? '#F47325' : '#3D4F63', fontSize: 10 }}>
                            Profile
                        </Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>

    );
};