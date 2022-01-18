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
    ImageBackground,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CommonButton from '../../components/CommonButton';
import { Icons, Images } from '../../constants/Index';


export default function SignUp() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={Images.signinbackground} style={styles.backgroundimagestyle} imageStyle=
                {{ opacity: 0.4 }}>
                <View style={{ justifyContent: 'space-between', paddingVertical: 30, flex: 1, paddingTop: 60 }}>
                    <View>
                        <Image source={Icons.legatelogo} style={styles.legatelogostyle} />
                        <View style={styles.fullnamecontainerstyle}>
                            <TextInput
                                name="Full Name"
                                style={styles.phoneInput}
                                keyboardType="numeric"
                                placeholder="Phone Number"
                                placeholderTextColor="#B4B4B4"
                                maxLength={10}
                            />
                        </View>
                        <View style={styles.phonecontainerstyle}>
                            <TextInput
                                name="Phone Number"
                                style={styles.phoneInput}
                                keyboardType="numeric"
                                placeholder="Phone Number"
                                placeholderTextColor="#B4B4B4"
                                maxLength={10}
                            />
                        </View>
                        <View style={styles.textinputcontainerstyle}>
                            <TextInput
                                name="Individual"
                                style={styles.phoneInput}
                                keyboardType="numeric"
                                placeholder="Phone Number"
                                placeholderTextColor="#B4B4B4"
                                maxLength={10}
                            />
                        </View>
                    </View>
                    <View>
                        <CommonButton onPress={() => navigation.navigate('VerifyCode')} children="Sign Up" />
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20 }}>
                            <Text style={styles.noaccountstyle}>
                                Don’t have an account?&nbsp;
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.signupstyle}>
                                    Sign In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    backgroundimagestyle: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: '#000000'
    },

    fullnamecontainerstyle: {
        width: 326,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    phonecontainerstyle: {
        width: 326,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 50
    },

    textinputcontainerstyle: {
        width: 326,
        height: 50,
        alignSelf: 'center',
        paddingTop: 50
    },

    phoneInput: {
        color: '#9E9E9E',
        height: 50,
        fontSize: 14,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 15,
    },

    legatelogostyle: {
        height: '40%',
        width: '70%',
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    noaccountstyle: {
        fontSize: 16,
        color: 'white',
        alignSelf: 'center'
    },
    signupstyle: {
        fontSize: 16,
        color: '#F47325',
        alignSelf: 'center',
        fontWeight: '700',
        textDecorationLine:'underline'
    }
});