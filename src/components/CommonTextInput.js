/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';

const CommonTextInput = ({ children, ...rest }) => {
    return (
        <View stryle={styles.textinputcontainerstyle}>
            <TextInput
                name="phone"
                style={styles.phoneInput}
                keyboardType="numeric"
                placeholder="Phone Number"
                placeholderTextColor="#B4B4B4"
                maxLength={10}
            />
        </View>
    );
};

export default CommonTextInput;

const styles = StyleSheet.create({
    textinputcontainerstyle: {
        width: 326,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    phoneInput: {
        color: '#9E9E9E',
        fontSize: 14,
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 15
    },


});
