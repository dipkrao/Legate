
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
import OTPInputView from '@twotalltotems/react-native-otp-input';


export default function VerifyCode() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 20}}>
                <Image source={Icons.legateicon} style={styles.legatelogostyle} />
            
                    <View style={{ flexDirection: 'row', paddingVertical: 20, paddingBottom: 10 }}>
                        <Image source={Icons.backicon} style={styles.backiconstyle} />
                        <Text style={styles.usernametextstyle}>
                            Hi, Jonh
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={styles.verifytextstyle}>
                            Verification Code
                        </Text>
                        <Text style={styles.bodytextstyle}>
                            Please enter the 4 digit Verification code send to{'\n'} +65 1234 4112
                        </Text>
                    </View>
            
                {/* OTP INPUT VIEW */}
                <View style={styles.otpContainer}>
                    <OTPInputView
                        pinCount={4}
                        autoFocusOnLoad={false}
                        selectionColor='#F47325'
                        style={styles.otpInputContainer}
                        codeInputFieldStyle={styles.underlineStyleBase}
                    />
                    <View style={styles.buttoncontainerstyle}>
                        <CommonButton onPress={() => navigation.navigate('BottomTabBarNavigator')} children="Confirm" />
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },

    legatelogostyle: {
        height: '16%',
        width: '22%',
        alignSelf: 'flex-start',
        resizeMode: 'contain'
    },

    backiconstyle: {
        width: 10,
        height: 15,
        alignSelf: 'center'
    },

    usernametextstyle: {
        fontSize: 16,
        paddingHorizontal: 20,
        color: '#000000'
    },

    verifytextstyle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        paddingHorizontal: 20,
    },

    bodytextstyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#333333',
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    otpContainer: {
        alignItems: 'center',
    },

    otpInputContainer: {
        width: '80%',
        height: 100,
        paddingTop: 30,
    },

    underlineStyleBase: {
        color: '#30452D',
        paddingBottom: 10,
        borderWidth: 2,
        fontSize: 22,
        elevation: 1,
        alignItems: 'center',
    },

    buttoncontainerstyle: {
        paddingVertical: 20,
    },
});